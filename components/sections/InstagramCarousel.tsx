"use client";

import Slider from "react-slick";
import { useState, useEffect } from "react";
import { LazyImage } from "@/components/ui/lazy-image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useImagePreloader } from "@/hooks/useImagePreloader";
import { Instagram, ChevronLeft, ChevronRight } from "lucide-react";

const instagramPosts = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1584661156681-540e80a161d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1605289355680-75fb41239154?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1542060748-10c28b62716f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1608748010899-18f300247112?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
];

// Componentes personalizados para las flechas del carrusel
const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <button
      className="custom-arrow custom-arrow-prev"
      style={{ ...style }}
      onClick={onClick}
      aria-label="Anterior"
      type="button"
    >
      &larr;
    </button>
  );
};

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <button
      className="custom-arrow custom-arrow-next"
      style={{ ...style }}
      onClick={onClick}
      aria-label="Siguiente"
      type="button"
    >
      &rarr;
    </button>
  );
};

// Mejoramos la configuración del slider para mayor fluidez al hacer tapping
const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  cssEase: "ease-out",
  pauseOnHover: true,
  swipeToSlide: true,
  touchThreshold: 10,
  useCSS: true,
  useTransform: true,
  waitForAnimate: false,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export function InstagramCarousel() {
  const [mounted, setMounted] = useState(false);
  const imagesPreloaded = useImagePreloader(
    instagramPosts.map((post) => post.src)
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !imagesPreloaded) {
    return null; // or a loading placeholder
  }

  return (
    <div className="relative overflow-hidden">
      {/* Degradado superior con efecto irregular y más sutil */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <svg
          width="100%"
          height="40"
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
          className="w-full"
        >
          <defs>
            <linearGradient id="fadeTop" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="80%" stopColor="white" stopOpacity="0.3" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,0 L1200,0 L1200,15 C1150,20 1100,30 1050,25 C1000,20 950,10 900,15 C850,20 800,30 750,25 C700,20 650,10 600,15 C550,20 500,30 450,25 C400,20 350,10 300,15 C250,20 200,30 150,25 C100,20 50,10 0,15 L0,0 Z"
            fill="url(#fadeTop)"
          />
        </svg>
      </div>

      <div className="instagram-background py-16 md:py-24 relative">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Burbujas decorativas */}
          <div className="bubble bubble-1"></div>
          <div className="bubble bubble-2"></div>
          <div className="bubble bubble-3"></div>
          <div className="bubble bubble-4"></div>

          {/* Líneas onduladas decorativas */}
          <svg
            className="wavy-line wavy-line-1"
            viewBox="0 0 1200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,100 C150,160 350,0 500,100 C650,200 850,40 1000,100 C1150,160 1350,0 1500,100"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
            />
          </svg>

          <svg
            className="wavy-line wavy-line-2"
            viewBox="0 0 1200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,150 C150,50 350,220 500,150 C650,80 850,250 1000,150 C1150,50 1350,220 1500,150"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="container-content relative z-10">
          <div className="mx-auto max-w-[800px] text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white drop-shadow-md">
              Síguenos en Instagram
            </h2>

            <p className="mt-4 text-white font-medium drop-shadow-sm">
              Descubre nuestras últimas creaciones y mantente al día con
              nuestras novedades
            </p>
          </div>

          {/* Añadimos estilos para mejorar la accesibilidad y la experiencia táctil */}
          <style jsx global>{`
            .instagram-background {
              background: linear-gradient(
                135deg,
                #4158d0 0%,
                #c850c0 46%,
                #ffcc70 100%
              );
              position: relative;
            }

            /* Burbujas decorativas */
            .bubble {
              position: absolute;
              border-radius: 50%;
              background: radial-gradient(
                circle at 30% 30%,
                rgba(255, 255, 255, 0.2),
                rgba(255, 255, 255, 0)
              );
              filter: blur(5px);
            }

            .bubble-1 {
              width: 300px;
              height: 300px;
              top: -100px;
              left: 10%;
              opacity: 0.4;
              animation: float 20s ease-in-out infinite;
            }

            .bubble-2 {
              width: 200px;
              height: 200px;
              bottom: 10%;
              right: 15%;
              opacity: 0.3;
              animation: float 15s ease-in-out infinite 2s;
            }

            .bubble-3 {
              width: 150px;
              height: 150px;
              top: 30%;
              right: 5%;
              opacity: 0.2;
              animation: float 18s ease-in-out infinite 1s;
            }

            .bubble-4 {
              width: 250px;
              height: 250px;
              bottom: -50px;
              left: 20%;
              opacity: 0.3;
              animation: float 22s ease-in-out infinite 3s;
            }

            /* Líneas onduladas */
            .wavy-line {
              position: absolute;
              width: 100%;
              height: auto;
              opacity: 0.5;
            }

            .wavy-line-1 {
              top: 20%;
              animation: wave 25s linear infinite;
            }

            .wavy-line-2 {
              bottom: 15%;
              animation: wave 20s linear infinite reverse;
            }

            @keyframes float {
              0%,
              100% {
                transform: translateY(0) rotate(0deg);
              }
              50% {
                transform: translateY(-20px) rotate(5deg);
              }
            }

            @keyframes wave {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .instagram-carousel .slick-track {
              display: flex;
              align-items: center;
            }
            .instagram-carousel .slick-slide {
              transition: transform 0.2s ease;
            }
            .instagram-carousel .slick-current {
              z-index: 1;
            }

            /* Estilos para las flechas personalizadas */
            .custom-arrow {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              z-index: 10;
              width: 44px;
              height: 44px;
              display: flex;
              align-items: center;
              justify-content: center;
              background: rgba(255, 255, 255, 0.2);
              border: 1px solid rgba(255, 255, 255, 0.4);
              border-radius: 50%;
              backdrop-filter: blur(4px);
              cursor: pointer;
              transition: all 0.3s ease;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              animation: pulse-arrow 2s infinite;
              font-size: 20px;
              color: white;
              line-height: 1;
              padding: 0;
              font-family: system-ui, sans-serif;
            }

            .custom-arrow:hover {
              background: rgba(255, 255, 255, 0.3);
              transform: translateY(-50%) scale(1.05);
              box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
            }

            .custom-arrow-prev {
              left: -40px;
            }

            .custom-arrow-next {
              right: -40px;
            }

            @keyframes pulse-arrow {
              0% {
                box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
              }
              70% {
                box-shadow: 0 0 0 8px rgba(255, 255, 255, 0);
              }
              100% {
                box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
              }
            }

            @media (min-width: 640px) {
              .custom-arrow-prev {
                left: -50px;
              }

              .custom-arrow-next {
                right: -50px;
              }
            }

            @media (min-width: 1024px) {
              .custom-arrow-prev {
                left: -60px;
              }

              .custom-arrow-next {
                right: -60px;
              }
            }

            /* Fuentes personalizadas */
            @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap");
            @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap");

            /* Animación sutil para el botón de Instagram */
            @keyframes pulse-subtle {
              0% {
                box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
              }
              70% {
                box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
              }
              100% {
                box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
              }
            }

            /* Estilo específico para el enlace de Instagram */
            .instagram-link {
              font-family: "Montserrat", -apple-system, BlinkMacSystemFont,
                "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
              font-weight: 600;
              letter-spacing: 0.5px;
            }
          `}</style>

          <div className="px-4 md:px-14 lg:px-20 relative mx-auto max-w-[1200px]">
            <Slider {...sliderSettings} className="instagram-carousel">
              {instagramPosts.map((post) => (
                <div key={post.id} className="px-2">
                  <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-[1.02] cursor-pointer">
                    <LazyImage
                      src={post.src}
                      alt={`Instagram Post ${post.id}`}
                      width={500}
                      height={500}
                      className="object-cover w-full h-full"
                      fallbackSrc="/placeholder.svg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                      <div className="w-full">
                        <p className="text-white text-sm font-medium mb-1">
                          Descubre nuestra última creación
                        </p>
                        <p
                          className="text-white/90 text-xs font-medium"
                          style={{
                            fontFamily: "'Dancing Script', cursive, system-ui",
                          }}
                        >
                          #EntreXCosturas
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Enlace directo a Instagram con el @ destacado */}
          <div className="mt-8 flex items-center justify-center">
            <Link
              href="https://www.instagram.com/entrexcosturas"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-white/30 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-3 border border-white/40 shadow-lg transform hover:scale-105 transition-all duration-300 hover:bg-white/40">
                <div className="bg-gradient-to-br from-[#4158D0] to-[#C850C0] p-2 rounded-full shadow-inner">
                  <Instagram className="h-5 w-5 text-white" />
                </div>
                <span className="text-white text-lg font-semibold tracking-wide group-hover:text-pink-100 transition-colors instagram-link">
                  @entrexcosturas
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Degradado inferior con efecto irregular y más sutil */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          width="100%"
          height="40"
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
          className="w-full"
        >
          <defs>
            <linearGradient id="fadeBottom" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="80%" stopColor="white" stopOpacity="0.3" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,40 L1200,40 L1200,25 C1150,20 1100,10 1050,15 C1000,20 950,30 900,25 C850,20 800,10 750,15 C700,20 650,30 600,25 C550,20 500,10 450,15 C400,20 350,30 300,25 C250,20 200,10 150,15 C100,20 50,30 0,25 L0,40 Z"
            fill="url(#fadeBottom)"
          />
        </svg>
      </div>
    </div>
  );
}
