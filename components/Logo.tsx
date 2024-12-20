import Image from 'next/image'
import {v2} from 'cloudinary'

export function Logo({
  height = 40,
  width = 40,
  publicId,
  alt
}: {
  height?: number
  width?: number
  publicId: string
  alt: string
}) {
  const logo = v2.url(publicId)

  return (
    <Image
      src={logo}
      alt={alt}
      width={width}
      height={height}
      className="rounded-full"
      sizes="100vw"
    />
  )
}
