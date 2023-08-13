import Link from "next/link";

function NavbarLink(props) {
    return (
        <Link href={props.href}
              className="navbar-link-text">
            {props.children}
        </Link>
    )
}

export default NavbarLink;