import Image from "next/image";
import Link from "next/link";

export default function CardImage(props) {
    return (
        <div
            className="relative h-48 w-auto lg:h-auto lg:w-48 lg:rounded-l-lg lg:rounded-tr-none rounded-t-lg overflow-hidden">
            <Link href={props.src}>
                <Image src={props.src} alt={props.alt} fill
                       className="object-cover"/>
            </Link>

        </div>
    )
}