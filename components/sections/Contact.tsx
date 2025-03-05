import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contacto" className="bg-muted/50 py-16 md:py-24">
      <div className="container-content">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Contáctanos
            </h2>
            <p className="mt-4 text-muted-foreground">
              Estamos aquí para ayudarte con cualquier consulta o proyecto que
              tengas en mente. No dudes en ponerte en contacto con nosotros.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-2">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <span>+51 912 345 678</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-2">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <span>info@entrecosturas.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-2">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <span>C. Cantuarias 140, Miraflores, Perú</span>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-bold mb-4">
                Síguenos en redes sociales
              </h3>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="rounded-full bg-primary/10 p-3 hover:bg-primary/20 transition-colors"
                >
                  <Instagram className="h-5 w-5 text-primary" />
                </Link>
                <Link
                  href="#"
                  className="rounded-full bg-primary/10 p-3 hover:bg-primary/20 transition-colors"
                >
                  <Facebook className="h-5 w-5 text-primary" />
                </Link>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-xl font-bold mb-4">Envíanos un mensaje</h3>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nombre
                  </label>
                  <input
                    id="name"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    placeholder="Tu email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Asunto
                </label>
                <input
                  id="subject"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  placeholder="Asunto del mensaje"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm min-h-[120px]"
                  placeholder="Tu mensaje"
                />
              </div>
              <Button className="w-full">Enviar mensaje</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
