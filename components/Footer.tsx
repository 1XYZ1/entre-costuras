import Link from "next/link";
import { Scissors } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scissors className="h-6 w-6" />
              <span className="text-xl font-bold">Entre Costuras</span>{" "}
            </div>
            <p className="text-sm text-muted-foreground">
              Creando prendas únicas con pasión y dedicación desde 2008.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2 text-sm">
              {[
                "inicio",
                "nosotros",
                "servicios",
                "galeria",
                "testimonios",
                "clientes",
                "contacto",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="text-muted-foreground hover:text-foreground cursor-pointer"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Confección a medida",
                "Arreglos y ajustes",
                "Diseño de patrones",
                "Asesoría de imagen",
                "Ropa para eventos",
                "Clases de costura",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Horario</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span className="text-muted-foreground">Lunes - Viernes:</span>
                <span>9:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Sábado:</span>
                <span>10:00 - 14:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Domingo:</span>
                <span>Cerrado</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Entre Costuras. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Política de privacidad
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
