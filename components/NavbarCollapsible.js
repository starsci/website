import {useEffect, useRef, useState} from "react";
import {useBreakpoint} from "@/hooks/useBreakpoint";
import $ from "jquery";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

function NavbarCollapsible(props) {
    const parentRef = useRef(null);
    const {isLg} = useBreakpoint('lg');
    const transitionDuration = 150;
    const [isExpanded, setIsExpanded] = useState(false);
    const [isExpanded1, setIsExpanded1] = useState(false);

    useEffect(() => {
        const parent = $(parentRef.current);
        if (!isLg) {
            if (isExpanded) {
                parent.show();
            }
            else {
                parent.hide();
            }
        }
        else {
            parent.show();
        }
    }, [isLg, isExpanded]);

    function toggleNav() {
        const parent = $(parentRef.current);
        setIsExpanded1(!isExpanded1);
        parent.slideToggle(transitionDuration, () => {
            setIsExpanded(!isExpanded);
        });
    }

    return (
        <>
            <div className="block lg:hidden">
                <button
                    title="Toggle Navigation"
                    type="button"
                    onClick={toggleNav}
                    className="flex items-center px-3 py-2 border rounded border-white hover:bg-white hover:text-brand-dark-default transition-all duration-100">
                    {/* animate faBars spin to its side when toggle */}
                    <FontAwesomeIcon icon={faBars}
                                     className={`${isExpanded1 ? `transform rotate-90` : ``} transition-all ease-in-out duration-150`}/>
                </button>
            </div>
            <div
                ref={parentRef}
                className={`w-full bg-brand-blue-default absolute block top-full -mt-6 lg:bg-none lg:static lg:mt-0 lg:flex-grow lg:flex lg:items-center lg:w-auto lg:-ms-6`}>
                {props.children}
            </div>
        </>
    )
}

export default NavbarCollapsible;
