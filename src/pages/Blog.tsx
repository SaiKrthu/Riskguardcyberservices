import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BlogPost {
  title: string;
  subtitle: string;
  image: string;
  gallery: string[];
  date: string;
  description: string;
}

const Blog: React.FC = () => {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const blogPosts: BlogPost[] = [
    {
      title: "Meet at T-HUB",
      subtitle: "Collaborating for a Smarter Future",
      image: "/images/Thub1.png",
      gallery: ["/images/Thub1.png", "/images/Thub2.png", "/images/Thub3.png"],
      date: "March 2025",
      description: "Our team visited T-Hub for an insightful meeting..."
    },
    {
      title: "Celebrating New Beginnings",
      subtitle: "Inauguration of our new VTU office",
      image: "/images/pooja1.jpg",
      gallery: ["/images/pooja1.jpg", "/images/pooja.jpg"],
      date: "Jan 2024",
      description: "✨ We are thrilled to announce the inauguration..."
    },
    {
      title: "A memorable day at Kamal Basti",
      subtitle: "Exploring heritage, building bonds",
      image: "/images/kamal1.jpg",
      gallery: ["/images/kamal1.jpg", "/images/kamal2.jpg", "/images/kamal3.jpg", "/images/kamal4.jpg"],
      date: "Feb 2024",
      description: "An unforgettable team gathering at Kamal Basti..."
    },
    {
      title: "Hiring Talents from Hack-2-Intern",
      subtitle: "Discovering talent, shaping futures",
      image: "/images/hiring.png",
      gallery: ["/images/hiring.png", "/images/hiring2.png"],
      date: "Sep 2024",
      description: "An inspiring hiring drive at Hack-2-Intern..."
    }
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
    <div className="min-h-screen bg-[#FBF5E5] py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-16"
        >
          Watch Out Our Latest Blogs
        </motion.h1>

        {/* Timeline Container */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-[#FF6600]" />

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
                  <div className="bg-gradient-to-br from-[#FFF5E5] to-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 sm:h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-4 right-4 bg-[#FF6600] text-white px-4 py-1 rounded-full text-sm">
                        {post.date}
                      </div>
                    </div>
                    <div className="p-6 sm:p-8">
                      <h2 className="text-xl sm:text-2xl font-bold text-[#FF6600] mb-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-2 font-medium">{post.subtitle}</p>
                      <p className="text-gray-500 text-sm mb-4 line-clamp-3">{post.description}</p>
                      <button
                        onClick={() => {
                          setSelectedBlog(post);
                          setCurrentImageIndex(0);
                        }}
                        className="bg-[#FF6600] text-white px-6 py-2 rounded-full hover:bg-[#FF8533] transition-colors"
                      >
                        Read Full Blog
                      </button>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FF6600] rounded-full" />

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
                  className="absolute left-2 sm:left-0 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-orange-500 transition"
                >
                  ←
                </button>
                <button
                  onClick={nextImage}
                  type="button"
                  aria-label="Next Image"
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-orange-500 transition"
                >
                  →
                </button>
                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {selectedBlog.gallery.length}
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#FF6600] mb-3">{selectedBlog.title}</h2>
              <p className="text-gray-600 text-lg mb-2">{selectedBlog.subtitle}</p>
              <p className="text-gray-500 mb-6">{selectedBlog.date}</p>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{selectedBlog.description}</p>
              <button
                onClick={() => setSelectedBlog(null)}
                className="mt-8 bg-[#FF6600] text-white px-6 py-2 rounded-full hover:bg-[#FF8533] transition-colors"
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
