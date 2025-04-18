// src/components/FixedLayout.jsx
import React from 'react';
import { BookOpen, Code, Briefcase, ExternalLink } from 'lucide-react';

const FixedLayout = () => {
  // Education data
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
  
  // Projects and experience data
  const timelineData = [
    {
      id: 1,
      type: "project",
      title: "NeuroCrypt",
      role: "Sr. Frontend Engineer",
      company: "NexusCore Technologies",
      period: "2023 - Present",
      description: "Lead developer for AI-augmented interfaces and real-time data visualization dashboards.",
      tech: ["React", "TensorFlow.js", "Node.js", "WebAssembly"],
      image: "/api/placeholder/600/400",
      link: "#"
    },
    {
      id: 2,
      type: "experience",
      title: "Cybersecurity Analyst",
      company: "Digital Fortress",
      period: "2020 - 2021",
      description: "Conducted security audits and implemented encryption protocols for financial applications.",
      tech: ["Vue.js", "D3.js", "GraphQL", "WebSockets"]
    },
    {
      id: 3,
      type: "experience",
      title: "Full-Stack Developer",
      company: "Quantum Solutions",
      period: "2021 - 2023",
      description: "Designed and implemented scalable web applications using React, Node.js, and GraphQL.",
      tech: ["React", "Node.js", "GraphQL"]
    },
    {
      id: 4,
      type: "experience",
      title: "ML Research Intern",
      company: "AI Nexus Lab",
      period: "2019 - 2020",
      description: "Developed and optimized computer vision algorithms for autonomous systems.",
      tech: ["Python", "TensorFlow", "Computer Vision"]
    }
  ];

  return (
    <div className="bg-gray-950">
      {/* Education Section */}
      <section className="py-20 px-8" id="education">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-16">
            <BookOpen size={28} className="text-cyan-400 mr-3" />
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              Education <span className="text-cyan-400">&lt;/&gt;</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {educationData.map((item) => (
              <div 
                key={item.id}
                className="bg-gray-900 bg-opacity-70 p-6 rounded-lg border border-gray-800 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="text-cyan-400 text-xl font-bold mb-2">{item.degree}</div>
                <div className="text-purple-400 mb-3">{item.institution}</div>
                <div className="text-gray-500 mb-4">{item.period}</div>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-20 px-8" id="projects">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-16">
            <Code size={28} className="text-cyan-400 mr-3" />
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              Projects <span className="text-cyan-400">_</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {timelineData.filter(item => item.type === "project").map((project) => (
              <div 
                key={project.id}
                className="bg-gray-900 bg-opacity-70 rounded-lg overflow-hidden border border-gray-800 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gray-900 border border-cyan-800 rounded-full text-purple-400 text-sm">
                    {project.period}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">{project.role}</h3>
                  <div className="text-purple-400 mb-4 flex items-center">
                    <Briefcase size={16} className="mr-2" /> {project.company}
                  </div>
                  
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
                  
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
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
      
      {/* Experience Section */}
      <section className="py-20 px-8" id="experience">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-16">
            <Briefcase size={28} className="text-cyan-400 mr-3" />
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              Experience <span className="text-cyan-400">[]</span>
            </h2>
          </div>
          
          <div className="relative border-l-2 border-cyan-800 pl-8 ml-4 space-y-12">
            {timelineData.filter(item => item.type === "experience").map((exp) => (
              <div key={exp.id} className="relative">
                <div className="absolute w-4 h-4 rounded-full bg-cyan-500 border-4 border-gray-900 -left-10 top-1.5"></div>
                <div className="absolute w-12 h-0.5 bg-cyan-800 -left-8 top-3.5"></div>
                
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-cyan-500 transition-all duration-300 group">
                  <div className="absolute -top-3 left-6 px-4 py-1 bg-gray-900 border border-cyan-800 rounded-full text-purple-400 text-sm">
                    {exp.period}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <div className="text-purple-400 mb-4 flex items-center">
                    <Briefcase size={16} className="mr-2" /> {exp.company}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 text-xs rounded-md bg-gray-800 text-purple-400 border border-purple-800"
                      >
                        {tech}
                      </span>
                    ))}
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
      </section>
    </div>
  );
};

export default FixedLayout;