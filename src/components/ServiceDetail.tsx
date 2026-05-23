import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { serviceDetails } from '../data/services';
import { Mail, ArrowLeft } from 'lucide-react';

export const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const service = id ? serviceDetails[id] : null;

  // If service not found, show fallback
  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Service not found</h2>
          <button
            onClick={() => navigate('/services')}
            className="text-[#1B3A57] hover:text-[#0C1A30] inline-flex items-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Navigation */}
        <Link
          to="/services"
          className="inline-flex items-center text-[#1B3A57] hover:text-[#0C1A30] mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Services
        </Link>

        {/* 🔹 Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-12"
        >
          <div className="relative h-64">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-center">
              <div className="px-8">
                <h1 className="text-4xl font-bold text-white mb-4">{service.title}</h1>
                <p className="text-xl text-gray-200 max-w-2xl">{service.description}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 🔹 Offerings Section */}
        <Section title="What we're offering" delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.offerings.map((offering, index) => (
              <AnimatedCard key={index} delay={0.1 * index}>
                <h3 className="font-semibold text-gray-900 mb-2">{offering.title}</h3>
                <p className="text-gray-600 text-sm">{offering.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </Section>

        {/* 🔹 Strengths Section */}
        <Section title="Our Strengths" delay={0.4}>
          <div className="bg-white rounded-lg shadow-md p-6">
            <ul className="space-y-4">
              {service.strengths.map((strength, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-start"
                >
                  <span className="w-2 h-2 bg-[#1B3A57] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">{strength}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </Section>

        {/* 🔹 Process Section */}
        <Section title="How it Works" delay={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.process.map((step, index) => (
              <AnimatedCard key={index} delay={0.1 * index}>
                <div className="flex items-center mb-4">
                  <span className="w-8 h-8 bg-[#1B3A57] rounded-full text-white flex items-center justify-center font-semibold mr-3">
                    {index + 1}
                  </span>
                  <h3 className="font-semibold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </Section>

        {/* 🔹 Contact CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-gradient-to-r from-[#1B3A57] to-[#0C1A30] rounded-xl p-8 text-white"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 text-white">
              Contact our team to learn more about our {service.title.toLowerCase()} services
              and how we can help your business grow.
            </p>
            <Link
              to="/contact"
              className="bg-white text-[#1B3A57] px-8 py-3 rounded-lg font-semibold hover:bg-[#F0F9FF] transition-colors inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Us Now
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

// 🔹 Reusable Section Wrapper with Animation
const Section: React.FC<{ title: string; delay: number; children: React.ReactNode }> = ({
  title,
  delay,
  children,
}) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="mb-12"
  >
    <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
    {children}
  </motion.section>
);

// 🔹 Reusable Animated Card
const AnimatedCard: React.FC<{ delay: number; children: React.ReactNode }> = ({
  delay,
  children,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-white p-6 rounded-lg shadow-md"
  >
    {children}
  </motion.div>
);
