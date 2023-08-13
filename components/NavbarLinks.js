function NavbarLinks(props) {
    return (
        <div
            className={`navbar-link-container ${props.alignLinks === "right" ? `lg:justify-end` : `lg:justify-start`}`}>
            {props.children}
        </div>
    )
}

export default NavbarLinks;