import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BlogPost {
  title: string;
  //subtitle: string;
  image: string;
  gallery: string[];
  description: string;
}

const Blog: React.FC = () => {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const blogPosts: BlogPost[] = [
    {
      title: "Environmental & Sustainability Trainings",
      //subtitle: "",
      image: "/images/est.png",
      gallery: ["/images/est.png"],
      description: "• ISO 14001:2015 EMS Internal Auditor • ISO 14001:2015 EMS Lead Auditor • ISO 14064 Greenhouse Gases - Lead Accountant • ISO 14064 Greenhouse Gases - Lead Verifier • ESG Management Development Program • Climate Adaptation & Cost of Inaction"           
    },
    {
      title: "Cybersecurity & AI Trainings",
      //subtitle: "Inauguration of our new VTU office",
      image: "/images/cyber.jpg",
      gallery: ["/images/cyber.jpg"],
      description: "• ISO 27001:2022 Foundational • ISO 27001:2022 Implementor • ISO 27001:2022 Internal Auditor • ISO 27001:2022 Lead Auditor • ISO 42001:2023 Foundational• ISO 42001:2023 Implementor • ISO 42001:2023 Internal Auditor • ISO 42001:2023 Lead Auditor • Cybersecurity Phishing Awareness Training • Diploma in Cybersecurity & Ethical Hacking Foundations"
    },
    {
      title: "Food Safety & Compliance Trainings",
      //subtitle: "Exploring heritage, building bonds",
      image: "/images/foodsafe.jpg",
      gallery: ["/images/foodsafe.jpg"],
      description: "• ISO 22000:2018 Foundational • ISO 22000:2018 Implementor • ISO 22000:2018 Internal Auditor • ISO 22000:2018 Lead Auditor • Diploma in HACCP Food Safety Standards • Industry Skill Qualification Framework"
    },
    {
      title: "Governance, Medical Devices & Workplace Programs",
      //subtitle: "Discovering talent, shaping futures",
      image: "/images/medical.jpg",
      gallery: ["/images/medical.jpg"],
      description: "• GDPR - EU Data Protection Foundation Course • Understanding and Implementing POSH in the Workplace • Information Security Risk Assessment • ISO 14971:2019 - Risk Management for Medical Devices"
    },
    {
      title: "Training Delivery Modes",
      //subtitle: "Discovering talent, shaping futures",
      image: "/images/training.jpg",
      gallery: ["/images/training.jpg"],
      description: "• Live Tutor-Led Online Sessions • Onsite Corporate Trainings • Self-Paced E-Learning Programs • Interactive LMS-Based Learning • Practical Workshops & Case Studies• Assessment & Certification Support"
    },
    {
      title: "Additional Support Services",
      //subtitle: "Discovering talent, shaping futures",
      image: "/images/as&s.jpg",
      gallery: ["/images/as&s.jpg"],
      description: "• Technical Experts & Trainers • Proposal & Quotation Support • Certification Coordination • Backend Operational Support • Learning Management System Access • Partner & Business Support Model"
    },
  ];

  const nextImage = () => {
    if (selectedBlog) {
      setCurrentImageIndex((prev) =>
        prev === selectedBlog.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedBlog) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedBlog.gallery.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-white py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-16"
        >
          Professional Training Programs 
        </motion.h1>

        {/* Timeline Container */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-[#1B3A57]" />

          {/* Blog Posts */}
          <div className="flex flex-col gap-24">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content Container */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-gradient-to-br from-[#FFFFFF] to-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 sm:h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-4 right-4 bg-[#1B3A57] text-white px-4 py-1 rounded-full text-sm">
                      </div>
                    </div>
                    <div className="p-6 sm:p-8">
                      <h2 className="text-xl sm:text-2xl font-bold text-[#1B3A57] mb-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-2 font-medium"></p>
                      <p className="text-gray-500 text-sm mb-4 line-clamp-3">{post.description}</p>
                      <button
                        onClick={() => {
                          setSelectedBlog(post);
                          setCurrentImageIndex(0);
                        }}
                        className="bg-[#1B3A57] text-white px-6 py-2 rounded-full hover:bg-[#0C1A30] transition-colors"
                      >
                        Read Full Blog
                      </button>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1B3A57] rounded-full" />

                {/* Empty Space for Alignment */}
                <div className="w-full md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Full Blog Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedBlog(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative mb-6 h-64 sm:h-96">
                <img
                  src={selectedBlog.gallery[currentImageIndex]}
                  alt={`${selectedBlog.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover rounded-2xl"
                />
                {/* Navigation Buttons with improved mobile usability */}
                <button
                  onClick={prevImage}
                  type="button"
                  aria-label="Previous Image"
                  className="absolute left-2 sm:left-0 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-[#1B3A57] transition"
                >
                  ←
                </button>
                <button
                  onClick={nextImage}
                  type="button"
                  aria-label="Next Image"
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-[#1B3A57] transition"
                >
                  →
                </button>
                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {selectedBlog.gallery.length}
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1B3A57] mb-3">{selectedBlog.title}</h2>
              <p className="text-gray-600 text-lg mb-2"></p>
              <p className="text-gray-500 mb-6"></p>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{selectedBlog.description}</p>
              <button
                onClick={() => setSelectedBlog(null)}
                className="mt-8 bg-[#1B3A57] text-white px-6 py-2 rounded-full hover:bg-[#0C1A30] transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blog;

