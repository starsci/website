import Link from "next/link";

export default function CardLink(props) {
    return <Link className="absolute inset-0 z-10" href={props.href} />
}