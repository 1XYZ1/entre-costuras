import { ServiceLayout } from "@/components/ServiceLayout"

export default function DisenoDePatrones() {
  return (
    <ServiceLayout
      title="Diseño de Patrones"
      description="Nuestro servicio de diseño de patrones te permite crear prendas únicas y personalizadas desde cero. Trabajamos contigo para desarrollar patrones que se ajusten perfectamente a tus medidas y estilo."
      process={[
        "Consulta inicial y toma de medidas",
        "Bocetos y diseño conceptual",
        "Creación de patrones base",
        "Ajustes y modificaciones",
        "Prueba y refinamiento",
        "Entrega del patrón final",
      ]}
      images={[
        {
          src: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          alt: "Diseñador trabajando en un patrón",
        },
        {
          src: "https://images.unsplash.com/photo-1605289355680-75fb41239154?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          alt: "Patrones de papel",
        },
        {
          src: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          alt: "Prueba de un patrón en maniquí",
        },
      ]}
    />
  )
}

