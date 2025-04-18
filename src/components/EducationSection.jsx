// src/components/EducationSection.jsx
import React from 'react';

const EducationSection = () => {
  const educationData = [
    {
      id: 1,
      degree: "MSc in Artificial Intelligence",
      institution: "Tech Futures University",
      period: "2022 - 2024",
      description: "Specialized in neural network architecture and reinforcement learning systems."
    },
    {
      id: 2,
      degree: "BSc in Computer Science",
      institution: "Digital Institute of Technology",
      period: "2018 - 2022",
      description: "Focus on algorithms, data structures, and full-stack development."
    },
    {
      id: 3,
      degree: "Certification in Cybersecurity",
      institution: "Network Defense Academy",
      period: "2021",
      description: "Advanced security protocols and ethical hacking methodologies."
    }
  ];
  
  return (
    <section className="py-20 px-8" id="education">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
          Education <span className="text-cyan-400">&lt;/&gt;</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {educationData.map((item, index) => (
            <div 
              key={item.id}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/20"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-cyan-400 text-xl font-bold mb-2">{item.degree}</div>
              <div className="text-purple-400 mb-4">{item.institution}</div>
              <div className="text-gray-500 mb-4">{item.period}</div>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;