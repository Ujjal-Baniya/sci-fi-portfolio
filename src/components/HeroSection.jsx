// src/components/HeroSection.jsx
import React from 'react';
import { User, Code } from 'lucide-react';
import TypedText from './TypedText';
import RobotCharacter from './RobotCharacter';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-8 relative" id="about">
      <div className="absolute top-20 right-20 hidden lg:block">
        <div className="w-32 h-32 relative">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-cyan-500 rounded-full opacity-25 animate-ping"></div>
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-cyan-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      <RobotCharacter />

      <div className="max-w-4xl w-full bg-gray-900 bg-opacity-80 p-8 rounded-lg border border-cyan-500 shadow-lg shadow-cyan-500/20">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
          UJJAL BANIYA
        </h1>
        <div className="text-xl md:text-2xl text-gray-300 mb-8">
          <TypedText text="GIS Developer | Full Stack Developer | Web 3 Enthusiast | AI Engineer" />
        </div>
        <p className="text-gray-400 mb-8 text-lg">
        Creating digital experiences at the intersection of technology and imagination. 
        Specializing in React, AI systems, and secure application architecture.
        </p>
        <div className="flex gap-4">
          <a href="mailto:ujjalbaniya@gmail.com" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-md font-medium text-white hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
            <User size={18} /> Email Me
          </a>
          <a href="#projects" className="px-6 py-3 bg-transparent border border-cyan-500 rounded-md font-medium text-cyan-400 hover:bg-cyan-950 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
            <Code size={18} /> View Projects
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-10 h-10 border-2 border-cyan-400 rounded-full flex items-center justify-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-cyan-400" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;