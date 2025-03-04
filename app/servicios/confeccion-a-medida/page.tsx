import { ServiceLayout } from "@/components/ServiceLayout"

export default function ConfeccionAMedida() {
  return (
    <ServiceLayout
      title="Confección a Medida"
      description="Nuestro servicio de confección a medida te permite obtener prendas únicas y perfectamente ajustadas a tu cuerpo y estilo personal. Trabajamos con una amplia variedad de telas y diseños para crear desde trajes elegantes hasta vestidos de novia y prendas casuales."
      process={[
        "Consulta inicial y toma de medidas",
        "Selección de telas y diseño",
        "Creación de patrones personalizados",
        "Corte y confección de la prenda",
        "Pruebas y ajustes",
        "Entrega de la prenda finalizada",
      ]}
      images={[
        {
          src: "https://images.unsplash.com/photo-1556442261-e52a7d45ebc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          alt: "Sastre tomando medidas",
        },
        {
          src: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          alt: "Detalle de costura a mano",
        },
        {
          src: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          alt: "Prueba de ajuste de un traje",
        },
      ]}
    />
  )
}

