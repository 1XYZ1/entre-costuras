import type React from "react";
import type { Metadata } from "next";
import { ImagePreloader } from "@/components/ImagePreloader";
import "@/app/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata: Metadata = {
  title: "Entre Costuras",
  description: "Taller de costura y confección personalizada",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="overflow-x-hidden">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body className="overflow-x-hidden">
        <ImagePreloader />
        {children}
      </body>
    </html>
  );
}

import "./globals.css";
