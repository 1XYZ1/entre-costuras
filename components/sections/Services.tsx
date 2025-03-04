"use client"

import { motion } from "framer-motion"
import { Shirt, Scissors, Ruler, Users } from "lucide-react"
import { LazyImage } from "@/components/ui/lazy-image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const services = [
  {
    title: "Confección a Medida",
    description:
      "Creamos prendas personalizadas según tus especificaciones, asegurando un ajuste perfecto y un estilo único.",
    icon: <Shirt className="h-6 w-6 text-primary" />,
    image:
      "https://images.unsplash.com/photo-1556442261-e52a7d45ebc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: "/servicios/confeccion-a-medida",
  },
  {
    title: "Arreglos y Ajustes",
    description:
      "Modificamos tus prendas favoritas para que se ajusten perfectamente a tu cuerpo o para darles una nueva vida.",
    icon: <Scissors className="h-6 w-6 text-primary" />,
    image:
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: "/servicios/arreglos-y-ajustes",
  },
  {
    title: "Diseño de Patrones",
    description:
      "Desarrollamos patrones personalizados para tus proyectos de costura, adaptados a tus medidas y preferencias.",
    icon: <Ruler className="h-6 w-6 text-primary" />,
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: "/servicios/diseno-de-patrones",
  },
  {
    title: "Asesoría de Imagen",
    description: "Te ayudamos a elegir los diseños, telas y estilos que mejor se adapten a tu figura y personalidad.",
    icon: <Users className="h-6 w-6 text-primary" />,
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: "/servicios/asesoria-de-imagen",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestros Servicios</h2>
          <p className="mt-4 text-muted-foreground">
            Ofrecemos una amplia gama de servicios de costura y confección para satisfacer todas tus necesidades. Desde
            arreglos simples hasta diseños personalizados.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-lg border overflow-hidden transition-all hover:border-primary hover:shadow-md"
            >
              <div className="relative h-48 w-full">
                <LazyImage
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-full bg-primary/10 p-3">{service.icon}</div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground">{service.description}</p>
                <Link href={service.link} className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                  Saber más <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

