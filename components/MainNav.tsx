"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Scissors, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Inicio", path: "/" },
  { name: "Nosotros", path: "/#nosotros" },
  {
    name: "Servicios",
    path: "/#servicios",
    submenu: [
      { name: "Confección a medida", path: "/servicios/confeccion-a-medida" },
      { name: "Arreglos y ajustes", path: "/servicios/arreglos-y-ajustes" },
      { name: "Diseño personalizado", path: "/servicios/diseno-de-patrones" },
      { name: "Diseño de imagen", path: "/servicios/asesoria-de-imagen" },
    ],
  },
  { name: "Galería", path: "/#gallery" },
  { name: "Testimonios", path: "/#testimonios" },
  { name: "Contacto", path: "/#contacto" },
];

export function MainNav() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const submenuRef = useRef<HTMLDivElement>(null);

  // Cerrar el submenú al hacer clic fuera de él
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        submenuRef.current &&
        !submenuRef.current.contains(event.target as Node)
      ) {
        setOpenSubmenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
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
                  className="relative"
                  ref={item.name === "Servicios" ? submenuRef : null}
                >
                  {item.submenu ? (
                    <div className="relative">
                      <button
                        className={`flex items-center transition-colors hover:text-primary relative group px-1 py-1 ${
                          isScrolled || !isHomePage
                            ? "text-foreground"
                            : "text-white"
                        }`}
                        onClick={() => toggleSubmenu(item.name)}
                      >
                        {item.name}
                        <ChevronDown
                          className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                            openSubmenu === item.name ? "rotate-180" : ""
                          }`}
                        />
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                      </button>
                      <AnimatePresence>
                        {openSubmenu === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: "auto" }}
                            exit={{ opacity: 0, y: 10, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden z-50"
                          >
                            <div className="py-1">
                              {item.submenu.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  href={subItem.path}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors duration-200"
                                  onClick={() => setOpenSubmenu(null)}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
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
                  )}
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
                      {navItem.submenu ? (
                        <div>
                          <button
                            onClick={() => toggleSubmenu(navItem.name)}
                            className="text-foreground text-lg font-medium hover:text-primary transition-colors py-2 flex items-center justify-between w-full"
                          >
                            {navItem.name}
                            <ChevronDown
                              className={`ml-1 h-5 w-5 transition-transform duration-200 ${
                                openSubmenu === navItem.name ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {openSubmenu === navItem.name && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="ml-4 mt-2 border-l-2 border-gray-200 pl-4"
                              >
                                {navItem.submenu.map((subItem, subIndex) => (
                                  <MobileLink
                                    key={subIndex}
                                    href={subItem.path}
                                    onOpenChange={() => setIsOpen(false)}
                                    className="text-muted-foreground text-base hover:text-primary transition-colors py-2 block"
                                  >
                                    {subItem.name}
                                  </MobileLink>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <MobileLink
                          href={navItem.path}
                          onOpenChange={() => setIsOpen(false)}
                          className="text-foreground text-lg font-medium hover:text-primary transition-colors py-2 block"
                        >
                          {navItem.name}
                        </MobileLink>
                      )}
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
