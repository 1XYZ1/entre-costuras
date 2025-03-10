"use client";

import { motion } from "framer-motion";
import {
  Shirt,
  Scissors,
  Ruler,
  Users,
  Building,
  Briefcase,
  PenTool,
  Factory,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

// Interfaces para tipar correctamente los servicios
interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

// Datos de servicios para empresas (B2B)
const servicesB2B: Service[] = [
  {
    title: "Producción a Escala",
    description:
      "Fabricamos lotes de prendas para empresas, garantizando calidad y consistencia en cada pieza.",
    icon: <Factory className="h-6 w-6 text-primary" />,
    link: "/servicios/b2b/produccion-a-escala",
  },
  {
    title: "Diseño de Uniformes",
    description:
      "Creamos uniformes corporativos que reflejan la identidad de tu empresa y proporcionan comodidad a tus empleados.",
    icon: <Building className="h-6 w-6 text-primary" />,
    link: "/servicios/b2b/diseno-de-uniformes",
  },
  {
    title: "Consultoría Textil",
    description:
      "Asesoramos a empresas en la selección de materiales, procesos de producción y optimización de costos.",
    icon: <Briefcase className="h-6 w-6 text-primary" />,
    link: "/servicios/b2b/consultoria-textil",
  },
  {
    title: "Muestrarios y Prototipos",
    description:
      "Desarrollamos prototipos y muestrarios para tu línea de productos antes de la producción a gran escala.",
    icon: <PenTool className="h-6 w-6 text-primary" />,
    link: "/servicios/b2b/muestrarios-y-prototipos",
  },
];

// Datos de servicios para particulares (B2C)
const servicesB2C: Service[] = [
  {
    title: "Confección a Medida",
    description:
      "Creamos prendas personalizadas según tus especificaciones, asegurando un ajuste perfecto y un estilo único.",
    icon: <Shirt className="h-6 w-6 text-primary" />,
    link: "/servicios/b2c/confeccion-a-medida",
  },
  {
    title: "Arreglos y Ajustes",
    description:
      "Modificamos tus prendas favoritas para que se ajusten perfectamente a tu cuerpo o para darles una nueva vida.",
    icon: <Scissors className="h-6 w-6 text-primary" />,
    link: "/servicios/b2c/arreglos-y-ajustes",
  },
  {
    title: "Diseño de Patrones",
    description:
      "Desarrollamos patrones personalizados para tus proyectos de costura, adaptados a tus medidas y preferencias.",
    icon: <Ruler className="h-6 w-6 text-primary" />,
    link: "/servicios/b2c/diseno-de-patrones",
  },
  {
    title: "Asesoría de Imagen",
    description:
      "Te ayudamos a elegir los diseños, telas y estilos que mejor se adapten a tu figura y personalidad.",
    icon: <Users className="h-6 w-6 text-primary" />,
    link: "/servicios/b2c/asesoria-de-imagen",
  },
];

// Componente para mostrar un servicio individual
function ServiceItem({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
    >
      <div className="rounded-full bg-primary/10 p-3 flex-shrink-0">
        {service.icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
        <p className="text-muted-foreground text-sm mb-2">
          {service.description}
        </p>
        <Link
          href={service.link}
          className="text-primary text-sm font-medium inline-flex items-center"
        >
          Saber más <ArrowRight className="ml-1 h-3 w-3" />
        </Link>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-background">
      <AnimatedSection className="w-full">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Soluciones de costura y confección para empresas y particulares,
              adaptadas a tus necesidades específicas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Sección de Empresas (B2B) - Con mayor énfasis */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 shadow-lg border border-primary/20"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Para Empresas
                </h3>
                <p className="text-muted-foreground">
                  Soluciones profesionales para negocios
                </p>
              </div>

              {/* GIF para representar servicios B2B */}
              <div className="relative h-64 w-full mb-6 overflow-hidden rounded-lg">
                <motion.div
                  initial={{ scale: 1 }}
                  whileInView={{ scale: 1.05 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="w-full h-full"
                >
                  <img
                    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzZiMzRkMzRiMDRlMzRlMzRiMzRiMzRiMzRiMzRiMzRiMzRiMw/3oKIPEqDGUULpEU0aQ/giphy.gif"
                    alt="Servicios para empresas"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </motion.div>
              </div>

              <div className="space-y-1">
                {servicesB2B.map((service, index) => (
                  <ServiceItem key={index} service={service} index={index} />
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Link href="/servicios/empresas">
                    Ver todos los servicios para empresas
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Sección de Particulares (B2C) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 shadow border"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Para Particulares</h3>
                <p className="text-muted-foreground">
                  Servicios personalizados para individuos
                </p>
              </div>

              {/* GIF para representar servicios B2C */}
              <div className="relative h-64 w-full mb-6 overflow-hidden rounded-lg">
                <motion.div
                  initial={{ scale: 1 }}
                  whileInView={{ scale: 1.05 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="w-full h-full"
                >
                  <img
                    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzRiMzRiMzRiMzRiMzRiMzRiMzRiMzRiMzRiMzRiMzRiMzRiMzRiMw/l2SpZkQ0XT1XtKus0/giphy.gif"
                    alt="Servicios para particulares"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </motion.div>
              </div>

              <div className="space-y-1">
                {servicesB2C.map((service, index) => (
                  <ServiceItem key={index} service={service} index={index} />
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  <Link href="/servicios/personal">
                    Ver todos los servicios para particulares
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-lg font-medium mb-4">
              ¿Necesitas una solución personalizada?
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contacto">Contáctanos</Link>
            </Button>
          </motion.div>
        </div>
      </AnimatedSection>
    </section>
  );
}
