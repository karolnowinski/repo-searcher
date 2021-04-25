import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    children: PropTypes.node.isRequired,
};


function Body(props) {
    return (
        <>
            {props.children}
        </>
    );
}

Body.propTypes = propTypes;

export default Body;