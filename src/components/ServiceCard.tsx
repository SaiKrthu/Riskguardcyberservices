import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import { Service } from '../types';

// Props interface for the ServiceCard
interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  // Dynamically get the icon component from lucide-react using the icon name and cast to React component type
  const SomeIcon = LucideIcons[service.icon as keyof typeof LucideIcons] as React.ComponentType<LucideProps>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Animation starts slightly below and transparent
      animate={{ opacity: 1, y: 0 }}  // Animates into view
      transition={{ duration: 0.5 }}  // Smooth transition
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
    >
      {/* Title and Icon */}
      <div className="flex items-center mb-4">
        {SomeIcon && (
          <SomeIcon className="w-8 h-8 text-[#1B3A57] mr-3" />
        )}
        <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-4">{service.description}</p>

      {/* Key Points List */}
      <ul className="space-y-2 mb-6">
        {service.keyPoints.map((point, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <span className="w-2 h-2 bg-[#1B3A57] rounded-full mr-2" />
            {point}
          </li>
        ))}
      </ul>

      {/* Explore Button */}
      <Link
        to={`/services/${service.id}`}
        className="block w-full bg-[#1B3A57] text-white py-2 px-4 rounded-lg hover:bg-[#0C1A30] transition-colors text-center"
      >
        Explore Now
      </Link>
    </motion.div>
  );
};

