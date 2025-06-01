import { X } from "lucide-react";
import { useState, useEffect } from "react";
import AnnouncementModal from "@/components/ui/modal";

const AnnouncementBar = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show modal on first visit
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleModalClose = () => {
    setShowModal(false);
  };


  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-primary text-white py-3 px-4 z-50">
      <div className="container mx-auto text-center">
          <p className="font-lato text-sm md:text-base font-medium">
            🎉 Ofertë Speciale: Fitoni 8% zbritje kur paguani çmimin e plotë në blerje!
          </p>
         
        </div>
      </div>
      
      <AnnouncementModal 
        isOpen={showModal}
        onClose={handleModalClose}
      />
    </>
  );
};

export default AnnouncementBar;
