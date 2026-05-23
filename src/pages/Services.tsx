import React, { useState } from 'react';
import { motion } from 'framer-motion';
//import * as Icons from 'lucide-react';
//import { ChevronDown, ChevronUp } from 'lucide-react';
//import type { LucideProps } from 'lucide-react';


const Services: React.FC = () => {
  // State to track which card is selected
  const [selected, setSelected] = useState<string | null>(null);

  // Handle card click
  const handleCardClick = (category: string) => {
    setSelected((prev) => (prev === category ? null : category));
  };

  // Categories with labels and logos
  const categories = [
    { key: 'Advisory', label: 'Advisory', logo: '/images/advisor.png' },
    { key: ' Consulting', label: ' Consulting', logo: '/images/consulting.png' },
    { key: 'Technology', label: 'Technology', logo: '/images/technology.png' },
  ];

  // List of services with category and icon reference
  const services = [
    // Advisory
    { id: 'ad-1', title: 'Governance, Risk & Compliance (GRC)', category: 'Advisory', icon: 'Lock' },
    { id: 'ad-2', title: 'Third Party Risk Management (TPRM)', category: 'Advisory', icon: 'ShieldCheck' },
    { id: 'ad-3', title: 'Advisory Service Offerings', category: 'Advisory', icon: 'BookOpen' },

    // Consulting
    { id: 'con-1', title: 'Vulnerability Assessment & Penetration Testing (VAPT)', category: ' Consulting', icon: 'Bug' },
    { id: 'con-2', title: 'Security Operations Centre (SOC)', category: ' Consulting', icon: 'Cpu' },
    { id: 'con-3', title: 'Identity and Access Management (IAM)', category: ' Consulting', icon: 'Key' },
    { id: 'con-4', title: 'Cloud Security', category: ' Consulting', icon: 'Cloud' },
    { id: 'con-5', title: 'Data Security and Privacy', category: ' Consulting', icon: 'Database' },
    { id: 'con-6', title: 'Digital Forensics & Incident Response (DFIR)', category: ' Consulting', icon: 'Search' },

    // Technology
    { id: 'tech-1', title: 'AI & Automation in Cybersecurity', category: 'Technology', icon: 'Bot' },
    { id: 'tech-2', title: 'Web Automation & Security Testing', category: 'Technology', icon: 'Globe' },
    { id: 'tech-3', title: 'Security Platform Engineering', category: 'Technology', icon: 'Settings' },
    { id: 'tech-4', title: 'Emerging Technology Services', category: 'Technology', icon: 'Lightbulb' },
  ];
  console.log(services);

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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B3A57] mb-4">Our Services</h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of services designed to help your business thrive in the digital era.
          </p>
        </motion.div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {categories.map(({ key, label, logo }) => {
            const isSelected = selected === key;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(27,58,87,0.18)' }}
                onClick={() => handleCardClick(key)}
                className={`cursor-pointer bg-gradient-to-br from-white to-[#f0f4fa] rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center transition-all duration-300 font-medium w-full min-h-[240px] border-2 ${isSelected ? 'border-[#1B3A57] scale-105' : 'border-transparent'} hover:border-[#1B3A57]`}
              >
                <img src={logo} alt={`${label} logo`} className="w-20 h-14 object-contain mb-2 mx-auto drop-shadow" />
                <h2 className="text-xl font-bold mb-2 text-[#1B3A57]">{label}</h2>
                <span className="text-sm text-gray-600">Click to Explore</span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detailed Content Section - Show only selected */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        {selected === 'Advisory' && (
          <div className="animate-fade-in-up bg-gradient-to-br from-[#f8fafc] to-[#e6ecf5] rounded-2xl shadow-lg p-8 mb-8 border-t-4 border-[#1B3A57]">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1B3A57] mb-4">Advisory</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-[#1B3A57] mb-2">1. Governance, Risk & Compliance (GRC)</h3>
                <div className="space-y-2">
                  <h4 className="font-semibold text-[#1B3A57]">Governance:</h4>
                  <p>Governance means the rules, policies, and processes used to manage an organization properly. It ensures proper decision making, accountability, ethical behavior, and achieving business goals.</p>
                  <div className="pl-4 text-gray-700">Example: A company creating rules for employee behavior and data security.</div>
                  <h4 className="font-semibold text-[#1B3A57] mt-2">Risk:</h4>
                  <p>Risk means identifying and managing possible problems or dangers that may affect the organization.</p>
                  <div className="pl-4 text-gray-700">Types of risks: Financial, Cybersecurity, Operational, Legal risk.<br/>Example: Protecting company data from hackers to avoid losses.</div>
                  <h4 className="font-semibold text-[#1B3A57] mt-2">Compliance:</h4>
                  <p>Compliance means following laws, government regulations, company policies, and industry standards.</p>
                  <div className="pl-4 text-gray-700">Example: A company following data privacy laws and tax regulations.</div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1B3A57] mb-2">2. Third Party Risk Management (TPRM)</h3>
                <p>Third Party Risk Management (TPRM) is the process of identifying, assessing, and managing risks associated with external vendors, suppliers, and business partners. It helps organizations protect their data, operations, and reputation by ensuring that third parties follow proper security, compliance, and risk management practices.</p>
                <div className="pl-4 text-gray-700">
                  <span className="font-semibold">Tools:</span> Security rating platforms (BitSight, SecurityScorecard), GRC tools (RSA Archer, ServiceNow GRC), Questionnaire tools (OneTrust)
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1B3A57] mb-2">3. Advisory Service Offerings</h3>
                <p>Advisory Service Offerings are professional consulting services provided to organizations to help them improve business performance, manage risks, ensure compliance, and make better strategic and operational decisions.</p>
                <div className="pl-4 text-gray-700">
                  <span className="font-semibold">Tools:</span> GRC platforms (RSA Archer, ServiceNow GRC), Risk assessment tools, Data analytics tools (Power BI, Tableau)
                </div>
              </div>
            </div>
          </div>
        )}
        {selected === ' Consulting' && (
          <div className="animate-fade-in-up bg-gradient-to-br from-[#f8fafc] to-[#e6ecf5] rounded-2xl shadow-lg p-8 mb-8 border-t-4 border-[#1B3A57]">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1B3A57] mb-4">Consulting</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-[#1B3A57] mb-2">1. Vulnerability Assessment & Penetration Testing (VAPT)</h3>
                <p>VAPT is a cybersecurity process used to identify, analyze, and test security weaknesses in systems, networks, or applications to protect them from cyber attacks and improve overall security.</p>
                <div className="pl-4 text-gray-700">
                  <span className="font-semibold">Tools:</span> Nmap, Nessus, Burp Suite, Metasploit, Wireshark
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1B3A57] mb-2">2. Security Operations Center (SOC)</h3>
                <p>SOC is a centralized team or facility that continuously monitors, detects, analyzes, and responds to cybersecurity threats and incidents to protect an organization’s systems, networks, and data.</p>
                <div className="pl-4 text-gray-700">
                  <span className="font-semibold">Tools:</span> SIEM tools (Splunk, IBM QRadar), SOAR tools (Palo Alto Cortex XSOAR), EDR tools (CrowdStrike, Microsoft Defender for Endpoint)
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1B3A57] mb-2">3. Identity and Access Management (IAM)</h3>
                <p>IAM is a cybersecurity system that controls and manages user identities and access to resources, ensuring only authorized users can access the right systems and data at the right time.</p>
                <div className="pl-4 text-gray-700">
                  <span className="font-semibold">Tools:</span> Microsoft Active Directory, Okta, Azure Active Directory
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1B3A57] mb-2">4. Cloud Security</h3>
                <p>Cloud Security is the process of protecting data, applications, and services stored in cloud environments from cyber threats. It ensures that only authorized users can access cloud resources. Security methods like encryption, firewalls, and access control are used to safeguard information. It also helps in monitoring and detecting security risks. Cloud security is important for maintaining privacy, safety, and compliance in cloud systems.</p>
                <div className="pl-4 text-gray-700">
                  <span className="font-semibold">Tools:</span> AWS Security Hub, Microsoft Defender for Cloud, Google Cloud Security Command Center
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1B3A57] mb-2">5. Data Security and Privacy</h3>
                <p>Data Security and Privacy is the practice of protecting sensitive data from unauthorized access, loss, or misuse while ensuring personal and organizational information is handled safely. It uses methods like encryption, access control, and backups to secure data. Privacy focuses on how data is collected, stored, and shared according to legal and ethical standards. Together, they help maintain confidentiality and trust.</p>
                <div className="pl-4 text-gray-700">
                  <span className="font-semibold">Tools:</span> Encryption tools (VeraCrypt, BitLocker), DLP tools (Symantec DLP, Forcepoint), IAM tools (Okta)
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1B3A57] mb-2">6. Digital Forensics & Incident Response (DFIR)</h3>
                <p>DFIR is the process of identifying, investigating, and responding to cyber security incidents. Digital forensics collects and analyzes digital evidence to find the cause of an attack. Incident response focuses on containing the threat and restoring normal systems quickly. It helps prevent future attacks and improves security.</p>
                <div className="pl-4 text-gray-700">
                  <span className="font-semibold">Tools:</span> EnCase, FTK (Forensic Toolkit), Autopsy
                </div>
              </div>
            </div>
          </div>
        )}
        {selected === 'Technology' && (
          <div className="animate-fade-in-up bg-gradient-to-br from-[#f8fafc] to-[#e6ecf5] rounded-2xl shadow-lg p-8 mb-8 border-t-4 border-[#1B3A57]">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1B3A57] mb-4">Technology</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-[#1B3A57] mb-2">1. AI & Automation in Cybersecurity</h3>
                <p>AI and Automation in Cybersecurity uses artificial intelligence and automated tools to detect, prevent, and respond to cyber threats quickly. AI analyzes large amounts of data to find unusual activities or attacks. Automation handles repetitive security tasks like alerts and incident response. This improves speed, accuracy, and reduces human effort. It helps strengthen overall system security.</p>
                <div className="pl-4 text-gray-700">
                  <span className="font-semibold">Tools:</span> Darktrace, IBM QRadar Advisor with Watson, Microsoft Defender for Endpoint
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1B3A57] mb-2">2. Web Automation & Security Testing</h3>
                <p>Web Automation Security Testing is the process of using automated tools and scripts to check web applications for security vulnerabilities. It helps identify issues like SQL injection, cross-site scripting (XSS), broken authentication, and insecure configurations without manual testing. This approach improves testing speed, accuracy, and coverage, ensuring that web applications are secure, reliable, and protected from cyber attacks.</p>
                <div className="pl-4 text-gray-700">
                  <span className="font-semibold">Tools:</span> Selenium, Burp Suite, OWASP ZAP
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1B3A57] mb-2">3. Security Platform Engineering</h3>
                <p>Security Platform Engineering is the process of designing and building secure systems and tools that help manage cybersecurity across an organization. It integrates security controls like monitoring, threat detection, and access management into a unified platform. It ensures consistent protection across cloud, applications, and networks. This improves efficiency and reduces security risks.</p>
                <div className="pl-4 text-gray-700">
                  <span className="font-semibold">Tools:</span> Palo Alto Prisma Cloud, Splunk, Elastic Stack (ELK)
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1B3A57] mb-2">4. Emerging Technology Services</h3>
                <p>Emerging Technology Services refer to the use of new technologies like AI, machine learning, blockchain, IoT, and automation to improve business processes. They help organizations innovate, increase efficiency, and solve complex problems. These services also enhance decision-making and security. They support digital transformation and future growth.</p>
                <div className="pl-4 text-gray-700">
                  <span className="font-semibold">Tools:</span> AI/ML tools (TensorFlow, PyTorch), Cloud platforms (AWS, Azure, Google Cloud), Blockchain tools (Hyperledger, Ethereum)
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Services;

