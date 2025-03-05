"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MessageSquare } from "lucide-react";

export function CTA() {
  return (
    <div className="relative overflow-hidden">
      {/* Degradado superior con efecto sutil */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <svg
          width="100%"
          height="20"
          viewBox="0 0 1200 20"
          preserveAspectRatio="none"
          className="w-full"
        >
          <defs>
            <linearGradient id="fadeTopCTA" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,0 L1200,0 L1200,20 L0,20 Z" fill="url(#fadeTopCTA)" />
        </svg>
      </div>

      <section className="cta-background py-16 md:py-20 relative">
        {/* Elementos decorativos minimalistas */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Elementos de costura */}
          <div className="stitch stitch-1"></div>
          <div className="stitch stitch-2"></div>
          <div className="thread thread-1"></div>
          <div className="thread thread-2"></div>
        </div>

        <div className="container text-center relative z-10">
          <div className="max-w-[700px] mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-800">
              ¿Listo para crear tu próxima prenda?
            </h2>

            <p className="mt-5 mx-auto max-w-[600px] text-slate-600 text-lg">
              Contáctanos hoy mismo para comenzar a trabajar en tu proyecto.
              Estamos ansiosos por ayudarte a hacer realidad tus ideas.
            </p>

            <div className="mt-8 flex justify-center">
              <Button size="lg" className="cta-button-primary" asChild>
                <Link
                  href="https://wa.me/51912345678"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Solicitar Presupuesto
                </Link>
              </Button>
            </div>

            <div className="mt-6 text-slate-500 text-sm">
              Sin compromisos • Respuesta en menos de 24 horas
            </div>
          </div>
        </div>
      </section>

      {/* Degradado inferior con efecto sutil */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          width="100%"
          height="20"
          viewBox="0 0 1200 20"
          preserveAspectRatio="none"
          className="w-full"
        >
          <defs>
            <linearGradient
              id="fadeBottomCTA"
              x1="0%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,20 L1200,20 L1200,0 L0,0 Z" fill="url(#fadeBottomCTA)" />
        </svg>
      </div>
    </div>
  );
}
