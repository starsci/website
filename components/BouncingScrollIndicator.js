import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import $ from "jquery"
import { useState, useEffect } from "react"

function scrollDown() {
    $("html, body").animate({
        scrollTop: $(document).height()
    }, 1000)
}

export default function BouncingScrollDownIndicator(props) {
    const [isAtBottom, setIsAtBottom] = useState(false)

    function checkBottom() {
        if ($(window).scrollTop() + $(window).height() >= (props.bottomId ? $('#' + props.bottomId).offset().top : $(document).height())) {
            setIsAtBottom(true)
        } else {
            setIsAtBottom(false)
        }
    }

    useEffect(() => {
        $(checkBottom)
        $(window).on("scroll", checkBottom)
    }, [])

    return (
        <div className="fixed bottom-12 flex justify-center w-full">
            <button className={`${isAtBottom ? "opacity-0 pointer-events-none" : "opacity-100"} transition-opacity duration-200 animate-bounce shadow-lg rounded-full p-3 bg-white text-black dark:bg-brand-dark-light dark:text-white dark:shadow-brand-dark-lighter items-center justify-center flex`} type="button" title="Scroll down to very bottom of the page"
                onClick={scrollDown}>
                <FontAwesomeIcon icon={faChevronDown} className="h-6 w-6" />
            </button>
        </div>
    )
}