import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Suita from "../assets/new_apartments/130m.jpeg";
import Presidenciale from "../assets/new_apartments/135m.jpeg"
import Eleganca from "../assets/new_apartments/93m.jpeg"
import Moderne from "../assets/new_apartments/88m.jpeg"
import Klasike from "../assets/new_apartments/87m.jpeg"
import Komode from "../assets/new_apartments/83m.jpeg"
import ImagePopup from "./image_popup";

type Apartment = {
  title: string;
  subtitle: string; 
  description: string;
  image: string;
};

const NewProject = () => {
  const apartments: Apartment[] = [
    {
      title: "Presidenciale",
      subtitle: "135.95m",
      description:"3 Dhoma Gjumi me Kuzhinë dhe Tryezari, 1 Paradhomë, Dhomë Dite, Banjo, WC, Depo, Terase.",
      image: Presidenciale,
    },
    {
      title: "Suite",
      subtitle: "130.75m",
      description:
        "3 Dhoma Gjumi me Kuzhinë dhe Tryezari, 1 Paradhomë, Dhomë Dite, Banjo, WC, Depo, Terase.",
      image: Suita,
    },
    {
      title: "Elegante",
      subtitle: "93.08m",
      description:
        "2 Dhoma Gjumi me Kuzhinë dhe Tryezari, 1 Paradhomë, Dhomë Dite, Banjo, WC, Depo, Terase.",
      image: Eleganca,
    },
    {
      title: "Moderne",
      subtitle: "88.97m",
      description:
        "2 Dhoma Gjumi me Kuzhinë dhe Tryezari, 1 Paradhomë, Dhomë Dite, Banjo, WC, Depo, Terase.",
      image: Moderne,
    },
    {
      title: "Klasike",
      subtitle: "87.76m",
      description:
        "2 Dhoma Gjumi me Kuzhinë dhe Tryezari, 1 Paradhomë, Dhomë Dite, Banjo, WC, Depo, Terase.",
      image: Klasike,
    },
    {
      title: "Komode",
      subtitle: "83.74m",
      description:
        "2 Dhoma Gjumi me Kuzhinë dhe Tryezari, 1 Paradhomë, Dhomë Dite, Banjo, WC, Depo, Terase.",
      image: Komode,
    },
    
  ];

  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    title: string;
  } | null>(null);
  
  const handleCardClick = (apartment: typeof apartments[0]) => {
    setSelectedImage({
      url: apartment.image,
      title: apartment.title
    });
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="upcoming-building" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Bëhu ndër të parët - Objekti 8
          </h2>
          <p className="font-lato text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mrekullia jonë e 8-të arkitekturore është në ndërtim e sipër, duke
            vendosur një standard të ri në luksin e banesave në qendër të
            Gjilanit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
        {apartments.map((apartment, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group hover:shadow-xl transition-all duration-300 animate-slide-in-left border-0 shadow-lg cursor-pointer"
              onClick={() => handleCardClick(apartment)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={apartment.image} 
                  alt={apartment.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full font-lato text-sm font-semibold">
                  {apartment.subtitle}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-3">
                  {apartment.title}
                </h3>
                <p className="font-lato text-gray-600 leading-relaxed">
                  {apartment.description}
                </p>
                <p className="font-lato mt-5 leading-relaxed" style={{color:'#ff5e1f'}}>
                  Paguaj shumen e plotë dhe fito 8% zbritje.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-lato font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            onClick={scrollToContact}
          >
            Na kontaktoni
          </Button>
        </div>
      </div>
      <ImagePopup
        isOpen={selectedImage !== null}
        imageUrl={selectedImage?.url || ""}
        title={selectedImage?.title || ""}
        onClose={closePopup}
      />
    </section>
  );
};

export default NewProject;
