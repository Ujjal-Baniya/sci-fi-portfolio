// src/components/ProjectsSection.jsx
import React from 'react';
import { Code, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "NeuroCrypt",
      period: "2023 - Present",
      role: "Sr. Frontend Engineer",
      company: "NexusCore Technologies",
      tech: ["React", "TensorFlow.js", "Node.js", "WebAssembly"],
      image: "/api/placeholder/600/400",
      link: "#",
      description: "Lead developer for AI-augmented interfaces and real-time data visualization dashboards."
    },
    {
      id: 2,
      title: "Quantum Dashboard",
      period: "2020 - 2021",
      role: "Cybersecurity Analyst",
      company: "Digital Fortress",
      tech: ["Vue.js", "D3.js", "GraphQL", "WebSockets"],
      image: "/api/placeholder/600/400",
      link: "#",
      description: "Conducted security audits and implemented encryption protocols for financial applications."
    }
  ];
  
  return (
    <section className="py-20 px-8" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-16">
          <Code size={28} className="text-cyan-400 mr-3" />
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
            Projects <span className="text-cyan-400">_</span>
          </h2>
        </div>
        
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={project.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
              {/* Timeline connector */}
              {index < projects.length - 1 && (
                <div className="absolute left-4 top-1/2 bottom-0 w-0.5 h-1/2 bg-cyan-800 lg:left-1/2 lg:-ml-0.5"></div>
              )}
              
              {/* Project image - alternating sides */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover rounded-lg border border-gray-800"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 rounded-lg"></div>
                <div className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                  {project.title}
                </div>
              </div>
              
              {/* Project details - alternating sides */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} relative`}>
                {/* Timeline circle */}
                <div className="absolute top-4 left-4 lg:left-auto lg:right-auto lg:mx-0 lg:-ml-4">
                  <div className="w-8 h-8 bg-gray-900 border-2 border-cyan-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-50"></div>
                  </div>
                </div>
                
                {/* Period badge */}
                <div className="inline-block px-4 py-1 bg-gray-900 border border-cyan-800 rounded-full text-purple-400 text-sm mb-6 ml-16 lg:ml-0">
                  {project.period}
                </div>
                
                {/* Role and company */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.role}
                </h3>
                <div className="text-purple-400 mb-4">
                  {project.company}
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 text-xs rounded-md bg-gray-800 text-purple-400 border border-purple-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Description */}
                <p className="text-gray-400 mb-6">
                  {project.description}
                </p>
                
                {/* View project link */}
                <a 
                  href={project.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;