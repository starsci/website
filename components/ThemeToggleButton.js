import { useTheme } from "next-themes";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function ThemeToggleButton() {
    const { systemTheme, theme, setTheme } = useTheme();

    const [text, setText] = useState(null);
    const [isDark, setIsDark] = useState(false);
    const [icon, setIcon] = useState(null);

    useEffect(() => {
        const c = theme === "system" ? systemTheme : theme;
        const d = c === "dark";
        setIsDark(d);
        setText(d ? "Dark Mode" : "Light Mode");
        setIcon(d ? faMoon : faSun);
    }, [theme, systemTheme]);

    return (
        <button
            className="navbar-link-text lg:px-4"
            onClick={() => {
                setTheme(isDark ? "light" : "dark")
            }}
            title={`Switch to ${isDark ? "Light" : "Dark"} Mode`}>

            <span className="lg:hidden inline-block">
                {text}
            </span>

            <FontAwesomeIcon icon={icon} className="h-4 w-4 lg:ms-0 ms-2" />

        </button>
    )
}