import React from "react";
import { motion, AnimatePresence } from "framer-motion";


const CommunityPartners: React.FC = () => {
  const communityPartners = [
    { href: " https://www.futuregpt.in/", src: "public/images/Futuregpt.png", alt: "Futuregpt" },
    { href: "https://www.linkedin.com/showcase/cyberslay/", src: "public/images/Cyberslay.png", alt: "Cyberslay" },
    { href: " https://www.ibsea.in/", src: "public/images/IBSEA.png", alt: "IBSEA" },
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
          Community Partners
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          <AnimatePresence>
            {communityPartners.map((partner, index) => (
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

export default CommunityPartners;