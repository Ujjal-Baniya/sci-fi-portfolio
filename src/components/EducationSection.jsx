
// src/components/EducationSection.jsx
import React from 'react';
import { GraduationCap } from 'lucide-react';

const EducationSection = () => {
  const educationData = [
    {
      id: 1,
      degree: "MEng. Geomatics Engineering",
      institution: "University of Calgary",
      period: "2023 - 2025",
      description: "Specialized in comprehensive geospatial technologies including GIS design and implementation, spatial databases and data mining, satellite positioning systems, advanced photogrammetry techniques, environmental modeling methodologies, and cutting-edge geospatial topics. Proficient in applying these technologies to solve complex spatial problems and create innovative geospatial solutions."
    },
    {
      id: 2,
      degree: "BTech. in Computer Science and Engineering",
      institution: "SRKR Engineering College",
      period: "2018 - 2022",
      description: "Specialized in computer science fundamentals with strong focus on data structures, algorithms, and software engineering principles. Developed expertise in data analytics, machine learning, cryptography, and network security. Proficient in multiple programming paradigms including OOP through C++ and Java. Skilled in database management systems, web technologies, and big data analysis techniques. Completed comprehensive coursework in artificial intelligence and cloud computing solutions"
    }
    // },
    // {
    //   id: 3,
    //   degree: "Certification in Cybersecurity",
    //   institution: "Network Defense Academy",
    //   period: "2021",
    //   description: "Advanced security protocols and ethical hacking methodologies."
    // }
  ];
  
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-8 relative" id="education">
      <div className="max-w-4xl w-full bg-gray-900 bg-opacity-80 p-8 rounded-lg border border-cyan-500 shadow-lg shadow-cyan-500/20">
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
          Education <span className="text-cyan-400">&lt;/&gt;</span>
        </h2>
        
        <div className="relative border-l-2 border-cyan-800 pl-8 ml-4">
          {educationData.map((edu) => (
            <div 
              key={edu.id} 
              className="mb-12 relative"
            >
              <div className="absolute w-4 h-4 rounded-full bg-cyan-500 border-4 border-gray-900 -left-10 top-1.5 timeline-dot"></div>
              <div className="absolute w-12 h-0.5 bg-cyan-800 -left-8 top-3.5"></div>
              
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-cyan-500 transition-all duration-300 group">
                <div className="absolute -top-3 left-6 px-4 py-1 bg-gray-900 border border-cyan-800 rounded-full text-purple-400 text-sm">
                  {edu.period}
                </div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                  {edu.degree}
                </h3>
                <div className="text-purple-400 mb-4 flex items-center">
                  <GraduationCap size={16} className="mr-2" /> {edu.institution}
                </div>
                <p className="text-gray-400">{edu.description}</p>
                
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300">
                  <div className="absolute inset-0 rounded-lg border border-cyan-400 shadow-lg blur"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
