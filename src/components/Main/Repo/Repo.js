import React from "react";
import PropTypes from "prop-types";
import {Wrapper, Title, Description, Language, Stars, Link} from "./Repo.css";

const propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    language: PropTypes.string,
    stargazers_count: PropTypes.number.isRequired,
    html_url: PropTypes.string.isRequired,
};

function Repo (props) {
    return (
        <Wrapper lang={props.language}>
            <Title>{props.name}</Title>
            <Description>{props.description}</Description>
            <Language lang={props.language}>
                {props.language ? props.language : "No main language" }
            </Language>
            <Stars>{props.stargazers_count}</Stars>
            <Link href={props.html_url} title={"Go to" + props.name + " repository page"}>Repository page</Link>
        </Wrapper>
    );
}

Repo.propTypes = propTypes;

export default Repo;