import React, { useState } from "react";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import ThemeSwitcher from "./components/Header/ThemeSwitcher/ThemeSwitcher";
import Searchbar from "./components/Main/Searchbar/Searchbar";
import Main from "./components/Main/Main";
import Repos from "./components/Main/Repos/Repos";
import Footer from "./components/Footer/Footer";
import Error from "./components/UI/Error/Error";
import Loading from "./components/UI/Loading/Loading";
import ThemeContext from "./context/Theme";

const App = () => {  
    const [repos, setRepos] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const GITHUB_API = "https://api.github.com/users/";

    function setAppState(loading, error, repos) {
        setLoading(loading);
        setError(error);
        setRepos(repos);
    }

    async function fetchNextRepos(term) {
        /**
        * This function is used to get all the repositories for a user who has more than 100. 
        * The Github API limits the results to only 100 per page (https://docs.github.com/en/rest/reference/repos), 
        * so this function is called when the first query execution from handleSearch() function 
        * returns 100 - that means the user has more repositories which should be retrieved from additional queries.
        */
        let result;
        let pageNumber = 2;
        let allRepos = [];
      
        do {
            let response = await fetch(GITHUB_API + term + "/repos?per_page=100&page=" + pageNumber);  
            result = await response.json();

            allRepos = [...allRepos, ...result];
            pageNumber++;
        } while (result.length >= 100);

        return allRepos;
    }

    const sortByStars = (firstRepo, secondRepo) => secondRepo.stargazers_count - firstRepo.stargazers_count;

    async function handleSearch(term) {
        setAppState(true, "", []);
        if (!term) {
            setAppState(false, "You need to provide a username.", []);
        }
        else {
            fetch(GITHUB_API + term + "/repos?per_page=100")
                .then(res => res.json())    
                .then(res => {
                    if (res.message === "Not Found") {
                        setAppState(false, "There's no user with that username.", []);
                    }
                    else if (!res.length) {
                        setAppState(false, "Typed user does not have any public repositories.", []);
                    }
                    else {
                        if (res.length < 100) {
                            setAppState(false, "", res.sort(sortByStars));
                        }
                        else {
                            fetchNextRepos(term).then((res2) => {
                                let finalRepos = [...res, ...res2];
                                setAppState(false, "", finalRepos.sort(sortByStars));
                            });
                        }
                    }
                }).catch(() => {
                    setAppState(false, "Could not fetch the data for that query.", []);
                });
        }
    }



    return (
        <ThemeContext>
            <Layout 
                header={
                    <Header>
                        <h1 className="logo">repo-searcher</h1>
                        <ThemeSwitcher/>
                    </Header>
                }
                body={
                    <Main>
                        <Searchbar onSearch={(term) => {handleSearch(term);}} changeSort={() => setRepos([...repos].reverse()) }/>
                        {loading ? <Loading/> : <></>}
                        {error ? <Error error={error}/> : <></>} 
                        {repos ? <Repos repos={repos}/> : <></>} 
                    </Main>
                }
                footer={
                    <Footer/>
                }
            />
        </ThemeContext>
    );
};

export default App;
