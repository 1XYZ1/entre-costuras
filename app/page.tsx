import { Suspense } from "react";
import dynamic from "next/dynamic";
import { MainNav } from "@/components/MainNav";
import { Hero } from "@/components/sections/Hero";
import { AboutUs } from "@/components/sections/AboutUs";
import { Services } from "@/components/sections/Services";

const Proyectos = dynamic(
  () => import("@/components/sections/Projects").then((mod) => mod.Proyectos),
  { ssr: false }
);
const Testimonials = dynamic(
  () =>
    import("@/components/sections/Testimonials").then(
      (mod) => mod.Testimonials
    ),
  {
    ssr: false,
  }
);
const Clients = dynamic(
  () => import("@/components/sections/Clients").then((mod) => mod.Clients),
  { ssr: false }
);
const InstagramCarousel = dynamic(
  () =>
    import("@/components/sections/InstagramCarousel").then(
      (mod) => mod.InstagramCarousel
    ),
  { ssr: false }
);
const Location = dynamic(
  () => import("@/components/sections/Location").then((mod) => mod.Location),
  { ssr: false }
);
const Contact = dynamic(
  () => import("@/components/sections/Contact").then((mod) => mod.Contact),
  { ssr: false }
);
const CTA = dynamic(
  () => import("@/components/sections/CTA").then((mod) => mod.CTA),
  { ssr: false }
);
const Footer = dynamic(
  () => import("@/components/Footer").then((mod) => mod.Footer),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        <Hero />
        <AboutUs />
        <Services />
        <Suspense fallback={<div>Cargando proyectos...</div>}>
          <Proyectos />
        </Suspense>
        <Suspense fallback={<div>Cargando testimonios...</div>}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<div>Cargando clientes...</div>}>
          <Clients />
        </Suspense>
        <Suspense fallback={<div>Cargando CTA...</div>}>
          <CTA />
        </Suspense>
        <Suspense fallback={<div>Cargando ubicación...</div>}>
          <Location />
        </Suspense>
        <Suspense fallback={<div>Cargando Instagram...</div>}>
          <InstagramCarousel />
        </Suspense>
        <Suspense fallback={<div>Cargando contacto...</div>}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div>Cargando pie de página...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}
