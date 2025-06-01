import React from "react";
import { ArrowDownCircle } from "lucide-react";
import Hero from "../assets/new_building_2.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToUpcoming = () => {
    document.getElementById('upcoming-building')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
  
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-img"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Hero})`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 animate-fade-in">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-4 tracking-wide">
            Zenit Invest
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        {/* Main Headlines */}
        <h2 className="font-playfair text-4xl md:text-6xl font-semibold mb-6 leading-tight">
          Në ndërtim: Objekti i 8-të<br />
          <span className="text-primary">E ardhmja e jetesës</span>
        </h2>
        
        <p className="font-lato text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Mrekullia jonë e 8-të arkitekturore, luksozë në ndërtim e sipër, në zemër të Gjilanit.
        </p>
        
        <Button 
          onClick={scrollToUpcoming}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white font-lato font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Zbulo me shumë
        </Button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
