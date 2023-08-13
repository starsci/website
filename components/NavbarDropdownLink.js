import Link from "next/link";

function NavbarDropdownLink(props) {
    return (
        <Link href={props.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200"
              role="menuitem" tabIndex={-1}>
            {props.children}
        </Link>
    )
}

export default NavbarDropdownLink;