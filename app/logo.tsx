import Image from 'next/image'
import {v2} from 'cloudinary'

export type LogoProps = {
  height?: number
  width?: number
  publicId?: string
  alt: string
}

export function Logo({height = 40, width = 40, publicId = 'srsths', alt}: LogoProps) {
  const logo = v2.url(publicId, {
    width,
    height,
    crop: 'fill',
    gravity: 'face',
    format: 'webp'
  })

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
