import React from "react";
import { motion } from "framer-motion";

// Icons for each service step
import strategyIcon from "../assets/strategy.svg";
import designIcon from "../assets/design.svg";
import developIcon from "../assets/develop.svg";
import supportIcon from "../assets/support.svg";

const ServiceFlowSection: React.FC = () => {
  // Development process steps
  const services = [
    {
      number: "01",
      title: "Strategy",
      description:
        "We begin by thoroughly analyzing your business objectives and understanding end-user requirements. This helps us create a structured plan with low-fidelity wireframes, ensuring a clear roadmap for design and development.",
      icon: strategyIcon,
    },
    {
      number: "02",
      title: "Design",
      description:
        "Our team carefully crafts the visual and functional aspects of your product. We focus on creating an intuitive user experience with a well-structured interface, ensuring a seamless blend of aesthetics and usability.",
      icon: designIcon,
    },
    {
      number: "03",
      title: "Develop",
      description:
        "Using Agile methodology, we collaborate closely with stakeholders to refine and enhance the product. Continuous iterations allow us to build a robust, user-friendly platform that offers exceptional UI/UX functionality and performance.",
      icon: developIcon,
    },
    {
      number: "04",
      title: "Support",
      description:
        "We provide ongoing maintenance and technical support to keep your website or application running smoothly. Our team actively monitors performance, resolves bugs, and implements new features to ensure long-term success.",
      icon: supportIcon,
    },
  ];

  return (
    <section className="bg-[#FF6B3D] py-8 md:py-12 lg:py-16 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-3xl lg:text-4xl font-bold text-white uppercase text-center mb-12"
        >
          Our Development Process
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
                    <h3 className="text-2xl font-bold text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
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
                      className="w-12 h-12 rounded-full border-2 border-[#FF6B3D] p-2 flex-shrink-0"
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
                      className={`text-3xl lg:text-4xl font-bold text-white absolute top-1/2 -translate-y-1/2 whitespace-nowrap ${
                        isEven ? "md:left-20 lg:left-32" : "md:right-20 lg:right-32"
                      }`}
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
                        className="w-16 lg:w-20 h-16 lg:h-20 rounded-full border-2 border-[#FF6B3D] p-2 flex-shrink-0"
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