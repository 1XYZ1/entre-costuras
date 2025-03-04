"use client"

import { useState, useEffect } from "react"
import Slider from "react-slick"
import { LazyImage } from "@/components/ui/lazy-image"

const clientLogos = [
  "https://picsum.photos/seed/client1/200/100",
  "https://picsum.photos/seed/client2/200/100",
  "https://picsum.photos/seed/client3/200/100",
  "https://picsum.photos/seed/client4/200/100",
  "https://picsum.photos/seed/client5/200/100",
  "https://picsum.photos/seed/client6/200/100",
  "https://picsum.photos/seed/client7/200/100",
  "https://picsum.photos/seed/client8/200/100",
]

const clientsSliderSettings = {
  dots: false,
  infinite: true,
  speed: 5000,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
}

export function Clients() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // o un placeholder de carga
  }

  return (
    <section id="clientes" className="bg-muted/50 py-16 md:py-24 overflow-hidden">
      <div className="container">
        <div className="mx-auto max-w-[800px] text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestros Clientes</h2>
          <p className="mt-4 text-muted-foreground">
            Hemos tenido el privilegio de trabajar con marcas reconocidas y personas influyentes. Aquí algunos de
            nuestros clientes satisfechos.
          </p>
        </div>
      </div>
      <Slider {...clientsSliderSettings} className="clients-carousel">
        {clientLogos.map((logo, index) => (
          <div key={index} className="px-4">
            <LazyImage
              src={logo || "/placeholder.svg"}
              alt={`Cliente ${index + 1}`}
              width={200}
              height={100}
              className="max-w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
              fallbackSrc="/placeholder.svg"
            />
          </div>
        ))}
      </Slider>
    </section>
  )
}

