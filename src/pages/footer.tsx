import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import type { IconType } from "react-icons";


// Logos
import msme_logo from "../assets/msme_logo.png";
import dpiit1_logo from "../assets/DPIIT1_logo.png";
import microsoft_startup_logo from "../assets/microsoft_startup_logo.jpg";
import iso_logo from "../assets/iso_logo.jpg";

// Reusable social icon link

const SocialLink = ({ href, label, Icon }: { href: string; label: string; Icon: IconType }) => (
  <a href={href} className="text-white hover:text-yellow-300 transition" aria-label={label}>
    <Icon size={16} />
  </a>
);


// Reusable contact info row
const ContactRow = ({ href, text }: { href: string; text: string }) => (
  <div className="flex items-center justify-center md:justify-end gap-2 mb-1">
    {href.startsWith("tel") ? <FaPhoneAlt size={14} /> : <FaEnvelope size={14} />}
    <a href={href} className="text-sm hover:text-yellow-300 transition break-all font-medium">
      {text}
    </a>
  </div>
);

const Footer: React.FC = () => {
  const address = (
    <>
      101, Metro Avenue, Plot No. 28 & 29,<br />
      Calvary Temple Rd, IDPl Employees Colony,<br />
      Hafeezpet, Hyderabad, Telangana 500049
    </>
  );

  const socialLinks = [
    { href: "https://www.facebook.com/RGESIndia", label: "Facebook", Icon: FaFacebookF },
    { href: "https://x.com/RGESIndia", label: "Twitter", Icon: FaTwitter },
    { href: "https://www.instagram.com/rges.india?igsh=MTAzNnRxNmJ1amVjNQ==", label: "Instagram", Icon: FaInstagram },
    { href: "https://www.linkedin.com/company/rgesindia/posts/?feedView=all", label: "LinkedIn", Icon: FaLinkedinIn },
  ];

  const contactDetails = [
    { href: "tel:7032737700", text: "+91 7032737700" },
    { href: "mailto:founder@rgesindia.com", text: "founder@rgesindia.com" },
    { href: "mailto:service@rgesindia.com", text: "service@rgesindia.com" },
  ];

  return (
    <div className="relative w-full">
      <footer className="bg-[#EE4B2B] text-white pt-4 pb-2 sm:pt-6 sm:pb-3">
        {/* Decorative top line */}
        <div className="absolute top-0 left-0 w-full h-[8px] bg-[#EE4B2B]" />

        <div className="relative z-1 w-[90%] mx-auto flex flex-col gap-3 mt-1">
          {/* Mobile View */}
          <div className="flex flex-col md:hidden">
            {/* Logos */}
            <div className="flex overflow-x-auto justify-center items-center gap-3 px-2">
              {[msme_logo, iso_logo, dpiit1_logo, microsoft_startup_logo].map((logo, i) => (
                <img key={i} src={logo} alt={`Logo ${i}`} className="h-8 sm:h-10" />
              ))}
            </div>

            {/* Title, Address, Social Icons */}
            <div className="text-center mt-3">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="text-base sm:text-xl font-bold mb-2"
              >
                RGESIndia
              </motion.h2>

              <p className="text-xs mb-2 px-4">{address}</p>

              <div className="flex justify-center gap-3 mb-2">
                {socialLinks.map((link, i) => (
                  <SocialLink key={i} {...link} />
                ))}
              </div>

              <p className="text-sm font-medium mt-1">
                &copy; 2025 RGESIndia. All rights reserved.
              </p>

              {/* Contact Info */}
              <div className="mt-3 space-y-1">
                {contactDetails.map((contact, i) => (
                  <ContactRow key={i} {...contact} />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden md:grid grid-cols-3 gap-4">
            {/* Left: Logos */}
            <div className="flex flex-col gap-6">
              <div className="flex gap-6">
                <img src={msme_logo} alt="MSME" className="h-14" />
                <img src={iso_logo} alt="ISO" className="h-14" />
              </div>
              <div className="flex gap-5">
                <img src={dpiit1_logo} alt="Startup India" className="h-12" />
                <img src={microsoft_startup_logo} alt="Microsoft for Startups" className="h-12" />
              </div>
            </div>

            {/* Center: Title, Address, Social Icons */}
            <div className="flex flex-col items-center text-center">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="text-xl font-bold mb-2"
              >
                RGESIndia
              </motion.h2>

              <p className="text-sm mb-2">{address}</p>

              <div className="flex justify-center gap-3 mb-2">
                {socialLinks.map((link, i) => (
                  <SocialLink key={i} {...link} />
                ))}
              </div>

              <p className="text-sm font-medium mt-1">
                &copy; 2025 RGESIndia. All rights reserved.
              </p>
            </div>

            {/* Right: Contact Info */}
            <div className="flex flex-col items-end text-right">
              <h3 className="text-base font-bold mb-2">Contact Us</h3>
              {contactDetails.map((contact, i) => (
                <ContactRow key={i} {...contact} />
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;