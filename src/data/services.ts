import { Service, ServiceDetail } from '../types';


export const services: Service[] = [
  {
    id: 'cyber-security',
    title: 'Cyber Security',
    description: 'Comprehensive digital protection for your business assets',
    icon: 'Shield',
    keyPoints: [
      '24/7 Network Monitoring',
      'Threat Detection & Response',
      'Security Audits',
      'Data Encryption',
      'Employee Security Training'
    ]
  },
  {
    id: 'business-consulting',
    title: 'Business Consulting',
    description: 'Strategic guidance to optimize your business operations',
    icon: 'Briefcase',
    keyPoints: [
      'Business Strategy Development',
      'Process Optimization',
      'Market Analysis',
      'Growth Planning',
      'Performance Metrics'
    ]
  },
  {
    id: 'governance-risk',
    title: 'Governance, Risk & Compliance',
    description: 'Ensure regulatory compliance and risk management',
    icon: 'FileCheck',
    keyPoints: [
      'Regulatory Compliance',
      'Risk Assessment',
      'Policy Development',
      'Audit Management',
      'Compliance Training'
    ]
  },
  {
    id: 'Skill Development',
    title: 'Skill Development',
    description: 'Enhance your teams capabilities and expertise ',
    icon: 'Code',
    keyPoints: [
      'Technical Training',
      'Soft Skills Development',
      'Leadership Programs',
      'Customized Workshops',
      'Certification Preparation'
    ]
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Create powerful and responsive web solutions',
    icon: 'Code',
    keyPoints: [
      'Custom Website Development',
      'E-commerce Solutions',
      'CMS Integration',
      'UI/UX Design',
      'Performance Optimization'
    ]
  },
  {
    id: 'app-development',
    title: 'App Development',
    description: 'Build innovative mobile and desktop applications',
    icon: 'Smartphone',
    keyPoints: [
      'Native App Development',
      'Cross-platform Solutions',
      'App Maintenance',
      'UI/UX Design',
      'Performance Optimization'
    ]
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting',
    description: 'Expert guidance for your technology decisions',
    icon: 'Server',
    keyPoints: [
      'Technology Assessment',
      'Digital Transformation',
      'IT Strategy',
      'Infrastructure Planning',
      'Cloud Solutions'
    ]
  },
  {
    id: 'technology-training',
    title: 'Technology Training',
    description: 'Lead with cutting-edge tech education',
    icon: 'GraduationCap',
    keyPoints: [
      'Custom Training Programs',
      'Hands-on Workshops',
      'Latest Technology Updates',
      'Certification Programs',
      'Team Training'
    ]
  },
  {
    id: 'academic-project-support',
    title: 'Academic Project Support',
    description: 'Guidance and support for academic excellence',
    icon: 'FileCheck',
    keyPoints: [
      'Project Planning',
      'Technical Guidance',
      'Documentation Support',
      'Implementation Help',
      'Quality Assurance'
    ]
  }

];

export const serviceDetails: Record<string, ServiceDetail> = {
  'cyber-security': {
    id: 'cyber-security',
    title: 'Cyber Security Solutions',
    description: 'Comprehensive digital protection for your business assets',
    fullDescription: 'Our cyber security solutions provide comprehensive protection for your digital assets, ensuring your business stays secure in an increasingly complex threat landscape.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    offerings: [
      {
        title: 'Network Security',
        description: '24/7 monitoring and protection of your network infrastructure'
      },
      {
        title: 'Data Protection',
        description: 'Advanced encryption and secure data handling protocols'
      },
      {
        title: 'Threat Detection',
        description: 'Real-time threat monitoring and rapid response systems'
      },
      {
        title: 'Security Training',
        description: 'Comprehensive security awareness training for employees'
      }
    ],
    strengths: [
      'Industry-leading threat detection with 99.9% accuracy',
      'Dedicated team of certified security experts',
      'Customized security solutions for your specific needs',
      'Proactive monitoring and threat prevention',
      'Regular security assessments and updates'
    ],
    process: [
      {
        title: 'Security Assessment',
        description: 'Comprehensive analysis of your current security posture'
      },
      {
        title: 'Strategy Development',
        description: 'Custom security plan tailored to your business needs'
      },
      {
        title: 'Implementation',
        description: 'Deployment of security measures and monitoring systems'
      }
    ]
  },
  'business-consulting': {
    id: 'business-consulting',
    title: 'Business Consulting Services',
    description: 'Strategic guidance to optimize your business operations',
    fullDescription: 'Our business consulting services help organizations improve their performance through analysis of existing business problems and development of future plans. We work with companies to identify challenges, opportunities and solutions for improved efficiency and growth.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    offerings: [
      {
        title: 'Strategic Planning',
        description: 'Develop comprehensive business strategies aligned with your goals'
      },
      {
        title: 'Process Optimization',
        description: 'Streamline operations and improve organizational efficiency'
      },
      {
        title: 'Market Analysis',
        description: 'In-depth market research and competitive analysis'
      },
      {
        title: 'Performance Management',
        description: 'Implement effective metrics and monitoring systems'
      }
    ],
    strengths: [
      'Experienced team of business consultants',
      'Proven track record of successful implementations',
      'Customized solutions for each client',
      'Data-driven approach to problem-solving',
      'Comprehensive industry knowledge'
    ],
    process: [
      {
        title: 'Initial Assessment',
        description: 'Thorough analysis of current business operations'
      },
      {
        title: 'Strategy Formulation',
        description: 'Development of tailored business solutions'
      },
      {
        title: 'Implementation Support',
        description: 'Guidance and assistance during execution phase'
      }
    ]
  },
  'governance-risk': {
    id: 'governance-risk',
    title: 'Governance, Risk & Compliance Services',
    description: 'Ensure regulatory compliance and risk management',
    fullDescription: 'Our GRC services help organizations navigate complex regulatory requirements while managing risk effectively. We provide comprehensive solutions to ensure your business operates within regulatory frameworks while maintaining operational efficiency.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    offerings: [
      {
        title: 'Regulatory Compliance',
        description: 'Ensure adherence to industry regulations and standards'
      },
      {
        title: 'Risk Management',
        description: 'Identify, assess, and mitigate business risks'
      },
      {
        title: 'Policy Development',
        description: 'Create and implement effective governance policies'
      },
      {
        title: 'Audit Support',
        description: 'Comprehensive assistance for internal and external audits'
      }
    ],
    strengths: [
      'Deep regulatory compliance expertise',
      'Risk-based approach to governance',
      'Comprehensive compliance frameworks',
      'Regular updates on regulatory changes',
      'Integrated GRC solutions'
    ],
    process: [
      {
        title: 'Compliance Assessment',
        description: 'Evaluation of current compliance status'
      },
      {
        title: 'Risk Analysis',
        description: 'Comprehensive risk assessment and planning'
      },
      {
        title: 'Program Implementation',
        description: 'Deployment of GRC frameworks and controls'
      }
    ]
  },
  'skill-development': {
    id: 'skill-development',
    title: 'Skill Development & Training Services',
    description: 'Enhance your team’s capabilities and expertise',
    fullDescription: 'Our skill development programs empower individuals and organizations with the knowledge and tools needed to excel in today’s competitive landscape. We offer tailored training solutions covering technical skills, leadership, and professional growth to drive performance and innovation.',
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900df?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    offerings: [
      {
        title: 'Technical Training',
        description: 'Hands-on training in the latest industry technologies'
      },
      {
        title: 'Soft Skills Development',
        description: 'Enhance communication, teamwork, and problem-solving abilities'
      },
      {
        title: 'Leadership Programs',
        description: 'Develop strong leadership and decision-making skills'
      },
      {
        title: 'Customized Workshops',
        description: 'Tailored training sessions to meet specific business needs'
      },
      {
        title: 'Certification Preparation',
        description: 'Comprehensive courses to help achieve industry-recognized certifications'
      }
    ],
    strengths: [
      'Expert-led training sessions',
      'Customized learning paths',
      'Blended learning approach (online & in-person)',
      'Industry-relevant curriculum',
      'Hands-on practical experience'
    ],
    process: [
      {
        title: 'Training Needs Assessment',
        description: 'Identify skill gaps and learning objectives'
      },
      {
        title: 'Program Design & Customization',
        description: 'Develop tailored training modules based on requirements'
      },
      {
        title: 'Interactive Learning & Evaluation',
        description: 'Engage participants with hands-on training and performance assessments'
      }
    ]
  },
  'web-development': {
    id: 'web-development',
    title: 'Web Development Solutions',
    description: 'Create powerful and responsive web solutions',
    fullDescription: 'Our web development team creates cutting-edge websites and web applications that deliver exceptional user experiences. We combine technical expertise with creative design to build solutions that drive business growth.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    offerings: [
      {
        title: 'Custom Website Development',
        description: 'Tailored websites built to your specific requirements'
      },
      {
        title: 'E-commerce Solutions',
        description: 'Robust online shopping platforms and payment systems'
      },
      {
        title: 'CMS Development',
        description: 'Custom content management system solutions'
      },
      {
        title: 'Web Application Development',
        description: 'Complex web applications for business needs'
      }
    ],
    strengths: [
      'Modern technology stack expertise',
      'Responsive design implementation',
      'Performance-optimized solutions',
      'Secure development practices',
      'Scalable architecture design'
    ],
    process: [
      {
        title: 'Requirements Analysis',
        description: 'Detailed assessment of project needs'
      },
      {
        title: 'Design Phase',
        description: 'Creation of user-friendly interfaces'
      },
      {
        title: 'Development',
        description: 'Agile development and testing process'
      }
    ]
  },
  'app-development': {
    id: 'app-development',
    title: 'App Development Services',
    description: 'Build innovative mobile and desktop applications',
    fullDescription: 'Our app development team specializes in creating high-performance mobile and desktop applications that provide seamless user experiences. We focus on delivering innovative solutions that meet modern business needs.',
    image: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    offerings: [
      {
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile applications'
      },
      {
        title: 'Desktop Applications',
        description: 'Custom desktop software solutions'
      },
      {
        title: 'App Maintenance',
        description: 'Ongoing support and updates for applications'
      },
      {
        title: 'App Integration',
        description: 'Seamless integration with existing systems'
      }
    ],
    strengths: [
      'Cross-platform development expertise',
      'User-centered design approach',
      'Advanced technical capabilities',
      'Robust testing procedures',
      'Ongoing support and maintenance'
    ],
    process: [
      {
        title: 'Discovery Phase',
        description: 'Understanding requirements and planning'
      },
      {
        title: 'Design & Development',
        description: 'Creating and building the application'
      },
      {
        title: 'Testing & Deployment',
        description: 'Quality assurance and launch support'
      }
    ]
  },
  'it-consulting': {
    id: 'it-consulting',
    title: 'IT Consulting Services',
    description: 'Expert guidance for your technology decisions',
    fullDescription: 'Our IT consulting services provide expert guidance to help businesses make informed technology decisions. From infrastructure planning to cloud solutions, we ensure your IT strategy aligns with your business goals.',
    image: 'https://images.unsplash.com/photo-1531497865144-0464ef8fb9c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    offerings: [
      { title: 'Technology Assessment', description: 'Evaluate your current IT infrastructure and needs' },
      { title: 'Digital Transformation', description: 'Strategic guidance for modernizing business operations' },
      { title: 'IT Strategy', description: 'Developing a roadmap for your technology goals' },
      { title: 'Infrastructure Planning', description: 'Optimized IT infrastructure for scalability' },
      { title: 'Cloud Solutions', description: 'Secure and efficient cloud adoption strategies' }
    ],
    strengths: [
      'Experienced IT consultants',
      'Tailored technology strategies',
      'Industry best practices',
      'Proven success in digital transformation',
      'Innovative cloud and infrastructure solutions'
    ],
    process: [
      { title: 'Assessment', description: 'Analyze current IT landscape' },
      { title: 'Strategy Development', description: 'Plan and align IT solutions with business goals' },
      { title: 'Implementation', description: 'Deploy and optimize IT infrastructure' }
    ]
  },
  'technology-training': {
    id: 'technology-training',
    title: 'Technology Training',
    description: 'Stay ahead with cutting-edge technology education',
    fullDescription: 'Our technology training programs help individuals and teams stay updated with the latest advancements in technology. From hands-on workshops to certification programs, we equip professionals with the skills needed for success.',
    image: 'https://images.unsplash.com/photo-1573495612522-14a8dc1e8860?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    offerings: [
      { title: 'Custom Training Programs', description: 'Tailored training sessions based on business needs' },
      { title: 'Hands-on Workshops', description: 'Practical learning experiences with real-world projects' },
      { title: 'Latest Technology Updates', description: 'Stay informed about emerging technologies' },
      { title: 'Certification Programs', description: 'Industry-recognized certification courses' },
      { title: 'Team Training', description: 'Upskilling programs for teams and organizations' }
    ],
    strengths: [
      'Expert trainers with industry experience',
      'Practical, hands-on learning approach',
      'Flexible training formats (online & in-person)',
      'Comprehensive curriculum covering emerging tech',
      'High success rate in certification exams'
    ],
    process: [
      { title: 'Assessment', description: 'Identify skill gaps and training needs' },
      { title: 'Curriculum Development', description: 'Design tailored training programs' },
      { title: 'Delivery & Evaluation', description: 'Conduct training sessions and assess learning outcomes' }
    ]
  },
  'academic-project-support': {
    id: 'academic-project-support',
    title: 'Academic Project Support',
    description: 'Guidance and support for academic excellence',
    fullDescription: 'Our academic project support services provide students with the guidance and resources needed to successfully complete their projects. From planning to implementation, we ensure quality and clarity in academic work.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    offerings: [
      { title: 'Project Planning', description: 'Guidance in selecting and structuring academic projects' },
      { title: 'Technical Guidance', description: 'Expert advice on project development and execution' },
      { title: 'Documentation Support', description: 'Assistance with research papers, reports, and presentations' },
      { title: 'Implementation Help', description: 'Support in coding, simulations, and prototype building' },
      { title: 'Quality Assurance', description: 'Review and feedback to enhance project quality' }
    ],
    strengths: [
      'Expert mentorship from industry professionals',
      'Comprehensive support from ideation to execution',
      'Resources for both technical and theoretical projects',
      'Ensuring high academic standards and innovation',
      'Hands-on project assistance with real-world applications'
    ],
    process: [
      { title: 'Consultation', description: 'Discuss project requirements and goals' },
      { title: 'Development', description: 'Work on implementation and documentation' },
      { title: 'Final Review', description: 'Assess and refine the project for submission' }
    ]
  }
};