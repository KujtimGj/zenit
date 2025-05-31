import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 shadow-md backdrop-blur-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-3xl font-playfair font-bold">
              <span className="text-bekatown-primary">Zenit</span> <span style={{color:isScrolled?'black':'white'}}>Invest</span>
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#upcoming-building"
              className="hover:text-bekatown-primary transition-colors duration-300"
              style={{ color: isScrolled?'black' :"white" }}
            >
              Objekti i ri
            </a>
            <a
              href="#apartments"
              className="hover:text-bekatown-primary transition-colors duration-300"
              style={{ color: isScrolled?'black' :"white" }}  
            >
              Apartamentet
            </a>
            <a
              href="#gallery"
              className="hover:text-bekatown-primary transition-colors duration-300"
              style={{ color: isScrolled?'black' :"white" }}
            >
              Galeria
            </a>
            <a
              href="#location"
              className="hover:text-bekatown-primary transition-colors duration-300"
              style={{ color: isScrolled?'black' :"white" }}
            >
              Lokacioni
            </a>
            <a href="#contact" className="btn-primary">
              Kontakti
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-bekatown-text hover:text-bekatown-primary"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#about"
              className="block px-3 py-2 hover:bg-bekatown-light hover:text-bekatown-primary rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Rreth nesh
            </a>
            <a
              href="#apartments"
              className="block px-3 py-2 hover:bg-bekatown-light hover:text-bekatown-primary rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Apartamentet
            </a>
            <a
              href="#gallery"
              className="block px-3 py-2 hover:bg-bekatown-light hover:text-bekatown-primary rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Galeria
            </a>
            <a
              href="#location"
              className="block px-3 py-2 hover:bg-bekatown-light hover:text-bekatown-primary rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Lokacioni
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 bg-bekatown-primary text-white rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Kontakti
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
