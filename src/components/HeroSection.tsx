import React from "react";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  // Navigate to the services page when button is clicked
  const handleExploreClick = () => {
    navigate("/services");
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* 🔹 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/bgvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔹 Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

      {/* 🔹 Foreground Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-screen text-white px-4 sm:px-6 md:px-16 text-center">
        {/* Animated Title */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <TypeAnimation
            sequence={["RISK GUARD", 1000, "RISK GUARD"]}
            speed={1}
            repeat={Infinity}
            cursor={false}
          />
        </h1>

        {/* Decorative Divider */}
        <div className="w-16 sm:w-20 md:w-32 h-1 bg-white mb-8" />

        {/* Description */}
        <p className="text-sm sm:text-base md:text-2xl max-w-xs sm:max-w-xl md:max-w-3xl leading-relaxed px-2 sm:px-0 text-justify sm:text-center">
          Risk Guard is dedicated to innovation in technology and education, empowering future leaders with the skills, creativity, and strategic thinking needed to succeed in a fast-changing digital era.
        </p>

        {/* Call-to-Action Button */}
        <button
          onClick={handleExploreClick}
          className="mt-8 bg-[#1B3A57] hover:bg-[#0C1A30] text-lg font-semibold px-8 py-3 rounded-full transition-colors"
        >
          Explore All Services
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
