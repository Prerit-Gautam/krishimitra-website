import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage1 from "../assets/slide.jpg";
import heroImage2 from "../assets/slide2.jpg";
import heroImage3 from "../assets/slide3.jpg";
import appDemoVideo from "../assets/app_demo.webm";
import { Link } from "react-router-dom";

const heroImages = [heroImage1, heroImage2, heroImage3];

const HeroSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextImage = () => setCurrent((prev) => (prev + 1) % heroImages.length);
  const prevImage = () => setCurrent((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000); // Change slide every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <section id="home" className="relative min-h-[90vh] py-20 flex items-center overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={heroImages[current]}
          alt="Hero background"
          className="w-full h-full object-cover transition-all duration-700"
        />
        {/* Overlay for darkening the image for text readability */}
        <div className="absolute inset-0 bg-[#196F3D]/70 md:bg-gradient-to-r md:from-[#196F3D]/90 md:to-[#196F3D]/40" />
        {/* Left Arrow */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white hover:text-[#196F3D] text-white backdrop-blur-sm rounded-full p-2 shadow-md transition pointer-events-auto"
          aria-label="Previous image"
          style={{ marginRight: '12px' }}
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
        {/* Right Arrow */}
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white hover:text-[#196F3D] text-white backdrop-blur-sm rounded-full p-2 shadow-md transition pointer-events-auto"
          aria-label="Next image"
          style={{ marginLeft: '12px' }}
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-12 pt-8 md:pt-0">
        {/* Text Content */}
        <div className="flex-1 text-left md:pr-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            Empowering Smallholder Farmers in Developing Nations
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white opacity-95 drop-shadow-md max-w-2xl font-medium">
            KrishiMitra is an AI-powered digital platform providing personalized agricultural insights, market information, and weather updates to smallholder farmers in South Asia.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <Button asChild size="lg" variant="secondary" className="font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <a href="#features" className="flex items-center">
                Explore Features
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white bg-white/10 hover:bg-white hover:text-[#196F3D] font-semibold backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <Link to="/contact" className="flex items-center">
                Join Our Mission
                <Users className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="flex-1 flex justify-center md:justify-end w-full max-w-sm md:max-w-none mx-auto mt-12 md:mt-0">
          <div className="relative w-[280px] sm:w-[300px] h-[580px] sm:h-[620px] bg-black rounded-[3rem] border-[12px] border-black shadow-2xl overflow-hidden ring-4 ring-white/30 transform md:-rotate-[4deg] hover:rotate-0 transition-transform duration-500 ease-out z-20">
            {/* Phone Notch */}
            <div className="absolute top-0 inset-x-0 h-7 bg-black rounded-b-3xl w-40 mx-auto z-30 flex justify-center items-center">
              <div className="w-16 h-1.5 bg-zinc-800 rounded-full mt-1"></div>
            </div>
            
            {/* Video Content */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover rounded-[2rem] bg-zinc-900 absolute inset-0 z-10"
            >
              <source src={appDemoVideo} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
