import { useTheme } from "next-themes";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ThemeToggleButton() {
    const { theme, setTheme } = useTheme();
    const icon = theme === "dark" ? faSun : faMoon;

    return (
        <button
            className="navbar-link-text lg:px-4"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <div className="flex items-center">
                <FontAwesomeIcon icon={icon} className="h-4 w-4" />
            </div>

        </button>
    )
}