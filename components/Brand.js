import Image from "next/image";
import {Oswald} from "next/font/google";
import Link from "next/link";

const oswald = Oswald({
    subsets: ['latin-ext'],
})

function Brand(props) {
    return (
        <Link href="/">
            <div
                className="flex items-center flex-shrink-0 mr-6">
                <Image src={props.src} alt={props.title}
                       className="fill-current" height={props.height ?? 32}
                       width={props.width ?? props.height ?? 32}/>
                <span
                    className={`text-xl hidden sm:inline-block sm:ms-2 font-title ${oswald.className}`}>
                {props.title}
            </span>
            </div>
        </Link>
    )
}

export default Brand;