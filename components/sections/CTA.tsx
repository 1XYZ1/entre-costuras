import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTA() {
  return (
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          ¿Listo para crear tu próxima prenda?
        </h2>
        <p className="mt-4 mx-auto max-w-[700px]">
          Contáctanos hoy mismo para comenzar a trabajar en tu proyecto. Estamos ansiosos por ayudarte a hacer realidad
          tus ideas.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
            <Link href="https://wa.me/51912345678" target="_blank" rel="noopener noreferrer">
              Solicitar Presupuesto
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

