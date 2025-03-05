"use client";

import { motion } from "framer-motion";

export function Location() {
  return (
    <section id="ubicacion" className="py-16 md:py-24 bg-muted/30">
      <div className="container-content">
        <div className="mx-auto max-w-[800px] text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Nuestra Ubicación
          </h2>
          <p className="mt-4 text-muted-foreground">
            Visítanos en nuestro taller. Estamos ubicados en el corazón de la
            ciudad, listos para atenderte y hacer realidad tus ideas de moda.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Entre Costuras</h3>
            <p className="mb-2">C. Cantuarias 140</p>
            <p className="mb-2">Miraflores, Perú</p>
            <p className="mb-4">Tel: +51 912 345 678</p>
            <h4 className="font-bold mb-2">Horario de atención:</h4>
            <p className="mb-1">Lunes a Viernes: 9:00 - 19:00</p>
            <p className="mb-1">Sábados: 10:00 - 14:00</p>
            <p>Domingos: Cerrado</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="aspect-video rounded-lg overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.8634586790713!2d-77.0285545!3d-12.1214935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c9c02a8a12f5%3A0xe679c88de16ae72e!2sEntre%20Costuras%20Per%C3%BA!5e0!3m2!1ses-419!2scl!4v1741060830685!5m2!1ses-419!2scl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
