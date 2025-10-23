import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { LucideProps } from 'lucide-react';


const Services: React.FC = () => {
  // State to track which category is expanded, null means none expanded
  const [expanded, setExpanded] = useState<string | null>(null);

  // Toggle expanded state for category on button click
  const toggleExpand = (category: string) => {
    setExpanded((prev) => (prev === category ? null : category));
  };

  // Categories with labels and logos
  const categories = [
    { key: 'IT', label: 'IT Services', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWj9SNVjnw1ADO2QU_F_UCpYBf4WQVkJBehQ&s' },
    { key: 'CyberSecurity', label: 'Cybersecurity Services', logo: 'https://cdn-icons-png.flaticon.com/512/1049/1049873.png' },
    { key: 'BusinessDevelopment', label: 'Strategic Consulting', logo: 'https://cdn-icons-png.flaticon.com/512/4149/4149640.png' },
  ];

  // List of services with category and icon reference
  const services = [
    { id: 'it-1', title: 'Web Development', category: 'IT', icon: 'Globe' },
    { id: 'it-2', title: 'App Development', category: 'IT', icon: 'Smartphone' },
    { id: 'it-3', title: 'IT Consulting', category: 'IT', icon: 'Briefcase' },
    { id: 'it-4', title: 'Technical Trainings', category: 'IT', icon: 'GraduationCap' },
    { id: 'it-5', title: 'Academic Projects Support', category: 'IT', icon: 'BookOpen' },
    { id: 'cyber-1', title: 'Cybersecurity', category: 'CyberSecurity', icon: 'ShieldCheck' },
    { id: 'cyber-2', title: 'Governance, Risk & Compliance', category: 'CyberSecurity', icon: 'Lock' },
    { id: 'biz-1', title: 'Business Consulting', category: 'BusinessDevelopment', icon: 'Handshake' },
    { id: 'biz-2', title: 'Skill Development', category: 'BusinessDevelopment', icon: 'BarChart' },
    { id: 'biz-3', title: 'Technology Trainings', category: 'BusinessDevelopment', icon: 'Cpu' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-400 mb-4">Our Services</h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of services designed to help your business thrive in the digital age.
          </p>
        </motion.div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {categories.map(({ key, label, logo }) => {
            // Filter services for the current category
            const categoryServices = services.filter((s) => s.category === key);
            const isExpanded = expanded === key; // Check if this category is expanded

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{
                  backgroundColor: isExpanded ? '#f97316' : undefined,
                  color: isExpanded ? 'white' : undefined,
                }}
                className={`bg-white rounded-2xl shadow p-4 flex flex-col relative transition-colors duration-300 font-medium w-full max-w-[320px] min-h-[240px] ${
                  isExpanded ? 'bg-orange-500 text-white' : ''
                }`}
              >
                {/* Logo and Label shown only when not expanded */}
                <AnimatePresence>
                  {!isExpanded && (
                    <motion.div
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-center justify-center text-center w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10"
                    >
                      <img src={logo} alt={`${label} logo`} className="w-20 h-14 object-contain mb-2 mx-auto" />
                      <h2 className="text-lg font-semibold">{label}</h2>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Services list shown only when expanded */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                      className="mt-8 mb-4 space-y-3 px-2 w-full z-20"
                    >
                      {categoryServices.map((service) => {
                        // Get icon component from lucide-react dynamically
                        const Icon = Icons[service.icon as keyof typeof Icons] as React.ComponentType<LucideProps>;

                        return (
                          <div key={service.id} className="flex items-center gap-2 text-sm rounded-lg px-3 py-2">
                            <Icon
                              className={`w-6 h-6 transition-colors duration-300 ${
                                isExpanded ? 'text-white' : 'text-black hover:text-orange-500'
                              }`}
                            />
                            <span className="font-semibold text-base">{service.title}</span>
                          </div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Toggle expand/collapse button */}
                <div className="mt-auto pt-4">
                  <button
                    onClick={() => toggleExpand(key)}
                    className={`inline-flex items-center gap-2 font-medium transition-colors ${
                      isExpanded ? 'text-black-500 hover:text-orange-600' : 'text-orange-500 hover:text-orange-600'
                    } z-30 relative`}
                  >
                    {isExpanded ? (
                      <>
                        Hide Services <ChevronUp className="w-4 h-4 text-black" />
                      </>
                    ) : (
                      <>
                        View More <ChevronDown className="w-4 h-4 text-black" />
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
