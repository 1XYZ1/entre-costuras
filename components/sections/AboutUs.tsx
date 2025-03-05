"use client";

import { motion } from "framer-motion";
import { LazyImage } from "@/components/ui/lazy-image";

export function AboutUs() {
  return (
    <section id="nosotros" className="bg-muted/50 py-16 md:py-24">
      <div className="container-content">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Nuestra Historia
            </h2>
            <p className="mt-4 text-muted-foreground">
              Con más de 15 años de experiencia en el mundo de la costura y
              confección, Entre Costuras nació de la pasión por crear prendas
              únicas y de calidad.
            </p>
            <p className="mt-4 text-muted-foreground">
              Comenzamos como un pequeño taller familiar y hoy nos enorgullece
              ser reconocidos por nuestra dedicación, profesionalismo y atención
              personalizada a cada cliente.
            </p>
            <div className="mt-8 flex gap-4">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold">15+</span>
                <span className="text-sm text-muted-foreground">
                  Años de experiencia
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold">500+</span>
                <span className="text-sm text-muted-foreground">
                  Clientes satisfechos
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold">2000+</span>
                <span className="text-sm text-muted-foreground">
                  Prendas confeccionadas
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-[400px] overflow-hidden rounded-lg"
          >
            <LazyImage
              src="https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Costurera trabajando"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
