import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import $ from "jquery"
import { useState, useEffect } from "react"

export default function BouncingScrollDownIndicator() {
    const [isAtBottom, setIsAtBottom] = useState(false)

    function scrollDown() {
        $("html, body").animate({
            scrollTop: $(document).height()
        }, 1000)
    }

    useEffect(() => {
        $(window).on("scroll", () => {
            if ($(window).scrollTop() + $(window).height() === $(document).height()) {
                setIsAtBottom(true)
            } else {
                setIsAtBottom(false)
            }
            console.log($(window).scrollTop() + $(window).height(), $(document).height())
        })
    }, [])

    return (
        <div className="fixed bottom-12 flex justify-center w-full">
            <button className={`${isAtBottom ? "opacity-0 pointer-events-none" : "opacity-100"} transition-opacity duration-100 animate-bounce shadow-lg rounded-full p-3 bg-white text-black dark:bg-brand-dark-light dark:text-white dark:shadow-brand-dark-lighter items-center justify-center flex`} type="button" title="Scroll down to very bottom of the page"
                onClick={scrollDown}>
                <FontAwesomeIcon icon={faChevronDown} className="h-6 w-6" />
            </button>
        </div>
    )
}