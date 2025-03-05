"use client";

import { useEffect } from "react";
import { MainNav } from "@/components/MainNav";
import { LazyImage } from "@/components/ui/lazy-image";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ChevronRight, Clock, CheckCircle2, Users } from "lucide-react";

interface ServiceLayoutProps {
  title: string;
  description: string;
  process: string[];
  images: { src: string; alt: string }[];
}

export function ServiceLayout({
  title,
  description,
  process,
  images,
}: ServiceLayoutProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animaciones para los elementos
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-muted/30">
      <MainNav />
      {/* No necesitamos espacio para compensar el MainNav */}

      <main className="flex-1">
        {/* Hero section con imagen principal */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden w-full">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <LazyImage
            src={images[0].src}
            alt={images[0].alt}
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container-content">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-3xl"
              >
                {title}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-1 w-24 bg-primary mb-6"
              ></motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-white/90 text-lg md:text-xl max-w-2xl"
              >
                {description.split(".")[0]}.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="py-16 md:py-24 w-full">
          <div className="container-content">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Columna izquierda - Descripción detallada */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-lg p-8 mb-10"
                >
                  <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    Sobre este servicio
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {description}
                  </p>
                  <div className="flex flex-wrap gap-4 mt-8">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-5 w-5 text-primary mr-2" />
                      <span>Entrega en 7-14 días</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      <span>Garantía de satisfacción</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-5 w-5 text-primary mr-2" />
                      <span>Atención personalizada</span>
                    </div>
                  </div>
                </motion.div>

                {/* Proceso */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <h2 className="text-2xl font-bold mb-8 text-gray-800">
                    Proceso de {title.toLowerCase()}
                  </h2>
                  <div className="space-y-6">
                    {process.map((step, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex"
                      >
                        <div className="mr-6 flex flex-col items-center">
                          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white font-bold">
                            {index + 1}
                          </div>
                          {index < process.length - 1 && (
                            <div className="h-full w-0.5 bg-gray-200 my-2"></div>
                          )}
                        </div>
                        <div className="pb-6">
                          <h3 className="font-semibold text-lg text-gray-800 mb-2">
                            {step.split(":")[0] || step}
                          </h3>
                          <p className="text-gray-600">
                            {step.includes(":")
                              ? step.split(":")[1].trim()
                              : "Nuestros expertos se encargarán de este paso con la máxima atención al detalle."}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Columna derecha - Galería e información adicional */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white rounded-xl shadow-lg p-8 mb-10"
                >
                  <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    Solicitar información
                  </h2>
                  <p className="text-gray-600 mb-6">
                    ¿Interesado en nuestro servicio de {title.toLowerCase()}?
                    Contáctanos para obtener un presupuesto personalizado.
                  </p>
                  <Button className="w-full py-6" size="lg">
                    Solicitar presupuesto
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>

                {/* Galería de imágenes */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-6"
                >
                  {images.slice(1).map((image, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="overflow-hidden rounded-xl shadow-lg"
                    >
                      <LazyImage
                        src={image.src}
                        alt={image.alt}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
