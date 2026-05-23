import React from 'react';
import { Clock, LineChart, Monitor, Timer, UserCog, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <main className="bg-white">

      {/* About Us Section */}
      <section className="text-center py-16">
        <h1 className="text-3xl font-bold mb-4">ABOUT US</h1>
        <p className="text-gray-600">Welcome to RiskGuard Enterprise Solutions</p>
        <p className="text-gray-600">We Provide Trusted & Best Consulting Service for Your Business</p>
      </section>

      {/* Introduction Section with background image and text overlay */}
      <section className="relative h-[400px] mb-16">
        <img 
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
          alt="Team meeting"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <h2 className="text-3xl font-bold mb-6">A brief introduction what we do</h2>
          <p className="text-center max-w-3xl mb-8">
            We empower small and medium enterprises with sustainable strategies, focusing on efficiency and risk management. Our vision is to drive growth, sustainability, and scalability for our clients through continuous improvement, innovation, and operational excellence.
          </p>
        </div>
      </section>

      {/* Why are we here Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Why are we here ?</h2>
        <p className="text-center max-w-3xl mx-auto text-gray-600">
          We foster a culture of excellence through research, consulting, training, and customized interventions. By utilizing tested tools, assessments, and frameworks, we guarantee effective outcomes tailored to each process.
        </p>
      </section>

      {/* Our Vision Section with background image and text overlay */}
      <section className="relative h-[300px] mb-16">
        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
          alt="Business vision"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-center max-w-3xl">
            To drive growth, sustainability, and scalability for clients through efficient support and risk management.
          </p>
        </div>
      </section>

      {/* Why choose RiskGuard Section - icon features grid */}
      <section className="bg-black text-white py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What set us Apart
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-6xl mx-auto">
          {[
            { icon: Clock, label: 'Years Of Experience' },
            { icon: LineChart, label: 'Focus On Result' },
            { icon: Monitor, label: 'Customised Solutions' },
            { icon: Timer, label: '24x7 Access Available' },
            { icon: UserCog, label: 'Personalized Services' },
            { icon: Users, label: 'Collaborative Approach' },
          ].map(({ icon: Icon, label }, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="bg-white p-4 rounded-full mb-4">
                <Icon className="w-8 h-8 text-[#A2DFF7]" />
              </div>
              <p className="text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Core Values Section (Short Version) */}
      <section className="py-12 px-4 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <Clock className="w-8 h-8 text-[#1B3A57] mb-3" />
            <h3 className="font-semibold text-base mb-1">Integrity</h3>
            <p className="text-gray-600 text-sm">We act with honesty and fairness.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Users className="w-8 h-8 text-[#1B3A57] mb-3" />
            <h3 className="font-semibold text-base mb-1">Collaboration</h3>
            <p className="text-gray-600 text-sm">We believe in teamwork and partnership.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <LineChart className="w-8 h-8 text-[#1B3A57] mb-3" />
            <h3 className="font-semibold text-base mb-1">Excellence</h3>
            <p className="text-gray-600 text-sm">We strive for the highest standards in all we do.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

