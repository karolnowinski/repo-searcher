import React from "react";
import PropTypes from "prop-types";
import StyledError from "./Error.css";

const propTypes = {
    error: PropTypes.string.isRequired,
};

function Error (props) {
    if (!props.error) return <></>;
    return (
        <StyledError>{props.error}</StyledError>
    );
}

Error.propTypes = propTypes;

export default Error;