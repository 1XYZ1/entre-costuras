"use client"

import { useState, useEffect } from "react"
import Slider from "react-slick"
import { LazyImage } from "@/components/ui/lazy-image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AnimatedSection } from "@/components/AnimatedSection"
import { useImagePreloader } from "@/hooks/useImagePreloader"

const instagramPosts = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1584661156681-540e80a161d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1605289355680-75fb41239154?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1542060748-10c28b62716f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1608748010899-18f300247112?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  },
]

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
}

export function InstagramCarousel() {
  const [mounted, setMounted] = useState(false)
  const imagesPreloaded = useImagePreloader(instagramPosts.map((post) => post.src))

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !imagesPreloaded) {
    return null // or a loading placeholder
  }

  return (
    <AnimatedSection className="py-16 md:py-24 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">
      <div className="container">
        <div className="mx-auto max-w-[800px] text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Síguenos en Instagram
          </h2>
          <p className="mt-4 text-white/90">
            Descubre nuestras últimas creaciones y mantente al día con nuestras novedades en @entrexcosturas
          </p>
        </div>
        <Slider {...sliderSettings} className="instagram-carousel">
          {instagramPosts.map((post) => (
            <div key={post.id} className="px-2">
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
                <LazyImage
                  src={post.src}
                  alt={`Instagram Post ${post.id}`}
                  width={300}
                  height={300}
                  className="object-cover"
                  fallbackSrc="/placeholder.svg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <p className="text-white text-sm font-medium truncate">
                    Descubre nuestra última creación #EntreXCosturas
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-white text-pink-500 hover:bg-white/90" asChild>
            <Link href="https://www.instagram.com/entrexcosturas" target="_blank" rel="noopener noreferrer">
              Seguir en Instagram
            </Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  )
}

