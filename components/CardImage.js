import Image from "next/image";

export default function CardImage(props) {
    return (
        <Image src={props.src} alt={props.alt} width={0} height={0} sizes="100vw"
            className="h-48 w-auto lg:h-auto lg:w-48 lg:rounded-l-lg lg:rounded-tr-none rounded-t-lg object-cover" />
    )
}