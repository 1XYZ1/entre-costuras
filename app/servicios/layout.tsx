"use client";

import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <div className="flex-1 pt-16">{children}</div>
      <Footer />
    </div>
  );
}
