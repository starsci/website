import Image from 'next/image'

export function Logo({
  height = 40,
  width = 40,
  src,
  alt
}: {
  height?: number
  width?: number
  src: string
  alt: string
}) {
  if (!src) {
    return null
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="rounded-full"
      sizes="100vw"
    />
  )
}
