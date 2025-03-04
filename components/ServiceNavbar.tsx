import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export function ServiceNavbar() {
  return (
    <header className="bg-background border-b">
      <div className="container py-4">
        <nav className="flex justify-between items-center">
          <Button variant="ghost" asChild>
            <Link href="/" className="flex items-center">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Link>
          </Button>
          <div className="flex gap-4">
            <Link href="/servicios/confeccion-a-medida" className="text-sm hover:text-primary transition-colors">
              Confección a Medida
            </Link>
            <Link href="/servicios/arreglos-y-ajustes" className="text-sm hover:text-primary transition-colors">
              Arreglos y Ajustes
            </Link>
            <Link href="/servicios/diseno-de-patrones" className="text-sm hover:text-primary transition-colors">
              Diseño de Patrones
            </Link>
            <Link href="/servicios/asesoria-de-imagen" className="text-sm hover:text-primary transition-colors">
              Asesoría de Imagen
            </Link>
            <Link href="/servicios/ropa-para-eventos" className="text-sm hover:text-primary transition-colors">
              Ropa para Eventos
            </Link>
            <Link href="/servicios/clases-de-costura" className="text-sm hover:text-primary transition-colors">
              Clases de Costura
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

