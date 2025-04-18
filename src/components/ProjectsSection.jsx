// src/components/ProjectsSection.jsx
import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "NeuroCrypt",
      description: "AI-powered encryption system using neural networks to generate adaptive encryption keys.",
      tech: ["React", "TensorFlow.js", "Node.js", "WebAssembly"],
      image: "/api/placeholder/600/400",
      link: "#"
    },
    {
      id: 2,
      title: "Quantum Dashboard",
      description: "Real-time data visualization platform for quantum computing metrics and experiments.",
      tech: ["Vue.js", "D3.js", "GraphQL", "WebSockets"],
      image: "/api/placeholder/600/400",
      link: "#"
    },
    {
      id: 3,
      title: "CyberMesh",
      description: "Decentralized social network with blockchain-based identity verification and data ownership.",
      tech: ["React", "Solidity", "IPFS", "Ethereum"],
      image: "/api/placeholder/600/400",
      link: "#"
    },
    {
      id: 4,
      title: "SynthWave IDE",
      description: "Retro-futuristic code editor with AI code completion and syntax highlighting.",
      tech: ["Electron", "CodeMirror", "GPT-3", "TypeScript"],
      image: "/api/placeholder/600/400",
      link: "#"
    }
  ];
  
  return (
    <section className="py-20 px-8 bg-gray-900 bg-opacity-50" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
          Projects <span className="text-cyan-400">_</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-cyan-500 transition-all duration-500"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs rounded-md bg-gray-800 text-purple-400 border border-purple-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
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