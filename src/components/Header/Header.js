import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const propTypes = {
    children: PropTypes.node.isRequired,
};

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  width: var(--content-width);
  margin: 0 auto;
  padding-bottom: 40px;
  justify-content: space-between;
  align-items: center;
`;

function Header(props) {
    return (
        <>
            <Wrapper>
                {props.children}
            </Wrapper>
        </>
    );
}

Header.propTypes = propTypes;

export default Header;