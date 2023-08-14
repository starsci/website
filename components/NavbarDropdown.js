import {faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function NavbarDropdown(props) {
    return (
        <div
            className="relative inline-block text-left">
            <div>
                <button
                    className="navbar-link-text"
                    id="options-menu"
                    aria-haspopup="true"
                    aria-expanded="true"
                    onClick={props.onClick}>
                    {props.title}
                    <FontAwesomeIcon
                        icon={props.isExpanded ? faCaretUp : faCaretDown}
                        className="ms-1 h-4 w-4"/>
                </button>
            </div>
            <div
                className={`transition ease-out duration-100 transform ${props.isExpanded ? `opacity-100` : `opacity-0 pointer-events-none`} absolute lg:right-0 lg:left-auto left-0 right-auto z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-brand-dark-default dark:text-white text-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
                tabIndex={-1}>
                <div
                    className="py-1"
                    role="none">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default NavbarDropdown;