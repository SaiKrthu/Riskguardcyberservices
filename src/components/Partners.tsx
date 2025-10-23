import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Partners: React.FC = () => {
  // List of partner logos with links
  const partners = [
    { href: "https://tezolutions.com/", src: "images/Picture1.png", alt: "Tezolutions" },
    { href: "https://beyondrisx.com/", src: "images/Picture2.png", alt: "BeyondRisk" },
    { href: "https://a4conserv.com/", src: "images/Picture3.png", alt: "A4Conserv" },
    { href: "https://www.accuknox.com/", src: "images/accuknox1_logo.png", alt: "AccuKnox" },
    { href: "https://threatcop.com/", src: "images/Picture5.png", alt: "Threatcop" },
    { href: "https://www.finalyse.com/", src: "images/Picture6.png", alt: "Finalize" },
    { href: "https://sparkfuse.in/lander", src: "images/Picture7.png", alt: "Sparkfuse" },
    { href: "https://www.riskhawk.net/", src: "images/Picture8.png", alt: "Dynamix" },
    { href: "https://www.techiebears.com/", src: "images/Picture9.png", alt: "Techie Bears" },
    { href: "https://centle.in/about/", src: "images/Picture10.png", alt: "Centle India" },
    { href: "https://www.thinkmate.com/", src: "images/Picture11.jpg", alt: "Think Mate" },
    { href: "https://www.vanta.com/", src: "images/Picture12.jpeg", alt: "Sakthi" },
    { href: "https://www.linkedin.com/company/techvritti/posts/?feedView=all", src: "images/Picture13.jpg", alt: "TechVritti" },
    { href: "https://www.lendbox.in/", src: "images/Picture14.png", alt: "LendBox" },
    { href: "https://timelycare.com/", src: "images/Picture15.png", alt: "Timely Health" },
    { href: "https://hubbcast.com/", src: "images/Picture16.png", alt: "Hubbcast" },
    { href: "https://www.cloudnowtech.com/", src: "images/cloudnow_logo.png", alt: "Cloudnow" },
    { href: "https://www.controlcase.com/", src: "images/controlcase_logo.png", alt: "Controlcase" },
    { href: "https://paralok.com/", src: "images/paralok_logo.png", alt: "Paralok" },
    { href: "https://rpost.com/", src: "images/rpost_logo.png", alt: "Rpost" },
    { href: "https://sequretek.com/", src: "images/sequretek_logo.jpg", alt: "Sequretek" },
    { href: "https://woxsen.edu.in/", src: "images/woxenuniversity_logo.png", alt: "Woxen University" },
    { href: "https://www.riskpro.in/", src: "images/riskpro_logo.png", alt: "Risk Pro" },
    { href: "#", src: "images/threatcop_logo.png", alt: "ThreatCop" },
    { href: "https://www.cybercube.co/", src: "images/cybercube_logo.png", alt: "CyberCube" },
    { href: "https://phosaico.com/", src: "images/phosai_comapny_logo.png", alt: "PHOSAI" },
  ];

  return (
    <section className="w-full bg-[#FBF5E5] py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Section Title with animation */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-4xl font-bold uppercase text-[#FF6600] mb-12"
        >
          Our Partners
        </motion.h2>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4 sm:gap-2">
          <AnimatePresence>
            {partners.map((partner, index) => (
              <motion.a
                key={index}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{
                  rotate: index % 2 === 0 ? 360 : -360,
                  scale: 1.1,
                  transition: { duration: 0.4, ease: "easeInOut" },
                }}
                className="flex items-center justify-center mx-auto transition-transform duration-300"
              >
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="max-w-[60px] sm:max-w-[70px] md:max-w-[80px] object-contain"
                  onError={(e) => {
                    console.error(`Failed to load image: ${partner.src}`);
                    e.currentTarget.style.opacity = "0.5";
                  }}
                />
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Partners;