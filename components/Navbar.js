function Navbar(props) {
    return (
        <nav
            className="flex flex-col items-center flex-wrap bg-gray-100 text-brand-dark-default dark:bg-brand-dark-default dark:text-white top-0 z-50 shadow-xl">
            <div
                className="flex flex-wrap justify-between w-full lg:container lg:static relative [&>*]:p-6">
                {props.children}
            </div>
        </nav>
    )
}

export default Navbar;