import { ServiceLayout } from "@/components/ServiceLayout"

export default function ArreglosYAjustes() {
  return (
    <ServiceLayout
      title="Arreglos y Ajustes"
      description="Nuestro servicio de arreglos y ajustes te permite dar nueva vida a tus prendas favoritas o adaptar ropa nueva a tu medida perfecta. Realizamos todo tipo de arreglos, desde simples dobladillos hasta complejas modificaciones estructurales."
      process={[
        "Evaluación inicial de la prenda",
        "Toma de medidas y marcado",
        "Desmontaje (si es necesario)",
        "Realización de ajustes",
        "Prueba de ajuste",
        "Acabados finales",
      ]}
      images={[
        {
          src: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          alt: "Costurera realizando ajustes",
        },
        {
          src: "https://images.unsplash.com/photo-1612462766564-895ea3388d2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          alt: "Detalle de un dobladillo",
        },
        {
          src: "https://images.unsplash.com/photo-1598554747436-c9293d6a70b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          alt: "Antes y después de un ajuste",
        },
      ]}
    />
  )
}

