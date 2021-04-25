import { useContext } from "react";
import { ThemeContext } from "../context/Theme";

const useTheme = () => {
    const { dark, setDark } = useContext(ThemeContext);
    return { dark, setDark };
};

export default useTheme;