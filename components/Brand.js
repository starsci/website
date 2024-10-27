import Image from "next/image";
import Link from "next/link";

function Brand(props) {
    return (
        <Link href="/">
            <div
                className="flex items-center flex-shrink-0 mr-6">
                <Image src={props.src} alt={props.title}
                       className="fill-current" height={props.height ?? 32}
                       width={props.width ?? props.height ?? 32}/>
                <span
                    className={`text-xl hidden sm:inline-block sm:ms-2 font-oswald`}>
                {props.title}
            </span>
            </div>
        </Link>
    )
}

export default Brand;