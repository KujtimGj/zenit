
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NewProject from "@/components/NewProject";
import ApartmentTypes from "@/components/ApartmentTypes";
import VideoSection from "@/components/VideoSection";
import LocationContact from "@/components/LocationContact";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/ui/announcement";
const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Zenit Invest - Residence & Spa Resort";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <AnnouncementBar />   
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <NewProject />
        <ApartmentTypes />
        <VideoSection />
        <LocationContact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
