
import React from "react";
import { ArrowUp, Instagram, Facebook, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-bekatown-dark text-white">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo & About */}
          <div className="md:col-span-2">
            <a href="/" className="text-2xl font-playfair font-bold inline-block mb-4">
              <span className="text-bekatown-primary">Bekatown</span> Residence
            </a>
            <p className="text-gray-300 mb-6 max-w-md">
              Bekatown Residence & Spa Resort offers premium living spaces that combine modern design with timeless elegance. Experience luxury living in the heart of Gjilan.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-bekatown-primary hover:text-white p-2 rounded-full transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-bekatown-primary hover:text-white p-2 rounded-full transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-bekatown-primary hover:text-white p-2 rounded-full transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:info@bekatown.com"
                className="bg-white/10 hover:bg-bekatown-primary hover:text-white p-2 rounded-full transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-bekatown-primary transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#apartments" className="text-gray-300 hover:text-bekatown-primary transition-colors duration-300">
                  Apartments
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-bekatown-primary transition-colors duration-300">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#location" className="text-gray-300 hover:text-bekatown-primary transition-colors duration-300">
                  Location
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-bekatown-primary transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Contact */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Contact Us</h5>
            <ul className="space-y-3">
              <li className="text-gray-300">
                44 Lufta e Gjilanit, Gjilan 60000
              </li>
              <li>
                <a href="tel:+41798333614" className="text-gray-300 hover:text-bekatown-primary transition-colors duration-300">
                  +41 79 833 36 14
                </a>
              </li>
              <li>
                <a href="mailto:info@bekatown.com" className="text-gray-300 hover:text-bekatown-primary transition-colors duration-300">
                  info@bekatown.com
                </a>
              </li>
            </ul>
            
            <button
              onClick={scrollToTop}
              className="mt-6 inline-flex items-center text-gray-300 hover:text-bekatown-primary transition-colors duration-300"
            >
              Back to Top <ArrowUp size={16} className="ml-1" />
            </button>
          </div>
        </div>
        
        {/* Divider */}
        <hr className="border-white/10 my-8" />
        
        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Bekatown Residence & Spa Resort. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
