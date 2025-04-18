// src/components/ExperienceSection.jsx
import React from 'react';
import { Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 3,
      role: "Full-Stack Developer",
      company: "Quantum Solutions",
      period: "2021 - 2023",
      description: "Designed and implemented scalable web applications using React, Node.js, and GraphQL."
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
        <div className="flex items-center justify-center mb-16">
          <Briefcase size={28} className="text-cyan-400 mr-3" />
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
            Experience <span className="text-cyan-400">[]</span>
          </h2>
        </div>
        
        <div className="space-y-24">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-4 top-1/2 bottom-0 w-0.5 h-1/2 bg-cyan-800 lg:left-1/2 lg:-ml-0.5"></div>
              )}
              
              {/* Company image placeholder - alternating sides */}
              <div className={`relative ${index % 2 === 0 ? 'lg:order-2' : ''}`}>
                <div className="w-full h-64 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-800 flex items-center justify-center overflow-hidden">
                  <div className="text-7xl text-cyan-500 opacity-10 font-bold">{exp.company.charAt(0)}</div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-900 opacity-70"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  
                  {/* Company logo placeholder */}
                  <div className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                    {exp.company}
                  </div>
                </div>
              </div>
              
              {/* Experience details - alternating sides */}
              <div className={`${index % 2 === 0 ? 'lg:order-1' : ''} relative`}>
                {/* Timeline circle */}
                <div className="absolute top-4 left-4 lg:left-auto lg:right-auto lg:mx-0 lg:-ml-4">
                  <div className="w-8 h-8 bg-gray-900 border-2 border-cyan-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-50"></div>
                  </div>
                </div>
                
                {/* Period badge */}
                <div className="inline-block px-4 py-1 bg-gray-900 border border-cyan-800 rounded-full text-purple-400 text-sm mb-6 ml-16 lg:ml-0">
                  {exp.period}
                </div>
                
                {/* Role and company */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {exp.role}
                </h3>
                <div className="text-purple-400 mb-4 flex items-center">
                  <Briefcase size={16} className="mr-2" /> {exp.company}
                </div>
                
                {/* Description */}
                <p className="text-gray-400 mb-6">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;