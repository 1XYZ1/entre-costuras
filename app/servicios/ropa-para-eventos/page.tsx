import { ServiceLayout } from "@/components/ServiceLayout"

export default function RopaParaEventos() {
  return (
    <ServiceLayout
      title="Ropa para Eventos"
      description="Nuestro servicio de ropa para eventos te ofrece prendas únicas y elegantes para tus ocasiones especiales. Diseñamos y confeccionamos vestidos de novia, trajes de gala, y atuendos para todo tipo de celebraciones."
      process={[
        "Consulta inicial y definición del evento",
        "Diseño y selección de telas",
        "Toma de medidas",
        "Confección de la prenda",
        "Pruebas y ajustes",
        "Entrega final y asesoramiento",
      ]}
      images={[
        {
          src: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          alt: "Vestido de novia",
        },
        {
          src: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          alt: "Traje de gala",
        },
        {
          src: "https://images.unsplash.com/photo-1549298240-0d8e60513026?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          alt: "Atuendo para cóctel",
        },
      ]}
    />
  )
}

