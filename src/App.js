// src/App.js
import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import AnimatedBackground from './components/AnimatedBackground';
import ParticleEffect from './components/ParticleEffect';
import FloatingDrone from './components/FloatingDrone';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import FixedLayout from './components/FixedLayout';
import Footer from './components/Footer';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return (
      <div className="bg-gray-950 text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-6 border-4 border-t-cyan-500 border-r-purple-500 border-b-cyan-500 border-l-purple-500 rounded-full animate-spin"></div>
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
            Initializing System...
          </h2>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <CustomCursor />
      <AnimatedBackground />
      <ParticleEffect />
      <FloatingDrone />
      <Navigation />
      <HeroSection />
      <FixedLayout />
      <Footer />
      
      {/* Click Effect Handler */}
      <div id="click-effect-container" className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"></div>
      
      {/* Script for click effect */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('click', (e) => {
            const container = document.getElementById('click-effect-container');
            const effect = document.createElement('div');
            effect.style.position = 'absolute';
            effect.style.borderRadius = '50%';
            effect.style.border = '2px solid #0ff';
            effect.style.left = e.clientX + 'px';
            effect.style.top = e.clientY + 'px';
            effect.style.width = '0';
            effect.style.height = '0';
            effect.style.opacity = '1';
            effect.style.transform = 'translate(-50%, -50%)';
            effect.style.transition = 'all 0.5s ease-out';
            container.appendChild(effect);
            
            setTimeout(() => {
              effect.style.width = '50px';
              effect.style.height = '50px';
              effect.style.opacity = '0';
            }, 10);
            
            setTimeout(() => {
              container.removeChild(effect);
            }, 500);
          });
        `
      }}></script>
    </div>
  );
};

export default App;