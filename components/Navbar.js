function Navbar(props) {
    return (
        <nav
            className="flex flex-col items-center flex-wrap navbar-gradient top-0 text-white z-50">
            <div
                className="flex flex-wrap justify-between w-full lg:container lg:static relative [&>*]:p-6">
                {props.children}
            </div>
        </nav>
    )
}

export default Navbar;