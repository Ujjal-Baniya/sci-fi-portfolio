import React from 'react';
import { Code, ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Calgary Transit Companion",
      description: "Full-stack Flask application integrating GTFS static data with real-time transit information to compute available routes with multi-bus transfers between any two addresses.",
      tech: ["Flask", "SQLite", "Leaflet.js", "Bootstrap", "Geocoding APIs"],
      period: "2025",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Optimal Placement of E.V Charging Stations",
      description: "Spatial data mining study applying hotspot analysis and clustering algorithms to determine optimal EV charging station locations using demographic and land use datasets.",
      tech: ["ArcGIS Pro", "Python", "Geopandas", "Scikit-learn", "MCDA"],
      period: "2025",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Quiz Android App",
      description: "Interactive quiz application with user-friendly interfaces, real-time updates, and smooth synchronization using Firebase backend for data management.",
      tech: ["Flutter", "Firebase", "Android"],
      period: "2023",
      github: "#",
      demo: "#"
    },
    {
      id: 4,
      title: "Telegrambot-myHomie",
      description: "Private Telegram bot in Python that automates Google Forms filling with provided data, ensuring data accuracy and submission reliability.",
      tech: ["Python", "Telegram API", "Google Forms API"],
      period: "2022",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-8 relative" id="projects">
      <div className="max-w-4xl w-full bg-gray-900 bg-opacity-80 p-8 rounded-lg border border-cyan-500 shadow-lg shadow-cyan-500/20">
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
          Projects <span className="text-cyan-400">[]</span>
        </h2>

        <div className="relative border-l-2 border-cyan-800 pl-8 ml-4">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="mb-12 relative"
            >
              <div className="absolute w-4 h-4 rounded-full bg-cyan-500 border-4 border-gray-900 -left-10 top-1.5 timeline-dot"></div>
              <div className="absolute w-12 h-0.5 bg-cyan-800 -left-8 top-3.5"></div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-cyan-500 transition-all duration-300 group">
                <div className="absolute -top-3 left-6 px-4 py-1 bg-gray-900 border border-cyan-800 rounded-full text-purple-400 text-sm">
                  {project.period}
                </div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="text-purple-400 mb-4 flex items-center">
                  <Code size={16} className="mr-2" /> {project.tech.join(" • ")}
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/50 text-white transition-all duration-300"
                  >
                    <Github size={16} /> Source
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-600/20 hover:bg-cyan-600/40 border border-cyan-500/50 text-white transition-all duration-300"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>

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

export default ProjectsSection;