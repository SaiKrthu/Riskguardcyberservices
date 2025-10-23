import React from 'react';
import HeroSection from '../components/HeroSection';
import ServiceFlowSection from '../components/ServiceFlowSection';
import ServicesSection from '../components/ServicesSection';
import Partners from '../components/Partners';

const Home: React.FC = () => {
  return (
    // Container for entire home page content, min height 100vh
    <div className="min-h-screen">

      {/* Hero Section with Video Background */}
      <HeroSection />

      {/* Services Showcase Section */}
      {/* Background white with vertical padding */}
      <div className="py-16 bg-white">
        {/* Centers content and adds horizontal padding */}
        <div className="max-w-7xl mx-auto px-4">
          <ServicesSection />
        </div>
      </div>

      {/* Service Flow Section */}
      <ServiceFlowSection />

      {/* Partners Section */}
      <Partners />

      {/* Call to Action Section */}
      {/* Light background with vertical padding */}
      <section className="bg-[#FBF5E5] py-20">
        {/* Centered content with max width, padding */}
        <div className="max-w-4xl mx-auto text-center px-4">
          {/* Button styled link to contact page */}
          <a
            href="/contact"
            className="inline-block bg-white text-[#FA9405] font-bold py-4 px-8 rounded-full text-lg 
                       transition-transform hover:scale-105 hover:shadow-lg mb-8"
          >
            Get Started Today
          </a>
        </div>
      </section>

    </div>
  );
};

export default Home;
