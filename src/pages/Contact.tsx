import React, { useState } from 'react';
import { Phone, Pencil } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SuccessMessage from '../pages/SuccessMessage.tsx'; // Adjust path if needed

const Contact: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  // Submission status
  const [statusMessage, setStatusMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Dropdown options
  const services = [
    "Web Development",
   // "Mobile App Development",
    "Cyber Security",
    "Government Risk Management and compliance",
   // "Business Consulting",
    //"Skill Development",
   // "IT Consulting",
   // "Academic Project Support",
    //"Technological training"
    "Others Services"
  ];

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      'service_hsr6bdm', // EmailJS Service ID
      'template_ziy6jaq', // EmailJS Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message
      },
      '-rBRrQ6Xn_Hp05kiL' // EmailJS Public Key
    )
    .then(() => {
      setIsSuccess(true);
      setFormData({ name: '', phone: '', email: '', service: '', message: '' });
    })
    .catch(() => {
      setStatusMessage('Failed to send email. Try again.');
      setIsSuccess(false);
    });
  };

  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">CONTACT US</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          We are here to help and answer any questions you might have.
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left Image */}
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3"
              alt="Team meeting"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Form */}
          <div className="md:w-1/2 p-6 sm:p-8 bg-gradient-to-b from-[#1B3A57] to-[#A2DFF7]">
            {isSuccess ? (
              <SuccessMessage />
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField
                    label="FULL NAME*"
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(val) => setFormData({ ...formData, name: val })}
                  />
                  <InputField
                    label="PHONE NO*"
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(val) => setFormData({ ...formData, phone: val })}
                  />
                </div>

                {/* Email */}
                <InputField
                  label="EMAIL ADDRESS*"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(val) => setFormData({ ...formData, email: val })}
                />

                {/* Service Dropdown */}
                <div>
                  <label className="block text-white mb-2">SERVICE REQUIRED*</label>
                  <select
                    className="w-full p-2 rounded-md"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    required
                  >
                    <option value="" disabled>Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white mb-2">MESSAGE*</label>
                  <textarea
                    className="w-full p-2 rounded-md h-32"
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center md:justify-start">
                  <button
                    type="submit"
                    className="bg-white text-[#1B3A57] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                  >
                    SEND MESSAGE
                  </button>
                </div>

                {/* Error Message */}
                {statusMessage && <p className="text-white mt-4">{statusMessage}</p>}
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="mt-20">
        <h2 className="text-4xl font-bold text-center mb-12">Connect with our experts</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactCard
            icon={<Phone className="w-8 h-8" />}
            title="Talk to our team"
            content={<a href="tel:+917032737700" className="hover:underline">+91 - 7032737700</a>}
          />
          <ContactCard
            icon={<Pencil className="w-8 h-8" />}
            title="Submit your query"
            content={
              <>
                <a href="mailto:founder@rgesindia.com" className="block hover:underline">
                  founder@rgesindia.com
                </a>
                <a href="mailto:service@rgesindia.com" className="block hover:underline">
                  service@rgesindia.com
                </a>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

// 🔹 Reusable Input Field Component
interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, placeholder, value, onChange }) => (
  <div>
    <label className="block text-white mb-2">{label}</label>
    <input
      type={type}
      className="w-full p-2 rounded-md"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required
    />
  </div>
);

// 🔹 Reusable Contact Card Component
interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, content }) => (
  <div className="bg-gradient-to-b from-[#1B3A57] to-[#A2DFF7] rounded-2xl p-8 text-center text-white">
    <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <div className="space-y-2">{content}</div>
  </div>
);