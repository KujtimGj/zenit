
import React, { useState } from "react";
import { Play } from "lucide-react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // This would be your actual video URL
  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0";
  
  // This is a placeholder thumbnail image
  const thumbnailUrl = "https://images.unsplash.com/photo-1537726235470-8504e3beef77?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80";

  return (
    <section id="gallery" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-widest text-bekatown-primary font-medium mb-2">
            Virtual Tour
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Experience Our Residences
          </h3>
          <div className="w-16 h-1 bg-bekatown-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Take a virtual tour of our luxurious apartments and on-site amenities. Get a feel for the exceptional quality and design.
          </p>
        </div>

        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
          {!isPlaying ? (
            <>
              <img
                src={thumbnailUrl}
                alt="Virtual Tour Thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-20 h-20 bg-bekatown-primary text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
                  aria-label="Play video"
                >
                  <Play size={32} fill="currentColor" />
                </button>
              </div>
            </>
          ) : (
            <iframe
              src={videoUrl}
              title="Bekatown Residence Virtual Tour"
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1560184897-502a475f7a0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1569597970488-82f800cf232b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
          ].map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
