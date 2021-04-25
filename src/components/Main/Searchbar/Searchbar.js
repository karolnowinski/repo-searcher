import PropTypes from "prop-types";
import React, { useEffect, useState, useRef } from "react";
import useWindowDimensions from "../../../hooks/useWindowDimension";
import searchIconWhite from "../../../assets/icon-search-white.svg";
import {Wrapper, LeftSide, RightSide, Input, SearchButton, SortButton} from "./Searchbar.css";

const propTypes = {
    onSearch: PropTypes.func.isRequired,
    changeSort: PropTypes.func.isRequired,
};

function Searchbar(props) {
    const [term, setTerm] = useState("");
    const inputRef = useRef();
    const { width } = useWindowDimensions();

    const search = () => {
        props.onSearch(term);
    };

    const change = () => {
        props.changeSort();
    };

    useEffect(() => {
        inputRef.current.focus();
    }, [] );

    return (
        <Wrapper>
            <LeftSide>
                <Input 
                    value={term} 
                    onChange={(e) => setTerm(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && search()}
                    ref={inputRef}
                    type="text" 
                    placeholder="Type GitHub username..."/>
                <SearchButton 
                    onClick={search}>
                    {(width >= 500 ? "Search" : <img src={searchIconWhite} width="20px" height="auto"></img> )}
                </SearchButton>
            </LeftSide>
            <RightSide>
                <SortButton onClick={change}>{(width >= 500 ? "Sort" : "" )}</SortButton>
            </RightSide>
        </Wrapper>
    );
} 

Searchbar.propTypes = propTypes;

export default Searchbar;