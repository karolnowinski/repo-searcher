import React from "react";
import styled from "styled-components";

const GithubLink = styled.a`
    background-color: var(--body-background);

    :hover {
        mix-blend-mode: exclusion;
    }
    
`;

function Footer () {
    return (
        <>
        Made with 🧡 as part of a recruitment task by <GithubLink 
                href="https://github.com/karolnowinski" 
                title="Go ahead 👀."> 
                karolnowinski
            </GithubLink>
        </>
    );
}

export default Footer;