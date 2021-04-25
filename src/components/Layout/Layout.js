import React from "react";
import styled from "styled-components";
import headerBackground from "../../assets/bg-pattern-header.svg";

const Header = styled.header`
  background-image: url(${headerBackground});
  height: 160px;
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Main = styled.main`
    min-height: calc(93vh - 160px); /* viewport height minus header height  */
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Footer = styled.footer`
    font-size: 12px;
    padding: 20px 0;
    text-align: center;
    color: var(--text);
`;

/* eslint-disable react/prop-types */
function Layout (props) {
    return (
        <div>
            <Header>{props.header}</Header>
            <Main>{props.body}</Main>
            <Footer>{props.footer}</Footer>
        </div>
    );
}

export default Layout;