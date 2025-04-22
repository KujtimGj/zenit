import React, { useState } from "react";
import { Play } from "lucide-react";
import ThumbnailImg from "../assets/thumbnail.jpeg";
import FirstImg from "../assets/gallery/z1.jpeg";
import SecondImg from "../assets/gallery/z2.jpeg";
import ThirdImg from "../assets/gallery/z3.jpeg";
import FourthImg from "../assets/gallery/z4.jpeg";
import img1 from "../assets/gallery/1.jpeg";
import img2 from "../assets/gallery/2.jpeg";
import img3 from "../assets/gallery/3.jpeg";
import img4 from "../assets/gallery/4.jpeg";
import img5 from "../assets/gallery/5.jpeg";
import img6 from "../assets/gallery/6.jpeg";
import img7 from "../assets/gallery/7.jpeg";
import img8 from "../assets/gallery/8.jpeg";
import img9 from "../assets/gallery/9.jpeg";
import img10 from "../assets/gallery/10.jpeg";
import img11 from "../assets/gallery/11.jpeg";
import img12 from "../assets/gallery/12.jpeg";
import img13 from "../assets/gallery/13.jpeg";
import img14 from "../assets/gallery/14.jpeg";
import img15 from "../assets/gallery/15.jpeg";
import img16 from "../assets/gallery/16.jpeg";
import img17 from "../assets/gallery/17.jpeg";
import img18 from "../assets/gallery/18.jpeg";
import img19 from "../assets/gallery/19.jpeg";
import img20 from "../assets/gallery/20.jpeg";
import img21 from "../assets/gallery/21.jpeg";
import img22 from "../assets/gallery/22.jpeg";
import img23 from "../assets/gallery/23.jpeg";
import img24 from "../assets/gallery/24.jpeg";


const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoUrl = "https://www.youtube.com/embed/-moU1Cjg0W0";

  const images = [FirstImg, SecondImg, ThirdImg, FourthImg,img1, img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23,img24];

  return (
    <section id="gallery" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-widest text-bekatown-primary font-medium mb-2">
            Video
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Përjetoni rezidencat tona
          </h3>
          <div className="w-16 h-1 bg-bekatown-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Bëni një turne virtual në apartamentet tona luksoze dhe në vend
            komoditetet. Merrni një ndjenjë për cilësinë dhe dizajnin e
            jashtëzakonshëm.
          </p>
        </div>

        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
          {!isPlaying ? (
            <>
              <img
                src={ThumbnailImg}
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
              title="ZenitInvest Residence Virtual Tour"
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {images.map((image, index) => (
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
