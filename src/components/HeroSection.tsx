
import React from "react";
import { ArrowDownCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
          alt="Luxury apartment interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="section-container relative z-10 text-white">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Experience Modern Luxury Living
          </h1>
          <div className="w-20 h-1 bg-bekatown-primary mb-6"></div>
          <h2 className="text-2xl md:text-3xl mb-6 font-light">
            Quality. Comfort. Elegance.
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-lg">
            Discover our exclusive collection of premium residences designed for those who appreciate the finest things in life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#apartments" className="btn-primary inline-block text-center">
              Explore Apartments
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded text-white hover:bg-white/20 transition-all duration-300 inline-block text-center"
            >
              Schedule a Visit
            </a>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-10 animate-bounce">
        <a href="#about" className="flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity">
          <ArrowDownCircle size={36} />
          <span className="mt-2 text-sm font-light">Scroll Down</span>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
