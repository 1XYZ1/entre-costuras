"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { useImagePreloader } from "@/hooks/useImagePreloader";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import useEmblaCarousel from "embla-carousel-react";

// Estilos CSS personalizados para corregir el problema de hover en móviles
const mobileButtonStyles = `
  @media (hover: none) {
    .mobile-hover-fix:hover {
      background-color: inherit;
      color: inherit;
      border-color: inherit;
      transform: none;
    }
  }

  .desktop-hover {
    transition: all 0.3s ease;
  }

  @media (hover: hover) {
    .desktop-hover:hover {
      background-color: rgba(255, 255, 255, 0.2);
      transform: scale(1.05);
    }
  }

  .nav-button-fix:focus {
    outline: none;
    box-shadow: none;
  }

  .dark-blur-bg {
    backdrop-filter: blur(10px);
  }

  .gallery-caption {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
    backdrop-filter: blur(5px);
  }

  .gallery-image-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

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
];

export function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [isMobile, setIsMobile] = useState(false);
  const imagesPreloaded = useImagePreloader(
    galleryImages.map((img) => img.src)
  );

  // Configuración de Embla Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: false,
    containScroll: "trimSnaps",
    startIndex: selectedImageIndex || 0,
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Actualizar el índice actual cuando cambia el carrusel
  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setCurrentIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  // Sincronizar el carrusel con el índice seleccionado
  useEffect(() => {
    if (!emblaApi || selectedImageIndex === null) return;

    emblaApi.scrollTo(selectedImageIndex);
    onSelect();
  }, [emblaApi, selectedImageIndex, onSelect]);

  // Configurar eventos del carrusel
  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Detectar si es dispositivo móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Funciones para navegar por el carrusel
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Manejar teclas de navegación
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        scrollPrev();
      } else if (e.key === "ArrowRight") {
        scrollNext();
      } else if (e.key === "Escape") {
        setSelectedImageIndex(null);
      }
    },
    [scrollPrev, scrollNext]
  );

  if (!imagesPreloaded) {
    return (
      <div className="h-96 flex items-center justify-center">
        Cargando galería...
      </div>
    );
  }

  return (
    <section id="gallery">
      {/* Estilos para hover en móviles */}
      <style jsx global>
        {mobileButtonStyles}
      </style>

      {/* Nota: Los estilos de Embla Carousel están definidos en globals.css */}

      <AnimatedSection className="bg-muted/50 py-16 md:py-24 w-full">
        <div className="container-content">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Nuestros Trabajos
            </h2>
            <p className="mt-4 text-muted-foreground">
              Explora algunos de nuestros diseños y confecciones más destacados.
              Cada prenda refleja nuestra pasión por la calidad y el detalle.
            </p>
          </div>
          <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-hidden">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setSelectedImageIndex(index)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
                  <Button
                    variant="outline"
                    className="text-white border border-white/40 hover:bg-black/80 hover:text-white hover:border-white bg-black/30 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 flex items-center gap-2 rounded-full px-4 py-2 h-auto mobile-hover-fix"
                    onClick={(e) => {
                      e.stopPropagation(); // Evitar que el clic se propague
                      setSelectedImageIndex(index);
                      // Quitar el foco del botón después del clic
                      if (document.activeElement instanceof HTMLElement) {
                        document.activeElement.blur();
                      }
                    }}
                  >
                    <ZoomIn className="h-4 w-4" />
                    <span>Ver</span>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button
              variant="outline"
              size="lg"
              className="hover:scale-105 transition-transform duration-300 border-white/40 hover:bg-black/10 hover:border-white/60 text-primary rounded-full px-6 mobile-hover-fix"
              onClick={(e) => {
                // Quitar el foco del botón después del clic
                if (document.activeElement instanceof HTMLElement) {
                  document.activeElement.blur();
                }
              }}
            >
              Ver más trabajos
            </Button>
          </div>
        </div>
        <Dialog
          open={selectedImageIndex !== null}
          onOpenChange={(open) => !open && setSelectedImageIndex(null)}
        >
          <DialogContent
            className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none rounded-xl overflow-hidden gallery-modal dark-blur-bg"
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {selectedImageIndex !== null && (
              <div className="relative w-full h-[90vh] flex flex-col">
                {/* Embla Carousel */}
                <div className="embla flex-1" ref={emblaRef}>
                  <div className="embla__container">
                    {galleryImages.map((image, index) => (
                      <div className="embla__slide" key={index}>
                        <div className="relative w-full h-full max-w-[1200px] max-h-[80vh] mx-auto gallery-image-container">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 80vw"
                            className="object-contain"
                            priority={index === currentIndex}
                            quality={90}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Botón de cierre */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-4 right-4 z-50"
                >
                  <Button
                    className="rounded-full w-10 h-10 bg-black/40 text-white/80 border-none backdrop-blur-md transition-all duration-300 nav-button-fix desktop-hover"
                    onClick={(e) => {
                      setSelectedImageIndex(null);
                      // Quitar el foco del botón después del clic
                      if (document.activeElement instanceof HTMLElement) {
                        document.activeElement.blur();
                      }
                    }}
                    variant="ghost"
                    aria-label="Cerrar"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </motion.div>

                {/* Indicador de deslizar en móvil */}
                {isMobile && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 0.7, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="absolute text-white/90 text-xs px-3 py-1 rounded-full z-50"
                    style={{
                      top: "1.5rem",
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: "transparent",
                    }}
                  >
                    Desliza para navegar
                  </motion.div>
                )}

                {/* Navegación */}
                <div className="absolute inset-0 flex items-center justify-between pointer-events-none z-40">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: prevBtnEnabled ? 1 : 0.5, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="pointer-events-auto"
                  >
                    <Button
                      className={`ml-2 md:ml-4 rounded-full w-10 h-10 md:w-12 md:h-12 bg-black/40 text-white/80 border-none backdrop-blur-md transition-all duration-300 nav-button-fix desktop-hover ${
                        isMobile ? "opacity-60" : ""
                      }`}
                      onClick={(e) => {
                        scrollPrev();
                        // Quitar el foco del botón después del clic
                        if (document.activeElement instanceof HTMLElement) {
                          document.activeElement.blur();
                        }
                      }}
                      variant="ghost"
                      aria-label="Imagen anterior"
                      disabled={!prevBtnEnabled}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: nextBtnEnabled ? 1 : 0.5, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="pointer-events-auto"
                  >
                    <Button
                      className={`mr-2 md:mr-4 rounded-full w-10 h-10 md:w-12 md:h-12 bg-black/40 text-white/80 border-none backdrop-blur-md transition-all duration-300 nav-button-fix desktop-hover ${
                        isMobile ? "opacity-60" : ""
                      }`}
                      onClick={(e) => {
                        scrollNext();
                        // Quitar el foco del botón después del clic
                        if (document.activeElement instanceof HTMLElement) {
                          document.activeElement.blur();
                        }
                      }}
                      variant="ghost"
                      aria-label="Imagen siguiente"
                      disabled={!nextBtnEnabled}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                  </motion.div>
                </div>

                {/* Leyenda con animación */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="absolute bottom-0 left-0 right-0 text-center text-white py-3 px-4 unified-caption gallery-caption z-50"
                >
                  <p className="text-sm md:text-base font-medium drop-shadow-md">
                    {galleryImages[currentIndex].alt}
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-1">
                    <div className="h-[2px] bg-white/20 rounded-full flex-1 max-w-[80px]">
                      <motion.div
                        className="h-[2px] bg-white/80 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{
                          width: `${
                            ((currentIndex + 1) / galleryImages.length) * 100
                          }%`,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <p className="text-xs text-white/80 drop-shadow-md">{`${
                      currentIndex + 1
                    } de ${galleryImages.length}`}</p>
                  </div>
                </motion.div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </AnimatedSection>
    </section>
  );
}
