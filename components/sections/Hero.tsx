"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { ChevronDown, Scissors, LinkIcon as Thread } from "lucide-react";
import { useState, useEffect } from "react";

const heroBackgrounds = [
  "https://images.unsplash.com/photo-1584661156681-540e80a161d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
];

export function Hero() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroBackgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {heroBackgrounds.map((bg, index) => (
        <motion.div
          key={bg}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentBg ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={bg || "/placeholder.svg"}
            alt={`Taller de costura ${index + 1}`}
            fill
            className="object-cover brightness-[0.4]"
            priority={index === 0}
          />
        </motion.div>
      ))}
      <div className="container-content relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center mb-6"
          >
            <Scissors className="h-12 w-12 text-primary mr-4" />
            <Thread className="h-12 w-12 text-primary" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl drop-shadow-lg"
          >
            <span className="block">Entre Costuras</span>
            <span className="block text-primary font-bold drop-shadow-md">
              Diseño y Confección
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >
            Creamos prendas únicas con la mejor calidad y atención al detalle.
            Diseños personalizados que reflejan tu estilo y personalidad.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 flex justify-center gap-4 overflow-hidden-wrapper"
          >
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 font-semibold text-base px-8 py-6 shadow-lg border-2 border-primary drop-shadow-md transition-all duration-300 hover:scale-[1.03] cursor-pointer"
              asChild
            >
              <ScrollLink
                to="servicios"
                smooth={true}
                duration={800}
                className="cursor-pointer"
              >
                Nuestros Servicios
              </ScrollLink>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white hover:bg-white/20 font-semibold text-base px-8 py-6 shadow-lg border-2 border-white drop-shadow-md transition-all duration-300 hover:scale-[1.03] cursor-pointer"
              asChild
            >
              <ScrollLink
                to="contacto"
                smooth={true}
                duration={800}
                className="cursor-pointer"
              >
                Contáctanos
              </ScrollLink>
            </Button>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ScrollLink
          to="nosotros"
          smooth={true}
          duration={800}
          className="cursor-pointer"
        >
          <ChevronDown className="h-10 w-10 text-white animate-bounce" />
        </ScrollLink>
      </motion.div>
    </section>
  );
}
