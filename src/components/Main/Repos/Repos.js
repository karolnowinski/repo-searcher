import React, { useEffect, useState } from "react";
import Repo from "../Repo/Repo";
import PropTypes from "prop-types";
import {Wrapper, ShowMoreButton} from "./Repos.css";

const propTypes = {
    repos: PropTypes.array.isRequired,
};

function Repos(props)  {
    const [reposNumber, setReposNumber] = useState(12);

    function showMoreRepos () {
        setReposNumber(reposNumber + 12);
    }

    useEffect(() => setReposNumber(12), [props.repos]);

    return (
        <>
            <Wrapper>
                {props.repos.slice(0, reposNumber).map(repo => <Repo key={repo.id} {...repo} />)}
            </Wrapper>
            {(props.repos.length != 0 && !(reposNumber >= props.repos.length)) ? <ShowMoreButton onClick={showMoreRepos}>Show More</ShowMoreButton> : <></>}
        </>
    );
}

Repos.propTypes = propTypes;

export default Repos;