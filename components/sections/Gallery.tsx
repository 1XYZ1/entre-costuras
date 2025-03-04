"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"
import { useImagePreloader } from "@/hooks/useImagePreloader"
import Image from "next/image"
import { AnimatedSection } from "@/components/AnimatedSection"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    alt: "Vestido personalizado",
  },
  {
    src: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    alt: "Ajuste de traje",
  },
  {
    src: "https://images.unsplash.com/photo-1549298240-0d8e60513026?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    alt: "Vestido de novia",
  },
  {
    src: "https://images.unsplash.com/photo-1598554747436-c9293d6a70b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    alt: "Diseño de patrón",
  },
  {
    src: "https://images.unsplash.com/photo-1612462766564-895ea3388d2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    alt: "Arreglos de ropa",
  },
  {
    src: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    alt: "Clase de costura",
  },
  {
    src: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Selección de telas",
  },
  {
    src: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    alt: "Prenda terminada",
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const imagesPreloaded = useImagePreloader(galleryImages.map((img) => img.src))

  if (!imagesPreloaded) {
    return <div className="h-96 flex items-center justify-center">Cargando galería...</div>
  }

  return (
    <AnimatedSection className="bg-muted/50 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestros Trabajos</h2>
          <p className="mt-4 text-muted-foreground">
            Explora algunos de nuestros diseños y confecciones más destacados. Cada prenda refleja nuestra pasión por la
            calidad y el detalle.
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
                <Button variant="outline" className="text-white border-white hover:bg-white/20 bg-black/50">
                  Ver detalles
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button variant="outline" size="lg">
            Ver más trabajos
          </Button>
        </div>
      </div>
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="sm:max-w-[90vw] sm:max-h-[90vh] p-0">
          {selectedImage && (
            <div className="relative w-full h-full">
              <Image src={selectedImage || "/placeholder.svg"} alt="Diseño ampliado" fill className="object-contain" />
              <Button
                className="absolute top-2 right-2 rounded-full p-2"
                onClick={() => setSelectedImage(null)}
                variant="ghost"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </AnimatedSection>
  )
}

