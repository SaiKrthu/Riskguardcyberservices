import React from "react";
import { motion, AnimatePresence } from "framer-motion";


const AcademicPartners: React.FC = () => {
  const academicPartners = [
    { href: "https://woxsen.edu.in/", src: "images/woxenuniversity_logo.png", alt: "Woxsen University" },
    { href: "https://nagarjunauniversity.ac.in/", src: "images/Anu.png", alt: "ANU" },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-4xl font-bold uppercase text-[#1B3A57] mb-12"
        >
          Academic Partners
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          <AnimatePresence>
            {academicPartners.map((partner, index) => (
              <motion.a
                key={index}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                whileHover={{ scale: 1.08 }}
                className="inline-block"
              >
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="h-20 w-auto object-contain mx-auto"
                />
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AcademicPartners;