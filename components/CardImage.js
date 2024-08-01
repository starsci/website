import Image from "next/image";

export default function CardImage(props) {
  const { src, alt } = props;

  return (
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes="100vw"
      className="h-48 w-auto rounded-t-lg object-cover"
    />
  );
}
