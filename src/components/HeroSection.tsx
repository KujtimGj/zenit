import React from "react";
import { ArrowDownCircle } from "lucide-react";
import Hero from "../assets/hero.jpg";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={Hero}
          alt="Luxury apartment interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="section-container relative z-10 text-white">
        <div className="max-w-5xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Përjetoni një jetë moderne luksoze
          </h1>
          <div className="w-20 h-1 bg-bekatown-primary mb-6"></div>
          <h2 className="text-2xl md:text-3xl mb-6 font-light">
            Cilësi. Komoditet. Elegancë. Investim që vlen.
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-lg">
            Zbuloni koleksionin tonë ekskluziv të apartamentev të krijuara për
            ata ju.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#apartments"
              className="btn-primary inline-block text-center"
            >
              Eksploroni Apartamente
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded text-white hover:bg-white/20 transition-all duration-300 inline-block text-center"
            >
              Rezervoni një vizitë
            </a>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-10 animate-bounce">
        <a
          href="#about"
          className="flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity"
        >
          <ArrowDownCircle size={36} />
          <span className="mt-2 text-sm font-light">Shko më poshtë</span>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
