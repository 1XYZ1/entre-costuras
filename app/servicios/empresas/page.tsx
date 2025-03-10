"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Building,
  Briefcase,
  PenTool,
  Phone,
  FileText,
  Ruler,
  Truck,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

// Datos de servicios para empresas (B2B)
const servicesB2B = [
  {
    title: "Producción a Escala",
    description:
      "Fabricamos lotes de prendas para empresas, garantizando calidad y consistencia en cada pieza. Nuestro proceso de producción está optimizado para manejar pedidos de cualquier tamaño, manteniendo siempre los más altos estándares de calidad.",
    icon: <Factory className="h-10 w-10 text-primary" />,
    link: "/servicios/b2b/produccion-a-escala",
    features: [
      "Producción de lotes desde 10 hasta 10,000+ unidades",
      "Control de calidad riguroso en cada etapa",
      "Plazos de entrega flexibles y confiables",
      "Opciones de personalización para cada prenda",
    ],
  },
  {
    title: "Diseño de Uniformes",
    description:
      "Creamos uniformes corporativos que reflejan la identidad de tu empresa y proporcionan comodidad a tus empleados. Nuestro equipo de diseño trabaja contigo para desarrollar uniformes que representen perfectamente tu marca.",
    icon: <Building className="h-10 w-10 text-primary" />,
    link: "/servicios/b2b/diseno-de-uniformes",
    features: [
      "Diseños exclusivos adaptados a tu imagen corporativa",
      "Selección de telas de alta calidad y durabilidad",
      "Pruebas de ajuste para garantizar comodidad",
      "Opciones para diferentes departamentos y roles",
    ],
  },
  {
    title: "Consultoría Textil",
    description:
      "Asesoramos a empresas en la selección de materiales, procesos de producción y optimización de costos. Nuestros expertos te guiarán en cada paso para asegurar que tus proyectos textiles sean exitosos y eficientes.",
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    link: "/servicios/b2b/consultoria-textil",
    features: [
      "Análisis de necesidades y objetivos específicos",
      "Recomendación de materiales y técnicas óptimas",
      "Estrategias para reducción de costos sin sacrificar calidad",
      "Asesoría en tendencias y sostenibilidad textil",
    ],
  },
  {
    title: "Muestrarios y Prototipos",
    description:
      "Desarrollamos prototipos y muestrarios para tu línea de productos antes de la producción a gran escala. Esto te permite evaluar y perfeccionar tus diseños antes de comprometerte con una producción completa.",
    icon: <PenTool className="h-10 w-10 text-primary" />,
    link: "/servicios/b2b/muestrarios-y-prototipos",
    features: [
      "Creación rápida de prototipos funcionales",
      "Muestrarios completos con variaciones de color y material",
      "Ajustes y refinamientos basados en tus comentarios",
      "Documentación detallada de especificaciones técnicas",
    ],
  },
];

// Datos del proceso paso a paso
const processSteps = [
  {
    title: "Contacto Inicial",
    description:
      "Nos contactas con tu idea o necesidad. Programamos una reunión para entender tu proyecto en detalle.",
    icon: <Phone className="h-8 w-8 text-primary" />,
    details:
      "En esta etapa escuchamos atentamente tus necesidades, objetivos y expectativas. Recopilamos información sobre cantidades, plazos y presupuesto estimado.",
  },
  {
    title: "Propuesta y Presupuesto",
    description:
      "Elaboramos una propuesta detallada con opciones, materiales, tiempos y costos para tu aprobación.",
    icon: <FileText className="h-8 w-8 text-primary" />,
    details:
      "Presentamos diferentes alternativas de materiales, técnicas y acabados. Cada propuesta incluye un presupuesto detallado y un cronograma de producción realista.",
  },
  {
    title: "Diseño y Prototipos",
    description:
      "Creamos muestras y prototipos para que puedas evaluar la calidad y hacer ajustes antes de la producción.",
    icon: <Ruler className="h-8 w-8 text-primary" />,
    details:
      "Nuestro equipo de diseño desarrolla prototipos físicos que te permitirán ver, tocar y probar el producto antes de aprobar la producción a escala.",
  },
  {
    title: "Producción",
    description:
      "Una vez aprobados los prototipos, iniciamos la producción de tu pedido con estrictos controles de calidad.",
    icon: <Factory className="h-8 w-8 text-primary" />,
    details:
      "Implementamos un sistema de control de calidad en cada fase de la producción. Te mantenemos informado sobre el avance con actualizaciones periódicas.",
  },
  {
    title: "Entrega",
    description:
      "Empacamos cuidadosamente tu pedido y coordinamos la entrega según tus especificaciones.",
    icon: <Truck className="h-8 w-8 text-primary" />,
    details:
      "Ofrecemos diferentes opciones de empaque y etiquetado. Coordinamos la logística de entrega para asegurar que tu pedido llegue en perfectas condiciones y en el tiempo acordado.",
  },
  {
    title: "Seguimiento Post-Venta",
    description:
      "Mantenemos contacto después de la entrega para asegurar tu satisfacción y atender cualquier necesidad adicional.",
    icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
    details:
      "Nuestro compromiso no termina con la entrega. Realizamos un seguimiento para verificar tu satisfacción y estamos disponibles para resolver cualquier consulta o requerimiento adicional.",
  },
];

export default function EmpresasPage() {
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
              Servicios para Empresas
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluciones profesionales de confección y textil diseñadas
              específicamente para las necesidades de tu negocio.
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
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/30 z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1581669600020-77e8f5d11140?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Servicios para empresas"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 md:p-12">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-4 drop-shadow-md">
              Soluciones textiles a la medida de tu empresa
            </h2>
            <p className="text-white/90 max-w-lg mb-6 drop-shadow-md">
              Desde pequeños lotes hasta grandes producciones, nos adaptamos a
              las necesidades específicas de tu negocio.
            </p>
            <Button
              asChild
              size="lg"
              className="w-fit bg-white text-primary hover:bg-white/90"
            >
              <Link href="/contacto">Solicitar información</Link>
            </Button>
          </div>
        </motion.div>

        {/* Introducción */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Por qué elegir nuestros servicios?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos soluciones completas que combinan calidad, eficiencia y
              atención personalizada para satisfacer las necesidades específicas
              de tu empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-primary/5 border-primary/20 text-center">
              <CardHeader className="pb-2">
                <div className="mx-auto rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  </svg>
                </div>
                <CardTitle className="text-lg">Calidad Garantizada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Cada prenda pasa por rigurosos controles de calidad antes de
                  ser entregada.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20 text-center">
              <CardHeader className="pb-2">
                <div className="mx-auto rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <CardTitle className="text-lg">Plazos Confiables</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Cumplimos con los tiempos de entrega acordados, sin
                  excepciones.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20 text-center">
              <CardHeader className="pb-2">
                <div className="mx-auto rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7"></path>
                    <path d="M15 7h6v6"></path>
                  </svg>
                </div>
                <CardTitle className="text-lg">Escalabilidad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Nos adaptamos a tus necesidades, ya sea un pedido pequeño o
                  una producción masiva.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Proceso paso a paso */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Nuestro Proceso
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Desde el primer contacto hasta la entrega final, te acompañamos en
              cada etapa del proceso para garantizar resultados excepcionales.
            </p>
          </div>

          <div className="relative">
            {/* Línea de tiempo vertical */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block"></div>

            <div className="space-y-12 relative">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="relative"
                >
                  <Card
                    className={`md:w-[calc(50%-20px)] ${
                      index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                    } border-primary/10 hover:border-primary/30 transition-all duration-300`}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 hidden md:block">
                      <div
                        className={`${
                          index % 2 === 0 ? "-left-[40px]" : "-right-[40px]"
                        } absolute w-10 h-10 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center`}
                      >
                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                      </div>
                    </div>

                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-3 flex-shrink-0">
                          {step.icon}
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground font-medium">
                            Paso {index + 1}
                          </div>
                          <CardTitle className="text-xl">
                            {step.title}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {step.description}
                      </p>
                      <div className="bg-muted/30 p-4 rounded-lg">
                        <p className="text-sm">{step.details}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Lista de servicios */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Nuestros Servicios Empresariales
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios especializados para
              satisfacer las diversas necesidades de tu empresa.
            </p>
          </div>

          <div className="grid gap-8 md:gap-12">
            {servicesB2B.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Card className="overflow-hidden border-muted hover:border-primary/50 transition-all duration-300">
                  <div className="md:grid md:grid-cols-5 items-start">
                    <CardHeader className="md:col-span-2 pb-3 border-b md:border-b-0 md:border-r border-border">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-3">
                          {service.icon}
                        </div>
                        <div>
                          <CardTitle className="text-2xl">
                            {service.title}
                          </CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-base mt-4">
                        {service.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="md:col-span-3 p-6">
                      <div className="bg-muted/50 p-4 rounded-lg mb-6">
                        <h4 className="font-medium mb-3">
                          Características principales:
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {service.features.map((feature, i) => (
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
                                <span className="text-sm">{feature}</span>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </div>

                      <Button asChild className="w-full sm:w-auto">
                        <Link href="/contacto">Solicitar información</Link>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center bg-primary/5 p-8 rounded-xl border shadow-sm"
        >
          <h2 className="text-2xl font-bold mb-4">
            ¿Necesitas una solución personalizada?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Nuestro equipo está listo para diseñar una solución que se adapte
            perfectamente a las necesidades específicas de tu empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contacto">Contactar ahora</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio">Ver portfolio</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
