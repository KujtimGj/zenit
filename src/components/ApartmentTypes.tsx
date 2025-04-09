
import React, { useState } from "react";
import { ArrowUpRight, Home, Maximize, Check } from "lucide-react";

type ApartmentType = {
  id: string;
  name: string;
  size: string;
  rooms: string;
  image: string;
  floorPlan: string;
  description: string;
  features: string[];
};

const ApartmentTypes = () => {
  const apartments: ApartmentType[] = [
    {
      id: "standard",
      name: "Standard Apartment",
      size: "91.10m²",
      rooms: "3 rooms",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      floorPlan: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      description: "A functional apartment with intelligently organized spaces, suitable for comfortable and practical living.",
      features: [
        "Functional layout",
        "Natural lighting",
        "High-quality finishes",
        "Modern kitchen",
        "Energy-efficient design"
      ]
    },
    {
      id: "comfort",
      name: "Comfort Apartment",
      size: "113.80m²",
      rooms: "4 rooms",
      image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      floorPlan: "https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      description: "Offers more space for enhanced comfort, perfect for those seeking a more spacious and naturally lit environment.",
      features: [
        "Spacious living areas",
        "Multiple bathrooms",
        "Large balcony",
        "Walk-in closets",
        "Premium appliances",
        "Smart home features"
      ]
    },
    {
      id: "premium",
      name: "Premium Apartment",
      size: "128.27m²",
      rooms: "4 rooms",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      floorPlan: "https://images.unsplash.com/photo-1556702571-3e11dd2b1a92?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      description: "Exclusivity in every detail, featuring large spaces, natural light, and a design concept that offers unparalleled luxury and elegance.",
      features: [
        "Panoramic views",
        "Premium finishes",
        "Spacious master suite",
        "Designer kitchen",
        "Luxury bathroom fixtures",
        "Home automation system",
        "Private terrace"
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState<string>("standard");
  const [showFloorPlan, setShowFloorPlan] = useState<boolean>(false);
  
  const activeApartment = apartments.find(apt => apt.id === activeTab) || apartments[0];

  return (
    <section id="apartments" className="bg-bekatown-gray py-16 md:py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-widest text-bekatown-primary font-medium mb-2">
            Available Options
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Find Your Perfect Space
          </h3>
          <div className="w-16 h-1 bg-bekatown-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Explore our selection of thoughtfully designed apartments, each crafted to provide an exceptional living experience.
          </p>
        </div>

        {/* Apartment Type Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {apartments.map((apartment) => (
            <button
              key={apartment.id}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === apartment.id
                  ? "bg-bekatown-primary text-white shadow-md"
                  : "bg-white text-bekatown-text hover:bg-bekatown-light"
              }`}
              onClick={() => {
                setActiveTab(apartment.id);
                setShowFloorPlan(false);
              }}
            >
              {apartment.name}
            </button>
          ))}
        </div>

        {/* Apartment Details */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Image Section */}
            <div className="relative h-80 md:h-auto">
              <img
                src={showFloorPlan ? activeApartment.floorPlan : activeApartment.image}
                alt={`${activeApartment.name} ${showFloorPlan ? "Floor Plan" : "Interior"}`}
                className="w-full h-full object-cover"
              />
              
              {/* Toggle Buttons */}
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  className={`p-2 rounded ${!showFloorPlan ? "bg-bekatown-primary text-white" : "bg-white/80 text-bekatown-text"}`}
                  onClick={() => setShowFloorPlan(false)}
                >
                  <Home size={20} />
                </button>
                <button
                  className={`p-2 rounded ${showFloorPlan ? "bg-bekatown-primary text-white" : "bg-white/80 text-bekatown-text"}`}
                  onClick={() => setShowFloorPlan(true)}
                >
                  <Maximize size={20} />
                </button>
              </div>
              
              {/* Size and Rooms Badges */}
              <div className="absolute bottom-4 left-4 flex gap-2">
                <div className="bg-white py-1 px-3 rounded-full text-sm font-medium shadow-md">
                  {activeApartment.size}
                </div>
                <div className="bg-white py-1 px-3 rounded-full text-sm font-medium shadow-md">
                  {activeApartment.rooms}
                </div>
              </div>
            </div>
            
            {/* Details Section */}
            <div className="p-8">
              <h4 className="text-2xl font-bold mb-4">{activeApartment.name}</h4>
              <p className="text-gray-700 mb-6">{activeApartment.description}</p>
              
              <h5 className="text-lg font-semibold mb-4">Key Features:</h5>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {activeApartment.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={18} className="text-bekatown-primary flex-shrink-0 mt-0.5" />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="#contact"
                className="inline-flex items-center text-bekatown-primary hover:underline font-medium"
              >
                Request more information
                <ArrowUpRight size={18} className="ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary inline-block">
            Schedule a Visit
          </a>
        </div>
      </div>
    </section>
  );
};

export default ApartmentTypes;
