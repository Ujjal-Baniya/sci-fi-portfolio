// src/components/Footer.jsx
import React from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-8 bg-gray-900 bg-opacity-90 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-4">
            Neo Coder
          </h2>
          <p className="text-gray-400 max-w-md">
            Creating digital experiences for the future.
            Let's build something amazing together.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end">
          <div className="mb-6">
            <button 
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-md font-medium text-white hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 flex items-center gap-2"
              onClick={() => alert('CV download simulation - in a real project, this would download a PDF file')}
            >
              <Download size={18} /> Download CV
            </button>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="social-icon group">
              <div className="relative">
                <Github size={24} className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                <div className="absolute inset-0 blur-sm bg-cyan-500 opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
            </a>
            <a href="#" className="social-icon group">
              <div className="relative">
                <Linkedin size={24} className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                <div className="absolute inset-0 blur-sm bg-cyan-500 opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
            </a>
            <a href="#" className="social-icon group">
              <div className="relative">
                <Mail size={24} className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                <div className="absolute inset-0 blur-sm bg-cyan-500 opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-12 text-gray-600 text-sm">
        © 2025 Neo Coder. All circuits reserved.
      </div>
    </footer>
  );
};

export default Footer;