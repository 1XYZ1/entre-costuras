"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Building2,
  User,
  ArrowRight,
} from "lucide-react";
import { useImagePreloader } from "@/hooks/useImagePreloader";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import React from "react";

// Componente VisuallyHidden para accesibilidad
const VisuallyHidden = ({ children }: { children: React.ReactNode }) => {
  return (
    <span
      className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0"
      style={{
        clip: "rect(0, 0, 0, 0)",
        clipPath: "inset(50%)",
      }}
    >
      {children}
    </span>
  );
};

// Creamos un DialogOverlay personalizado con fondo oscuro
const DarkDialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/90 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
DarkDialogOverlay.displayName = "DarkDialogOverlay";

// Creamos un DialogPortal personalizado que use nuestro DarkDialogOverlay
const DarkDialogPortal = ({
  children,
  ...props
}: DialogPrimitive.DialogPortalProps & { children: React.ReactNode }) => (
  <DialogPrimitive.Portal {...props}>
    <DarkDialogOverlay />
    {children}
  </DialogPrimitive.Portal>
);
DarkDialogPortal.displayName = "DarkDialogPortal";

// Creamos un DialogContent personalizado que use nuestro DarkDialogPortal
const DarkDialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DarkDialogPortal>
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full bg-[#050510] border-none",
        className
      )}
      style={{
        backgroundColor: "rgba(5, 5, 10, 0.98)",
      }}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DarkDialogPortal>
));
DarkDialogContent.displayName = "DarkDialogContent";

// Estilos CSS personalizados
const customStyles = `
  .b2b-card {
    position: relative;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
  }

  .b2b-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #60a5fa, #93c5fd);
    z-index: 10;
  }

  .b2c-card {
    position: relative;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
  }

  .b2c-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #ec4899, #f472b6, #f9a8d4);
    z-index: 10;
  }

  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  .category-title {
    display: inline-block;
    position: relative;
    margin-bottom: 1.5rem;
  }

  .category-title::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40%;
    height: 3px;
    border-radius: 2px;
  }

  .b2b-title::after {
    background-color: #3b82f6;
  }

  .b2c-title::after {
    background-color: #ec4899;
  }

  .more-projects-button {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    z-index: 1;
  }

  .more-projects-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: all 0.6s ease;
    z-index: -1;
  }

  .more-projects-button:hover::before {
    left: 100%;
  }

  .modal-image-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .modal-image {
    max-width: 100%;
    max-height: 70vh;
    object-fit: contain;
    border-radius: 0.5rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }

  .modal-close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: rgba(15, 15, 20, 0.7);
    color: white;
    border: none;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    z-index: 50;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  .modal-close-button:hover {
    background-color: rgba(30, 30, 40, 0.9);
    transform: scale(1.05);
  }

  .modal-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.5) 60%, transparent);
    color: white;
    padding: 2rem 1.5rem 1.5rem;
    text-align: center;
  }

  .category-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .b2b-badge {
    background-color: rgba(59, 130, 246, 0.9);
  }

  .b2c-badge {
    background-color: rgba(236, 72, 153, 0.9);
  }

  @media (max-width: 640px) {
    .project-card {
      aspect-ratio: 1/1.2;
    }

    .project-info {
      opacity: 1 !important;
      background-color: rgba(0, 0, 0, 0.5) !important;
    }

    .modal-image {
      max-height: 60vh;
    }
  }
`;

// Proyectos B2B y B2C
const b2bProjects = [
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Uniformes corporativos para empresa tecnológica",
    category: "B2B",
    description:
      "Diseño y producción de uniformes corporativos para una empresa líder en tecnología, con más de 500 empleados.",
  },
  {
    src: "https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Vestuario para cadena hotelera internacional",
    category: "B2B",
    description:
      "Desarrollo de vestuario completo para personal de una cadena hotelera con presencia en 5 países.",
  },
  {
    src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Textiles corporativos para oficinas",
    category: "B2B",
    description:
      "Soluciones textiles para espacios de trabajo, incluyendo cortinas, tapicería y elementos decorativos.",
  },
];

const b2cProjects = [
  {
    src: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    alt: "Vestido personalizado para evento",
    category: "B2C",
    description:
      "Diseño y confección de vestido a medida para evento especial.",
  },
  {
    src: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    alt: "Ajuste de traje para ceremonia",
    category: "B2C",
    description:
      "Servicio de ajuste y personalización de traje para ceremonia formal.",
  },
  {
    src: "https://images.unsplash.com/photo-1549298240-0d8e60513026?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    alt: "Vestido de novia a medida",
    category: "B2C",
    description:
      "Confección de vestido de novia con diseño exclusivo y personalizado.",
  },
];

// Combinamos todos los proyectos
const allProjects = [...b2bProjects, ...b2cProjects];

// Componente de modal individual para cada proyecto
const ProjectModal = React.memo(
  ({
    project,
    isOpen,
    onClose,
  }: {
    project: (typeof b2bProjects)[0];
    isOpen: boolean;
    onClose: () => void;
  }) => {
    // Manejar teclas de navegación
    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      },
      [onClose]
    );

    return (
      <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DarkDialogContent
          className="max-w-[95vw] max-h-[95vh] p-0 border-none rounded-xl overflow-hidden dark-blur-bg"
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <DialogTitle className="sr-only">Proyecto: {project.alt}</DialogTitle>

          <div className="relative w-full h-[90vh] flex flex-col items-center justify-center">
            {/* Imagen del proyecto */}
            <div className="modal-image-container p-4">
              <Image
                src={project.src}
                alt={project.alt}
                width={1200}
                height={800}
                className="modal-image"
                priority
                quality={90}
                draggable={false}
              />
            </div>

            {/* Botón de cierre */}
            <button
              className="modal-close-button"
              onClick={onClose}
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Leyenda con información del proyecto */}
            <div className="modal-caption">
              <div className="flex justify-center mb-2">
                <span
                  className={`category-badge ${
                    project.category === "B2B" ? "b2b-badge" : "b2c-badge"
                  }`}
                >
                  {project.category === "B2B" ? (
                    <span className="flex items-center gap-1">
                      <Building2 className="h-3 w-3" /> Empresas
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" /> Personal
                    </span>
                  )}
                </span>
              </div>
              <h3 className="text-base md:text-lg font-medium drop-shadow-md mb-1">
                {project.alt}
              </h3>
              <p className="text-xs md:text-sm text-white/90 mt-1 max-w-2xl mx-auto">
                {project.description}
              </p>
            </div>
          </div>
        </DarkDialogContent>
      </Dialog>
    );
  }
);
ProjectModal.displayName = "ProjectModal";

// Componente de tarjeta de proyecto
const ProjectCard = React.memo(
  ({
    project,
    index,
    onOpenModal,
  }: {
    project: (typeof b2bProjects)[0];
    index: number;
    onOpenModal: (project: (typeof b2bProjects)[0]) => void;
  }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className={`relative overflow-hidden project-card ${
          project.category === "B2B" ? "b2b-card" : "b2c-card"
        }`}
        onClick={() => onOpenModal(project)}
      >
        <div className="relative aspect-square sm:aspect-[4/5]">
          <Image
            src={project.src || "/placeholder.svg"}
            alt={project.alt}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="project-info absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 transition-opacity duration-300 flex flex-col items-center justify-end p-5 hover:opacity-100">
          <div className="text-center max-w-[90%]">
            <h3 className="text-white font-semibold text-lg mb-2 drop-shadow-md">
              {project.alt}
            </h3>
            <p className="text-white/90 text-sm line-clamp-2 mb-3 drop-shadow-md">
              {project.description}
            </p>
            <Button
              variant="outline"
              size="sm"
              className="mt-1 text-white border border-white/30 hover:bg-white/10 hover:text-white hover:border-white/60 bg-transparent backdrop-blur-sm transition-all duration-300 transform hover:scale-105 flex items-center gap-1.5 rounded-full px-3 py-1 h-auto w-fit mx-auto"
              onClick={(e) => {
                e.stopPropagation();
                onOpenModal(project);
                if (document.activeElement instanceof HTMLElement) {
                  document.activeElement.blur();
                }
              }}
            >
              <ZoomIn className="h-3 w-3" />
              <span className="text-xs">Ver</span>
            </Button>
          </div>
        </div>
      </motion.div>
    );
  }
);
ProjectCard.displayName = "ProjectCard";

export function Proyectos() {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedProject, setSelectedProject] = useState<
    (typeof b2bProjects)[0] | null
  >(null);
  const imagesPreloaded = useImagePreloader(allProjects.map((img) => img.src));

  // Detectar si es dispositivo móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Función para abrir el modal con el proyecto seleccionado
  const handleOpenModal = useCallback((project: (typeof b2bProjects)[0]) => {
    setSelectedProject(project);
  }, []);

  // Función para cerrar el modal
  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  if (!imagesPreloaded) {
    return (
      <div className="h-96 flex items-center justify-center">
        Cargando proyectos...
      </div>
    );
  }

  return (
    <section id="proyectos">
      {/* Estilos personalizados */}
      <style jsx global>
        {customStyles}
      </style>

      <AnimatedSection className="bg-muted/50 py-16 md:py-24 w-full">
        <div className="container-content">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Nuestros Proyectos
            </h2>
            <p className="mt-4 text-muted-foreground">
              Descubre nuestra experiencia en proyectos para empresas (B2B) y
              clientes individuales (B2C). Cada proyecto refleja nuestro
              compromiso con la excelencia y la personalización.
            </p>
          </div>

          {/* Sección de proyectos B2B */}
          <div className="mt-16">
            <div className="flex items-center">
              <h3 className="text-2xl font-bold category-title b2b-title flex items-center gap-2">
                <Building2 className="h-5 w-5 text-blue-500" />
                Proyectos para Empresas
              </h3>
            </div>
            <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {b2bProjects.map((project, index) => (
                <ProjectCard
                  key={project.src}
                  project={project}
                  index={index}
                  onOpenModal={handleOpenModal}
                />
              ))}
            </div>
          </div>

          {/* Sección de proyectos B2C */}
          <div className="mt-20">
            <div className="flex items-center">
              <h3 className="text-2xl font-bold category-title b2c-title flex items-center gap-2">
                <User className="h-5 w-5 text-pink-500" />
                Proyectos Personales
              </h3>
            </div>
            <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {b2cProjects.map((project, index) => (
                <ProjectCard
                  key={project.src}
                  project={project}
                  index={index}
                  onOpenModal={handleOpenModal}
                />
              ))}
            </div>
          </div>

          {/* Botón para ver más proyectos */}
          <div className="mt-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button
                variant="default"
                size="lg"
                className="more-projects-button bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-8 py-6 h-auto"
                onClick={() => {
                  if (document.activeElement instanceof HTMLElement) {
                    document.activeElement.blur();
                  }
                }}
              >
                <span className="mr-2">Explorar todos los proyectos</span>
                <ArrowRight className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Modal para el proyecto seleccionado */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            isOpen={!!selectedProject}
            onClose={handleCloseModal}
          />
        )}
      </AnimatedSection>
    </section>
  );
}

// Mantenemos la exportación de Gallery para compatibilidad con importaciones existentes
export const Gallery = Proyectos;
