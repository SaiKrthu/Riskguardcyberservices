import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import advisoryIcon from "../assets/GRMC.svg";
import consultingIcon from "../assets/B_D.svg";
import technologyIcon from "../assets/web_development.svg";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Service {
  title: string;
  description: string;
  image: string;
}

const categoryData = [
  {
    key: "Advisory",
    label: "Advisory",
    logo: advisoryIcon,
  },
  {
    key: "Consulting",
    label: "Consulting",
    logo: consultingIcon,
  },
  {
    key: "Technology",
    label: "Technology",
    logo: technologyIcon,
  },
];

const allServices: Service[] = [
  // Advisory
  {
    title: "Governance, Risk & Compliance (GRC)",
    description: "Managing risks, ensuring compliance, and developing policies for business security.",
    image: advisoryIcon,
  },
  {
    title: "Third Party Risk Management (TPRM)",
    description: "Assessing and managing risks from third-party vendors and partners.",
    image: advisoryIcon,
  },
  {
    title: "Advisory Service Offerings",
    description: "Comprehensive advisory services tailored to your business needs.",
    image: advisoryIcon,
  },

  // Consulting
  {
    title: "Vulnerability Assessment & Penetration Testing (VAPT)",
    description: "Identifying and addressing security vulnerabilities through expert testing.",
    image: consultingIcon,
  },
  {
    title: "Security Operations Centre (SOC)",
    description: "24/7 monitoring and response to security threats and incidents.",
    image: consultingIcon,
  },
  {
    title: "Identity and Access Management (IAM)",
    description: "Securing and managing digital identities and access rights.",
    image: consultingIcon,
  },
  {
    title: "Cloud Security",
    description: "Protecting cloud environments and data from evolving threats.",
    image: consultingIcon,
  },
  {
    title: "Data Security and Privacy",
    description: "Safeguarding sensitive data and ensuring privacy compliance.",
    image: consultingIcon,
  },
  {
    title: "Digital Forensics & Incident Response (DFIR)",
    description: "Investigating and responding to cyber incidents and breaches.",
    image: consultingIcon,
  },

  // Technology
  {
    title: "AI & Automation in Cybersecurity",
    description: "Leveraging AI and automation to enhance cybersecurity defenses.",
    image: technologyIcon,
  },
  {
    title: "Web Automation & Security Testing",
    description: "Automating web processes and testing for security vulnerabilities.",
    image: technologyIcon,
  },
  {
    title: "Security Platform Engineering",
    description: "Building and optimizing security platforms for robust protection.",
    image: technologyIcon,
  },
  {
    title: "Emerging Technology Services",
    description: "Adopting and securing the latest technology trends for your business.",
    image: technologyIcon,
  },
];

const categorizedServices: Record<string, Service[]> = {
  Advisory: allServices.filter((s) =>
    [
      "Governance, Risk & Compliance (GRC)",
      "Third Party Risk Management (TPRM)",
      "Advisory Service Offerings",
    ].includes(s.title)
  ),
  Consulting: allServices.filter((s) =>
    [
      "Vulnerability Assessment & Penetration Testing (VAPT)",
      "Security Operations Centre (SOC)",
      "Identity and Access Management (IAM)",
      "Cloud Security",
      "Data Security and Privacy",
      "Digital Forensics & Incident Response (DFIR)",
    ].includes(s.title)
  ),
  Technology: allServices.filter((s) =>
    [
      "AI & Automation in Cybersecurity",
      "Web Automation & Security Testing",
      "Security Platform Engineering",
      "Emerging Technology Services",
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B3A57] mb-4">
            Our Services
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-semibold text-gray-600 max-w-3xl mx-auto">
            We have 30+ years of experience for helping consulting services and business solutions.
          </p>
        </motion.div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mb-12">
          {categoryData.map(({ key, label, logo }) => {
            const services = categorizedServices[key];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ backgroundColor: "#1B3A57" }}
                className="bg-white rounded-2xl shadow p-6 flex flex-col items-center justify-between transition-colors duration-300 hover:text-white font-medium w-full min-h-[370px] relative overflow-visible"
              >
                {/* Logo and Title Block */}
                <div className="flex flex-col items-center justify-center text-center mb-2">
                  <img
                    src={logo}
                    alt={`${label} logo`}
                    className="w-20 h-20 object-contain mb-4"
                  />
                  <h3 className="text-xl font-semibold">{label}</h3>
                </div>

                {/* Expandable Service List */}
                <AnimatePresence>
                  {expanded === key && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 w-full z-20"
                    >
                      <ul className="space-y-3">
                        {services.map((service) => (
                          <li key={service.title} className="flex items-start gap-3 bg-[#f5f7fa] rounded-lg p-3 shadow-sm">
                            <img
                              src={service.image}
                              className="w-7 h-7 object-contain mt-1"
                              alt={service.title}
                            />
                            <div>
                              <div className="font-semibold text-[#1B3A57] text-base">{service.title}</div>
                              <div className="text-gray-600 text-sm leading-snug">{service.description}</div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Toggle Button */}
                <div className="mt-6 flex justify-center w-full">
                  <button
                    onClick={() => toggleExpand(key)}
                    className="inline-flex items-center gap-2 font-medium transition px-4 py-2 rounded-full border border-[#1B3A57] bg-white text-[#1B3A57] hover:bg-[#1B3A57] hover:text-white shadow"
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
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

