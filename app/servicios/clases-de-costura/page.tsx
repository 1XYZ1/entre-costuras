import { ServiceLayout } from "@/components/ServiceLayout"

export default function ClasesDeCostura() {
  return (
    <ServiceLayout
      title="Clases de Costura"
      description="Nuestras clases de costura te permiten aprender y perfeccionar tus habilidades en el arte de la confección. Ofrecemos cursos para todos los niveles, desde principiantes hasta avanzados, en un ambiente acogedor y creativo."
      process={[
        "Evaluación de nivel y objetivos",
        "Selección del curso adecuado",
        "Introducción a técnicas básicas o avanzadas",
        "Práctica guiada",
        "Proyectos personalizados",
        "Evaluación y feedback continuo",
      ]}
      images={[
        {
          src: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          alt: "Clase de costura en grupo",
        },
        {
          src: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          alt: "Estudiante trabajando en una máquina de coser",
        },
        {
          src: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          alt: "Proyecto finalizado en clase de costura",
        },
      ]}
    />
  )
}

