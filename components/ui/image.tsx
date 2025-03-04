"use client"

import NextImage, { type ImageProps as NextImageProps } from "next/image"
import { useState } from "react"

interface ImageProps extends NextImageProps {
  fallbackSrc?: string
}

export function Image({ src, alt, fallbackSrc = "/placeholder.svg", width, height, ...props }: ImageProps) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <NextImage
      {...props}
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      onError={() => {
        setImgSrc(fallbackSrc)
      }}
      loading="lazy"
    />
  )
}

