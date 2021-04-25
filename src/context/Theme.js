import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const propTypes = {
    children: PropTypes.node.isRequired,
};


export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [dark, setDark] = useState(null);

    useEffect(() => {
        if (localStorage.getItem("darkMode"))
            setDark(localStorage.getItem("darkMode") === "true");
        else {
            const isDarkModeDefault = window.matchMedia(
                "(prefers-color-scheme: dark)",
            ).matches;
            localStorage.setItem("darkMode", isDarkModeDefault);
            setDark(isDarkModeDefault);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("darkMode", dark);
        if (dark) document.documentElement.classList.add("dark-mode");
        else document.documentElement.removeAttribute("class");
    }, [dark]);

    return (
        <ThemeContext.Provider value={{ dark, setDark }}>
            {children}
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = propTypes;


export default ThemeProvider;