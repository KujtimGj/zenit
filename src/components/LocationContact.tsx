
import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import ContactForm from "./ContactForm";

const LocationContact = () => {
  return (
    <section id="location" className="bg-bekatown-gray py-16 md:py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-widest text-bekatown-primary font-medium mb-2">
            Find Us
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Location & Contact
          </h3>
          <div className="w-16 h-1 bg-bekatown-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Ideally located in the heart of Gjilan, our residences offer the perfect balance of urban convenience and residential tranquility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Map and Contact Info */}
          <div className="space-y-8">
            {/* Map */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.862817434484!2d21.4635!3d42.4601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDA0JzMzLjYiTiAyMcKwMjcnNDguNiJF!5e0!3m2!1sen!2s!4v1618329082722!5m2!1sen!2s"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Location Map"
                className="w-full"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h4 className="text-xl font-bold mb-6">Contact Information</h4>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-bekatown-light p-3 rounded-full text-bekatown-primary">
                    <MapPin size={20} />
                  </div>
                  <div className="ml-4">
                    <h5 className="font-medium">Address</h5>
                    <p className="text-gray-700">44 Lufta e Gjilanit, Gjilan 60000</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-bekatown-light p-3 rounded-full text-bekatown-primary">
                    <Phone size={20} />
                  </div>
                  <div className="ml-4">
                    <h5 className="font-medium">Phone</h5>
                    <p className="text-gray-700">+41 79 833 36 14</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-bekatown-light p-3 rounded-full text-bekatown-primary">
                    <Mail size={20} />
                  </div>
                  <div className="ml-4">
                    <h5 className="font-medium">Email</h5>
                    <p className="text-gray-700">info@bekatown.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-3">Sales Office Hours</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <h5 className="font-medium">Monday - Friday</h5>
                    <p className="text-gray-700">9:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <h5 className="font-medium">Saturday</h5>
                    <p className="text-gray-700">10:00 AM - 4:00 PM</p>
                  </div>
                  <div className="col-span-2">
                    <h5 className="font-medium">Sunday</h5>
                    <p className="text-gray-700">Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div id="contact" className="bg-white rounded-xl shadow-lg p-8">
            <h4 className="text-xl font-bold mb-6">Interested? Contact Us</h4>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationContact;
