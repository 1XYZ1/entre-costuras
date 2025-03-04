"use client"

import { useState, useEffect } from "react"

export function useImagePreloader(imageSources: string[]) {
  const [imagesPreloaded, setImagesPreloaded] = useState(false)

  useEffect(() => {
    let isMounted = true

    const preloadImage = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = src
        img.onload = () => resolve()
        img.onerror = () => {
          console.warn(`Failed to preload image: ${src}`)
          resolve() // Resolve anyway to continue with other images
        }
      })
    }

    const preloadImages = async () => {
      try {
        await Promise.all(imageSources.map(preloadImage))
        if (isMounted) {
          setImagesPreloaded(true)
        }
      } catch (error) {
        console.error("Error preloading images:", error)
        // Set imagesPreloaded to true even if there was an error
        // This allows the UI to proceed rather than getting stuck
        if (isMounted) {
          setImagesPreloaded(true)
        }
      }
    }

    preloadImages()

    return () => {
      isMounted = false
    }
  }, [imageSources])

  return imagesPreloaded
}

