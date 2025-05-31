import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    apartmentType: "standard",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const userMessage = `Përshëndetje Zenit Invest,%0A%0AJam%20i%20interesuar%20për%20këtë%20apartament.%20Ju%20lutem%20më%20kontaktoni%20me%20informacione%20më%20të%20hollësishme.%0A%0ADërguar%20nga%3A%0A%0AEmri%3A%20${encodeURIComponent(
      formData.get("name") as string
    )}%0AEmail%3A%20${encodeURIComponent(
      formData.get("email") as string
    )}%0ATelefon%3A%20${encodeURIComponent(
      formData.get("phone") as string
    )}%0ALloji%20i%20Apartamentit%3A%20${encodeURIComponent(
      formData.get("apartmentType") as string
    )}%0AMesazh%3A%20${encodeURIComponent(formData.get("message") as string)}`;

    const phoneNumber = "41798333614";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${userMessage}`;
    window.location.href = whatsappURL;

    try {
      const res = await fetch("https://formspree.io/f/mvgklreb", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Form submission failed");
      }

      const result = await res.json();
      console.log(result);

      setFormData({
        name: "",
        email: "",
        phone: "",
        apartmentType: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false); // Reset the submitting state regardless of the result
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block mb-1 font-medium">
          Emri i plotë *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-bekatown-primary/50"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            Emaili *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-bekatown-primary/50"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block mb-1 font-medium">
            Numri i telefonit
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-bekatown-primary/50"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="apartmentType" className="block mb-1 font-medium">
          I interesuar për
        </label>
        <select
          id="apartmentType"
          name="apartmentType"
          value={formData.apartmentType}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-bekatown-primary/50"
        >
          <optgroup label="Objekti i ri - 8">
          <option value="presidencial">Presidencial (135.75m²)</option>
            <option value="suita">Suita (135.95m²)</option>
            <option value="eleganca">Eleganca (93.08m²)</option>
            <option value="moderne">Moderne (88.97.08m²)</option>
            <option value="klasike">Klasike (87.76m²)</option>
            <option value="klasike">Komode (83.74m²)</option>
          </optgroup>
          <optgroup label="Objekti 7">
            <option value="standard">Apartament Standard (91.10m²)</option>
            <option value="comfort">Apartament Komfort (113.80m²)</option>
            <option value="premium">Apartament Premium (128.27m²)</option>
          </optgroup>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block mb-1 font-medium">
          Mesazhi
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-bekatown-primary/50"
          placeholder="Na tregoni për kërkesat tuaja ose bëni pyetje..."
          required
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Duke procesuar
          </>
        ) : (
          "Dergo mesazhin"
        )}
      </button>
    </form>
  );
};

export default ContactForm;
