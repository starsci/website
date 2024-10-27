import Link from "next/link";

export default function ButtonLink(props) {
    return (
        <Link href={props.href} className={`rounded-md border border-blue-600 bg-blue-500 px-4 py-2 text-white shadow-md transition-colors duration-150 hover:bg-blue-600 inline-block ${props.className ?? ``}`}>
            {props.children}
        </Link>
    )
}