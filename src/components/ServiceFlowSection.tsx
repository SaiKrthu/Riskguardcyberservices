import React from "react";
import { motion } from "framer-motion";

// Icons for each service step
import strategyIcon from "../assets/strategy.svg";
import designIcon from "../assets/design.svg";
import developIcon from "../assets/develop.svg";
import supportIcon from "../assets/support.svg";
import GRMCIcon from "../assets/GRMC.svg";
import itcIcon from "../assets/it_c.svg";

const ServiceFlowSection: React.FC = () => {
  // Development process steps
  const services = [
    {
      number: "01",
      title: "Certified Experts",
      description:
        "Team of CISSP, CEH, OSCP, CISA, AWS Security Specialty, and GIAC certified professionals.",
      icon: strategyIcon,
    },
    {
      number: "02",
      title: "Proven Methodology",
      description:
        "Structured, repeatable frameworks based on NIST, MITRE ATT&CK, OWASP, and ISO 27001.",
      icon: designIcon,
    },
    {
      number: "03",
      title: "Industry Coverage",
      description:
        "Deep expertise in BFSI, Healthcare, Manufacturing, Government, Retail, and Technology sectors.",
      icon: developIcon,
    },
    {
      number: "04",
      title: "End-to-End Coverage",
      description:
        "From strategy and advisory to hands-on technical testing and 24x7 managed security services.",
      icon: GRMCIcon,
    },
    {
      number: "05",
      title: "Compliance Ready",
      description:
        "Aligned to global and regional regulations — GDPR, HIPAA, PCI-DSS, CERT-In, RBI, SEBI.",
      icon: itcIcon,
    },
    {
      number: "06",
      title: "AI-First Approach",
      description:
        "Leverage AI and automation to deliver faster detection, smarter analysis, and scalable operations.",
      icon: supportIcon,
    },
  ];

  return (
    <section className="bg-[#1B3A57] py-8 md:py-12 lg:py-16 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-3xl lg:text-4xl font-bold text-white uppercase text-center mb-12"
        >
          WHY CHOOSE RISK GUARD 
        </motion.h2>

        {/* Service Steps */}
        <div className="space-y-16">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative w-full"
              >
                {/* Mobile Layout */}
                <div className="block md:hidden text-center">
                  <div className="relative mb-4">
                    <span className="text-6xl font-extrabold text-black opacity-20">
                      {service.number}
                    </span>
                    <h3 className="text-2xl font-bold text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full whitespace-nowrap">
                      {service.title}
                    </h3>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center bg-white rounded-xl p-6 shadow-lg"
                  >
                    <motion.img
                      src={service.icon}
                      alt={service.title}
                      className="w-12 h-12 rounded-full border-2 border-[#1B3A57] p-2 flex-shrink-0"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 1 }}
                    />
                    <p className="text-gray-700 text-[15px] leading-relaxed text-left ml-4 flex-1">
                      {service.description}
                    </p>
                  </motion.div>
                </div>

                {/* Tablet & Desktop Layout */}
                <div
                  className={`hidden md:flex ${isEven ? "flex-row" : "flex-row-reverse"} items-center justify-between max-w-6xl mx-auto`}
                >
                  {/* Number & Title */}
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative w-1/3 flex justify-center md:justify-start"
                  >
                    <span className="text-[120px] lg:text-[160px] font-extrabold text-black opacity-20">
                      {service.number}
                    </span>
                    <h3
                      className="text-3xl lg:text-4xl font-bold text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full whitespace-nowrap text-center"
                    >
                      {service.title}
                    </h3>
                  </motion.div>

                  {/* Description Card */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className={`w-2/3 mt-6 md:mt-0 ${isEven ? "md:pl-16" : "md:pr-16"}`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center bg-white rounded-xl p-8 shadow-lg"
                    >
                      <motion.img
                        src={service.icon}
                        alt={service.title}
                        className="w-16 lg:w-20 h-16 lg:h-20 rounded-full border-2 border-[#1B3A57] p-2 flex-shrink-0"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 1 }}
                      />
                      <p className="text-gray-700 text-justify leading-relaxed max-w-2xl flex-1 text-base ml-6">
                        {service.description}
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceFlowSection;
