"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Scissors, Menu } from "lucide-react"

const navItems = [
  { name: "Inicio", path: "/" },
  { name: "Nosotros", path: "/#nosotros" },
  { name: "Servicios", path: "/#servicios" },
  { name: "Galería", path: "/#galeria" },
  { name: "Testimonios", path: "/#testimonios" },
  { name: "Contacto", path: "/#contacto" },
]

export function MainNav() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isHomePage = pathname === "/"

  const scrollToSection = (sectionId: string) => {
    if (typeof window !== "undefined") {
      if (isHomePage) {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      } else {
        window.location.href = `/#${sectionId}`
      }
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Scissors className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block text-foreground">Entre Costuras</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className={`transition-colors hover:text-primary ${
                  isScrolled || !isHomePage ? "text-foreground" : "text-white"
                }`}
                onClick={(e) => {
                  if (isHomePage && item.path.startsWith("/#")) {
                    e.preventDefault()
                    scrollToSection(item.path.replace("/#", ""))
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className={`h-6 w-6 ${isScrolled || !isHomePage ? "text-foreground" : "text-white"}`} />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0">
              <MobileLink href="/" className="flex items-center" onOpenChange={() => {}}>
                <Scissors className="mr-2 h-4 w-4" />
                <span className="font-bold">Entre Costuras</span>
              </MobileLink>
              <nav className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <MobileLink key={item.path} href={item.path} onOpenChange={() => {}} className="text-foreground/60">
                    {item.name}
                  </MobileLink>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function MobileLink({ href, onOpenChange, className, children, ...props }: any) {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <Link
      href={href}
      onClick={(e) => {
        if (isHomePage && href.startsWith("/#")) {
          e.preventDefault()
          const sectionId = href.replace("/#", "")
          const element = document.getElementById(sectionId)
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
            onOpenChange?.()
          }
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  )
}

