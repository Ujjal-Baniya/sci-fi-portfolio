// src/components/ExperienceSection.jsx
import React from 'react';
import { Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      role: "Sr. Frontend Engineer",
      company: "NexusCore Technologies",
      period: "2023 - Present",
      description: "Lead developer for AI-augmented interfaces and real-time data visualization dashboards."
    },
    {
      id: 2,
      role: "Full-Stack Developer",
      company: "Quantum Solutions",
      period: "2021 - 2023",
      description: "Designed and implemented scalable web applications using React, Node.js, and GraphQL."
    },
    {
      id: 3,
      role: "Cybersecurity Analyst",
      company: "Digital Fortress",
      period: "2020 - 2021",
      description: "Conducted security audits and implemented encryption protocols for financial applications."
    },
    {
      id: 4,
      role: "ML Research Intern",
      company: "AI Nexus Lab",
      period: "2019 - 2020",
      description: "Developed and optimized computer vision algorithms for autonomous systems."
    }
  ];
  
  return (
    <section className="py-20 px-8" id="experience">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <Briefcase size={32} className="text-cyan-400 mr-4" />
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
            Experience <span className="text-cyan-400">[]</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative border-l-2 border-cyan-800 pl-8 ml-4 space-y-12">
            {experiences.slice(0, 2).map((exp) => (
              <div key={exp.id} className="relative">
                <div className="absolute w-4 h-4 rounded-full bg-cyan-500 border-4 border-gray-900 -left-10 top-1.5"></div>
                <div className="absolute w-12 h-0.5 bg-cyan-800 -left-8 top-3.5"></div>
                
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-cyan-500 transition-all duration-300 group">
                  <div className="absolute -top-3 left-6 px-4 py-1 bg-gray-900 border border-cyan-800 rounded-full text-purple-400 text-sm">
                    {exp.period}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <div className="text-purple-400 mb-4 flex items-center">
                    <Briefcase size={16} className="mr-2" /> {exp.company}
                  </div>
                  <p className="text-gray-400">{exp.description}</p>
                  
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300">
                    <div className="absolute inset-0 rounded-lg border border-cyan-400 shadow-lg blur"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="relative border-l-2 border-cyan-800 pl-8 ml-4 space-y-12">
            {experiences.slice(2, 4).map((exp) => (
              <div key={exp.id} className="relative">
                <div className="absolute w-4 h-4 rounded-full bg-cyan-500 border-4 border-gray-900 -left-10 top-1.5"></div>
                <div className="absolute w-12 h-0.5 bg-cyan-800 -left-8 top-3.5"></div>
                
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-cyan-500 transition-all duration-300 group">
                  <div className="absolute -top-3 left-6 px-4 py-1 bg-gray-900 border border-cyan-800 rounded-full text-purple-400 text-sm">
                    {exp.period}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <div className="text-purple-400 mb-4 flex items-center">
                    <Briefcase size={16} className="mr-2" /> {exp.company}
                  </div>
                  <p className="text-gray-400">{exp.description}</p>
                  
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300">
                    <div className="absolute inset-0 rounded-lg border border-cyan-400 shadow-lg blur"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;