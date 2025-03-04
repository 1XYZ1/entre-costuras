import type React from "react"
import type { Metadata } from "next"
import { ImagePreloader } from "@/components/ImagePreloader"
import "@/app/globals.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export const metadata: Metadata = {
  title: "Entre Costuras",
  description: "Taller de costura y confección personalizada",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <ImagePreloader />
        {children}
      </body>
    </html>
  )
}



import './globals.css'