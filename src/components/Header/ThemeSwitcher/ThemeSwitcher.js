import React from "react";
import iconMoon from "../../../assets/icon-moon.svg";
import iconSun from "../../../assets/icon-sun.svg";
import useTheme from "../../../hooks/useTheme";
import {Wrapper, Body, Slider} from "./ThemeSwitcher.css";

const ThemeSwitcher = () => {
    const { dark, setDark } = useTheme();

    return (
        <Wrapper onClick={() => setDark(!dark)}>
            <img src={iconSun} alt="sun icon" />
            <Body>
                <Slider dark={dark} />
            </Body>
            <img src={iconMoon} alt="moon icon" />
        </Wrapper>
    );
};

export default ThemeSwitcher;