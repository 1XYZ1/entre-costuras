"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Image } from "@/components/ui/image"
import { cn } from "@/lib/utils"
import { useImagePreloader } from "@/hooks/useImagePreloader"

interface LazyImageProps extends React.ComponentProps<typeof Image> {
  threshold?: number
}

export function LazyImage({ threshold = 0.1, className, src, ...props }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  })

  const imagesPreloaded = useImagePreloader([src as string])

  useEffect(() => {
    if (inView && imagesPreloaded) {
      setIsLoaded(true)
    }
  }, [inView, imagesPreloaded])

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      {isLoaded ? (
        <Image
          src={src || "/placeholder.svg"}
          {...props}
          onLoad={() => setIsLoaded(true)}
          className={cn("transition-opacity duration-300", isLoaded ? "opacity-100" : "opacity-0", props.className)}
        />
      ) : (
        <div className="animate-pulse bg-muted" style={{ width: props.width, height: props.height }} />
      )}
    </div>
  )
}

