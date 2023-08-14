import { useTheme } from "next-themes";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ThemeToggleButton() {
    const { theme, setTheme } = useTheme();
    const icon = theme === "dark" ? faMoon : faSun;
    const mode = theme === "dark" ? "Dark" : "Light";

    return (
        <button
            className="navbar-link-text lg:px-4"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}>

                <span className="lg:hidden inline-block">
                    {mode} Mode
                </span>

                <FontAwesomeIcon icon={icon} className="h-4 w-4 lg:ms-0 ms-2" />

        </button>
    )
}