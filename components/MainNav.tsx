"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Scissors } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Inicio", path: "/" },
  { name: "Nosotros", path: "/#nosotros" },
  { name: "Servicios", path: "/#servicios" },
  { name: "Galería", path: "/#gallery" },
  { name: "Testimonios", path: "/#testimonios" },
  { name: "Contacto", path: "/#contacto" },
];

export function MainNav() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Prevenir scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";

  const scrollToSection = (sectionId: string) => {
    if (typeof window !== "undefined") {
      if (isHomePage) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.location.href = `/#${sectionId}`;
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full ${
        isScrolled || !isHomePage
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        <div className="flex h-16 sm:h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: [0, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Scissors
                className={`h-6 w-6 sm:h-7 sm:w-7 ${
                  isScrolled || !isHomePage ? "text-primary" : "text-primary"
                }`}
              />
            </motion.div>
            <motion.span
              className={`font-extrabold text-lg sm:text-xl drop-shadow-sm transition-colors duration-300 ${
                isScrolled || !isHomePage ? "text-foreground" : "text-white"
              }`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ color: "hsl(var(--primary))" }}
            >
              Entre Costuras
            </motion.span>
          </Link>

          {/* Navegación de escritorio */}
          <nav className="hidden md:flex items-center justify-center flex-1 mx-10">
            <div className="flex items-center justify-center space-x-14 text-sm font-medium tracking-wide">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={item.path}
                    className={`transition-colors hover:text-primary relative group px-1 py-1 ${
                      isScrolled || !isHomePage
                        ? "text-foreground"
                        : "text-white"
                    }`}
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      if (isHomePage && item.path.startsWith("/#")) {
                        e.preventDefault();
                        scrollToSection(item.path.replace("/#", ""));
                      }
                    }}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </nav>

          {/* Espacio vacío para equilibrar el diseño en escritorio */}
          <div className="hidden md:block w-[140px]"></div>

          {/* Menú móvil */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                onClick={() => setIsOpen(true)}
              >
                <div className="flex flex-col justify-center items-center w-6 h-6 space-y-1.5 relative">
                  <motion.span
                    className={`block h-0.5 w-6 bg-current rounded-full transition-all duration-300 ${
                      isScrolled || !isHomePage ? "bg-foreground" : "bg-white"
                    }`}
                    animate={
                      isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
                    }
                  />
                  <motion.span
                    className={`block h-0.5 w-6 bg-current rounded-full transition-all duration-300 ${
                      isScrolled || !isHomePage ? "bg-foreground" : "bg-white"
                    }`}
                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  />
                  <motion.span
                    className={`block h-0.5 w-6 bg-current rounded-full transition-all duration-300 ${
                      isScrolled || !isHomePage ? "bg-foreground" : "bg-white"
                    }`}
                    animate={
                      isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                    }
                  />
                </div>
                <span className="sr-only">Menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="pr-0 pt-12 w-[80%] sm:w-[350px] overflow-y-auto overflow-x-hidden"
            >
              <SheetClose
                className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex flex-col justify-center items-center w-6 h-6 relative">
                  <motion.span
                    className="block h-0.5 w-6 bg-foreground rounded-full absolute"
                    initial={{ rotate: 45 }}
                  />
                  <motion.span
                    className="block h-0.5 w-6 bg-foreground rounded-full absolute"
                    initial={{ rotate: -45 }}
                  />
                </div>
                <span className="sr-only">Cerrar</span>
              </SheetClose>

              <div className="flex items-center mb-8 mt-2">
                <Scissors className="mr-3 h-6 w-6 text-primary" />
                <span className="font-extrabold text-xl">Entre Costuras</span>
              </div>

              <nav className="flex flex-col space-y-6 mt-8">
                <AnimatePresence>
                  {navItems.map((navItem, index) => (
                    <motion.div
                      key={navItem.path}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <MobileLink
                        href={navItem.path}
                        onOpenChange={() => setIsOpen(false)}
                        className="text-foreground text-lg font-medium hover:text-primary transition-colors py-2 block"
                      >
                        {navItem.name}
                      </MobileLink>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </nav>

              <motion.div
                className="absolute bottom-8 left-6 right-6 pt-6 border-t border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-muted-foreground text-sm">
                  ¿Necesitas ayuda? Contáctanos
                </p>
                <Button className="mt-4 w-full" size="sm">
                  <Link href="/#contacto" onClick={() => setIsOpen(false)}>
                    Contacto
                  </Link>
                </Button>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

interface MobileLinkProps {
  href: string;
  onOpenChange?: () => void;
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <Link
      href={href}
      onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
        if (isHomePage && href.startsWith("/#")) {
          e.preventDefault();
          const sectionId = href.replace("/#", "");
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            onOpenChange?.();
          }
        } else {
          onOpenChange?.();
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
