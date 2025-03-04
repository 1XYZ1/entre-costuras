import { ServiceLayout } from "@/components/ServiceLayout"

export default function AsesoriaDeImagen() {
  return (
    <ServiceLayout
      title="Asesoría de Imagen"
      description="Nuestro servicio de asesoría de imagen te ayuda a descubrir y potenciar tu estilo personal. Te guiamos en la selección de prendas, colores y estilos que mejor se adapten a tu personalidad y forma de vida."
      process={[
        "Análisis de colorimetría",
        "Estudio de la forma del cuerpo",
        "Revisión de guardarropa",
        "Asesoría en compras",
        "Creación de looks personalizados",
        "Consejos de estilismo",
      ]}
      images={[
        {
          src: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          alt: "Asesor de imagen trabajando con un cliente",
        },
        {
          src: "https://images.unsplash.com/photo-1542060748-10c28b62716f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          alt: "Selección de colores para un cliente",
        },
        {
          src: "https://images.unsplash.com/photo-1608748010899-18f300247112?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          alt: "Resultado de una asesoría de imagen",
        },
      ]}
    />
  )
}

