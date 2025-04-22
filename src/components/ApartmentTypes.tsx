import React, { useState } from "react";
import { ArrowUpRight, Home, Maximize, Check } from "lucide-react";
import StandardApartment from "../assets/apartments/standard2.jpeg";
import PremiumApartment from "../assets/apartments/premium.jpeg";
import ComfortApartment from "../assets/apartments/comfort.jpeg";


type ApartmentType = {
  id: string;
  name: string;
  size: string;
  rooms: string;
  image: string;
  description: string;
  features: string[];
};

const ApartmentTypes = () => {
  const apartments: ApartmentType[] = [
    {
      id: "standard",
      name: "Standard",
      size: "92m²",
      rooms: "3 dhoma",
      image: StandardApartment,
      description:
        "Apartament funksional me ambjente te organizuara ne menyre inteligjente, i pershtatshem per jetese komode dhe praktike.",
      features: ["3 dhoma", "3 banjo", "1 balkon", "Izolim Termik"],
    },
    {
      id: "comfort",
      name: "Komfort",
      size: "113.80m²",
      rooms: "4 dhoma",
      image: ComfortApartment,
      description:
        "Ofron më shumë hapësirë ​​për rehati të shtuar, perfekt për ata që kërkojnë një mjedis më të gjerë dhe të ndriçuar natyralisht.",
      features: ["4 dhoma", "3 banjo", "1 balkon", "Izolim termik"],
    },
    {
      id: "premium",
      name: "Premium",
      size: "128.27m²",
      rooms: "4 dhoma",
      image: PremiumApartment,
      description:
        "Ekskluziviteti në çdo detaj, me hapësira të mëdha, dritë natyrale dhe një koncept dizajni që ofron luks dhe elegancë të pashoqe.",
      features: ["4 dhoma të mëdha", "3 banjo", "1 balkon", "Izolim termik"],
    },
  ];

  const [activeTab, setActiveTab] = useState<string>("standard");
  const [showFloorPlan, setShowFloorPlan] = useState<boolean>(false);

  const activeApartment =
    apartments.find((apt) => apt.id === activeTab) || apartments[0];

  return (
    <section id="apartments" className="bg-bekatown-gray py-16 md:py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-widest text-bekatown-primary font-medium mb-2">
            Zbulo më shumë
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Llojët e apartamenteve
          </h3>
          <div className="w-16 h-1 bg-bekatown-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Eksploroni përzgjedhjen tonë të apartamenteve të dizajnuara me
            kujdes, secili i krijuar për të ofruar një përvojë të
            jashtëzakonshme jetese.{" "}
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
                src={activeApartment.image}
                alt={`${activeApartment.name} ${
                  showFloorPlan ? "Floor Plan" : "Interior"
                }`}
                className="w-full h-full object-cover"
              />

              {/* Toggle Buttons */}
              <div className="absolute top-4 right-4 flex gap-2">
                {/* <button
                  className={`p-2 rounded ${
                    !showFloorPlan
                      ? "bg-bekatown-primary text-white"
                      : "bg-white/80 text-bekatown-text"
                  }`}
                  onClick={() => setShowFloorPlan(false)}
                >
                  <Home size={20} />
                </button> */}
                {/* <button
                  className={`p-2 rounded ${
                    showFloorPlan
                      ? "bg-bekatown-primary text-white"
                      : "bg-white/80 text-bekatown-text"
                  }`}
                  onClick={() => setShowFloorPlan(true)}
                >
                  <Maximize size={20} />
                </button> */}
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
              <h4 className="text-2xl font-bold mb-4">
                {activeApartment.name}
              </h4>
              <p className="text-gray-700 mb-6">
                {activeApartment.description}
              </p>

              <h5 className="text-lg font-semibold mb-4">Veçoritë kryesore:</h5>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {activeApartment.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check
                      size={18}
                      className="text-bekatown-primary flex-shrink-0 mt-0.5"
                    />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center text-bekatown-primary hover:underline font-medium"
              >
                Kërko më shumë informacion
                <ArrowUpRight size={18} className="ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary inline-block">
            Rezervo nje vizitë
          </a>
        </div>
      </div>
    </section>
  );
};

export default ApartmentTypes;
