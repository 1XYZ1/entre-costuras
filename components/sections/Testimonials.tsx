"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "María González",
    text: "Confeccionaron mi vestido de novia y quedó perfecto. El servicio fue excelente y la atención personalizada hizo toda la diferencia. ¡Totalmente recomendado!",
  },
  {
    name: "Carlos Rodríguez",
    text: "Llevé varios trajes para ajustes y el resultado fue impecable. Profesionales, puntuales y con un trabajo de gran calidad. Sin duda volveré para futuros proyectos.",
  },
  {
    name: "Laura Martínez",
    text: "Las clases de costura fueron una experiencia maravillosa. Aprendí mucho y ahora puedo hacer mis propios proyectos. La paciencia y conocimiento de los instructores es excepcional.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-16 md:py-24">
      <div className="container-content">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-4 text-muted-foreground">
            La satisfacción de nuestros clientes es nuestra mayor recompensa.
            Conoce las experiencias de quienes ya han confiado en nosotros.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg border p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
