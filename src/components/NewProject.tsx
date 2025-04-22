import React from "react";
import { Award, CheckCircle, Clock } from "lucide-react";
import AImg from "../assets/ai_img.jpeg";

const NewProject = () => {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-bekatown-light rounded-full z-0"></div>
              <img
                src={AImg}
                alt="New Residential Building"
                className="w-full h-auto rounded-lg shadow-xl relative z-10"
              />
              <div className="absolute bottom-4 left-4 bg-white py-2 px-4 rounded shadow-md z-20">
                <div className="flex items-center">
                  <Clock size={16} className="text-bekatown-primary mr-2" />
                  <span className="text-sm font-medium">Perfundon në 2027</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <div>
              <h2 className="text-sm uppercase tracking-widest text-bekatown-primary font-medium mb-2">
                Prezentojmë
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Zenit 8 - Objektin e ri banesor
              </h3>
              <div className="w-16 h-1 bg-bekatown-primary mb-6"></div>
            </div>

            <p className="text-lg text-gray-700">
              Zenit Invest prezanton me krenari projektin e tij të 8-të
              rezidencial, duke kombinuar arkitekturën moderne me elegancën e
              përjetshme. Ky zhvillim premium ofron një përvojë të pashoqe
              jetese në zemër të Gjilanit.{" "}
            </p>

            <div className="space-y-4 py-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle size={20} className="text-bekatown-primary" />
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium">Materialet Premium</h4>
                  <p className="text-gray-600">
                    E ndërtuar me materiale cilësore që sigurojnë qëndrueshmëri
                    dhe tërheqje estetike.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle size={20} className="text-bekatown-primary" />
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium">Pozitë e mirë</h4>
                  <p className="text-gray-600">
                    Objekti ndodhet afër qendrës së qytetit të Gjilanit.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle size={20} className="text-bekatown-primary" />
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium">Afër qendrave tregtare</h4>
                  <p className="text-gray-600">
                    Afër Agmia dhe Albi Mall.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#apartments"
                className="btn-primary inline-flex items-center"
              >
                Shiko apartamentet
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewProject;
