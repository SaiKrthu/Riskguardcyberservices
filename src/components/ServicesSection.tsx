import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cyberSecurity from "../assets/cyber_security.svg";
import businessConsulting from "../assets/B_D.svg";
import grmc from "../assets/GRMC.svg";
import skillDevelopment from "../assets/s_d.svg";
import webDevelopment from "../assets/web_development.svg";
import appDevelopment from "../assets/app.svg";
import itConsulting from "../assets/it_c.svg";
import techTraining from "../assets/tech_t.svg";
import academicSupport from "../assets/APS.svg";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Service {
  title: string;
  description: string;
  image: string;
}

const categoryData = [
  {
    key: "IT",
    label: "IT Services",
    logo: webDevelopment, // Customize per preference
  },
  {
    key: "CyberSecurity",
    label: "Cybersecurity Services",
    logo: cyberSecurity,
  },
  {
    key: "BusinessDevelopment",
    label: "Strategic Consulting",
    logo: businessConsulting,
  },
];

const allServices: Service[] = [
  {
    title: "Web Development",
    description:
      "Building responsive, custom websites with e-commerce, CMS, UI/UX, and optimization.",
    image: webDevelopment,
  },
  {
    title: "App Development",
    description:
      "Creating high-performance mobile and desktop apps with seamless UI/UX and maintenance.",
    image: appDevelopment,
  },
  {
    title: "IT Consulting",
    description:
      "Strategic technology guidance for transformation, infrastructure, cloud, and IT optimization.",
    image: itConsulting,
  },
  {
    title: "Technology Trainings",
    description:
      "Upskilling teams with hands-on workshops, certifications, and the latest tech updates.",
    image: techTraining,
  },
  {
    title: "Academic Projects Support",
    description:
      "Expert guidance in planning, implementation, documentation, and quality assurance.",
    image: academicSupport,
  },
  {
    title: "Cyber Security",
    description:
      "Protecting your business with 24/7 monitoring, threat detection, audits, and encryption.",
    image: cyberSecurity,
  },
  {
    title: "Governance Risk Management & Compliance",
    description:
      "Managing risks, ensuring compliance, and developing policies for business security.",
    image: grmc,
  },
  {
    title: "Business Consulting",
    description:
      "Expert guidance for strategy, growth, process optimization, and performance improvement.",
    image: businessConsulting,
  },
  {
    title: "Skill Development",
    description:
      "Empowering teams with training, leadership programs, workshops, and certifications.",
    image: skillDevelopment,
  },
];

const categorizedServices: Record<string, Service[]> = {
  IT: allServices.filter((s) =>
    [
      "Web Development",
      "App Development",
      "IT Consulting",
      "Technology Trainings",
      "Academic Projects Support",
    ].includes(s.title)
  ),
  CyberSecurity: allServices.filter((s) =>
    ["Cyber Security", "Governance Risk Management & Compliance"].includes(
      s.title
    )
  ),
  BusinessDevelopment: allServices.filter((s) =>
    [
      "Business Consulting",
      "Skill Development",
      "Technology Trainings",
    ].includes(s.title)
  ),
};

const ServicesSection: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleExpand = (category: string) => {
    setExpanded((prev) => (prev === category ? null : category));
  };

  return (
    <section className="min-h-screen bg-black-gray py-12 sm:py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-400 mb-4">
            Our Services
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-semibold text-gray-600 max-w-3xl mx-auto">
            We have 30+ years of experience for helping consulting services and business solutions.
          </p>
        </motion.div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-8 mb-12">
          {categoryData.map(({ key, label, logo }) => {
            const services = categorizedServices[key];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ backgroundColor: "#f97316" }}
                className="bg-white-400 rounded-2xl shadow p-4 flex flex-col items-center justify-center transition-colors duration-300 hover:text-white  font-medium w-full h-[310px] relative overflow-hidden"
              >
                {/* Logo and Title Block */}
                <motion.div
                  initial={false}
                  animate={expanded === key ? { y: -140 } : { y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex flex-col items-center justify-center text-center ${expanded === key ? "absolute top-4 left-0 right-0" : ""
                    }`}
                >
                  <img
                    src={logo}
                    alt={`${label} logo`}
                    className="w-20 h-20 object-contain mb-4 "
                  />
                  <h3 className="text-xl font-semibold">{label}</h3>
                </motion.div>

                {/* Expandable Service List */}
                <AnimatePresence>
                  {expanded === key && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-14 left-0 right-0 px-4"
                    >
                      {services.map((service) => (
                        <div
                          key={service.title}
                          className="flex gap-2 p-3 rounded-md items-center"
                        >
                          <img
                            src={service.image}
                            className="w-6 h-6 object-contain"
                            alt={service.title}
                          />
                          <div className="font-semibold text-white-600">
                            {service.title}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Toggle Button */}
                <button
                  onClick={() => toggleExpand(key)}
                  className="absolute bottom-4 inline-flex items-center gap-2 font-medium transition"
                >
                  {expanded === key ? (
                    <>
                      Hide Services <ChevronUp className="w-4 h-6" />
                    </>
                  ) : (
                    <>
                      View More <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
