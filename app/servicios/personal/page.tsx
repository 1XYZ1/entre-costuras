"use client";

import { motion } from "framer-motion";
import { Shirt, Scissors, Ruler, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

// Datos de servicios para particulares (B2C)
const servicesB2C = [
  {
    title: "Confección a Medida",
    description:
      "Creamos prendas personalizadas según tus especificaciones, asegurando un ajuste perfecto y un estilo único.",
    icon: <Shirt className="h-10 w-10 text-primary" />,
    image:
      "https://images.unsplash.com/photo-1556442261-e52a7d45ebc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: "/servicios/b2c/confeccion-a-medida",
    benefits: [
      "Prendas que se ajustan perfectamente a tu cuerpo",
      "Elección de telas, colores y detalles",
      "Diseños exclusivos que no encontrarás en tiendas",
      "Asesoramiento personalizado durante todo el proceso",
    ],
  },
  {
    title: "Arreglos y Ajustes",
    description:
      "Modificamos tus prendas favoritas para que se ajusten perfectamente a tu cuerpo o para darles una nueva vida.",
    icon: <Scissors className="h-10 w-10 text-primary" />,
    image:
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: "/servicios/b2c/arreglos-y-ajustes",
    benefits: [
      "Ajustes de talle para un calce perfecto",
      "Reparaciones de alta calidad",
      "Transformación de prendas antiguas",
      "Servicio rápido y eficiente",
    ],
  },
  {
    title: "Diseño de Patrones",
    description:
      "Desarrollamos patrones personalizados para tus proyectos de costura, adaptados a tus medidas y preferencias.",
    icon: <Ruler className="h-10 w-10 text-primary" />,
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: "/servicios/b2c/diseno-de-patrones",
    benefits: [
      "Patrones a medida para cualquier tipo de prenda",
      "Instrucciones detalladas para su uso",
      "Adaptaciones para diferentes tipos de cuerpo",
      "Soporte técnico durante tu proyecto",
    ],
  },
  {
    title: "Asesoría de Imagen",
    description:
      "Te ayudamos a elegir los diseños, telas y estilos que mejor se adapten a tu figura y personalidad.",
    icon: <Users className="h-10 w-10 text-primary" />,
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: "/servicios/b2c/asesoria-de-imagen",
    benefits: [
      "Análisis de colorimetría personal",
      "Recomendaciones de estilos según tu tipo de cuerpo",
      "Planificación de guardarropa eficiente",
      "Consejos para maximizar tus prendas existentes",
    ],
  },
];

// Testimonios de clientes
const testimonials = [
  {
    name: "María García",
    text: "El servicio de confección a medida superó todas mis expectativas. Mi vestido quedó perfecto y recibí muchos cumplidos.",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Carlos Rodríguez",
    text: "Llevé mi traje favorito para ajustes y quedó como nuevo. El servicio fue rápido y la calidad excepcional.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Laura Martínez",
    text: "La asesoría de imagen cambió completamente mi forma de vestir. Ahora me siento más segura y elegante.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

export default function PersonalPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto px-4 sm:px-6 py-12 md:py-16 max-w-4xl">
        {/* Encabezado de la página */}
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Servicios Personales
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluciones de costura y confección personalizadas para satisfacer
              tus necesidades individuales.
            </p>
          </motion.div>
        </div>

        {/* Banner principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/80 z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1556442261-e52a7d45ebc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Servicios personales"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 md:p-12">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-4 drop-shadow-md">
              Diseños únicos que reflejan tu personalidad
            </h2>
            <p className="text-white/90 max-w-lg mb-6 drop-shadow-md">
              Creamos prendas exclusivas adaptadas a tu estilo, preferencias y
              medidas exactas.
            </p>
            <Button
              asChild
              size="lg"
              className="w-fit bg-white text-primary hover:bg-white/90"
            >
              <Link href="/contacto">Agendar consulta</Link>
            </Button>
          </div>
        </motion.div>

        {/* Servicios destacados */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Nuestros Servicios Personalizados
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos una variedad de servicios diseñados para satisfacer tus
              necesidades individuales de confección y estilo.
            </p>
          </div>

          <div className="grid gap-12 md:gap-16">
            {servicesB2C.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border hover:border-primary/50 transition-all duration-300">
                  <div className="md:grid md:grid-cols-2 items-stretch">
                    <div className="relative h-[250px] md:h-auto overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r" />
                      <div className="absolute bottom-0 left-0 p-6 md:hidden">
                        <div className="flex items-center gap-3">
                          <div className="rounded-full bg-primary/20 backdrop-blur-sm p-3">
                            {service.icon}
                          </div>
                          <h2 className="text-2xl font-bold text-white">
                            {service.title}
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="hidden md:flex items-center gap-3 mb-4">
                        <div className="rounded-full bg-primary/10 p-3">
                          {service.icon}
                        </div>
                        <h2 className="text-2xl font-bold">{service.title}</h2>
                      </div>

                      <p className="text-muted-foreground mb-6 md:mt-0 mt-4">
                        {service.description}
                      </p>

                      <div className="bg-muted/30 p-5 rounded-lg mb-6">
                        <h3 className="font-medium mb-3">Beneficios:</h3>
                        <div className="grid grid-cols-1 gap-2">
                          {service.benefits.map((benefit, i) => (
                            <Card key={i} className="p-3 border-primary/10">
                              <div className="flex items-start">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="text-primary mr-2 mt-1 flex-shrink-0"
                                >
                                  <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                <span className="text-sm">{benefit}</span>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </div>

                      <Button asChild>
                        <Link href={service.link}>Más información</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonios */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Descubre las experiencias de quienes ya han confiado en nuestros
              servicios personalizados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardTitle className="text-lg">
                        {testimonial.name}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic">
                      "{testimonial.text}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center bg-primary/5 p-8 rounded-xl border"
        >
          <h2 className="text-2xl font-bold mb-4">
            ¿Listo para transformar tu guardarropa?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Agenda una consulta gratuita y descubre cómo nuestros servicios
            personalizados pueden ayudarte a lucir tu mejor versión.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contacto">Agendar consulta</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio">Ver trabajos anteriores</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
