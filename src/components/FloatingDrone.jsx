// src/components/FloatingDrone.jsx
import React from 'react';

const FloatingDrone = () => {
  return (
    <div className="fixed top-1/4 right-8 w-14 h-8 hidden lg:block z-10">
      <div className="relative w-full h-full animate-float">
        {/* Drone Body */}
        <div className="absolute top-0 left-0 w-full h-4 bg-gray-800 rounded-lg border border-cyan-600">
          {/* Lights */}
          <div className="absolute -top-1 left-1 w-1 h-1 bg-red-500 rounded-full animate-pulse"></div>
          <div className="absolute -top-1 right-1 w-1 h-1 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          
          {/* Camera/Scanner */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full">
            <div className="absolute top-0 left-0 w-full h-full rounded-full animate-ping opacity-70"></div>
          </div>
        </div>
        
        {/* Rotors */}
        <div className="absolute -top-2 -left-2 w-4 h-1 bg-gray-700">
          <div className="absolute top-0 left-0 w-full h-full border-t border-cyan-400 animate-spin opacity-25"></div>
        </div>
        <div className="absolute -top-2 -right-2 w-4 h-1 bg-gray-700">
          <div className="absolute top-0 left-0 w-full h-full border-t border-cyan-400 animate-spin opacity-25"></div>
        </div>
        <div className="absolute -bottom-2 -left-2 w-4 h-1 bg-gray-700">
          <div className="absolute top-0 left-0 w-full h-full border-t border-cyan-400 animate-spin opacity-25"></div>
        </div>
        <div className="absolute -bottom-2 -right-2 w-4 h-1 bg-gray-700">
          <div className="absolute top-0 left-0 w-full h-full border-t border-cyan-400 animate-spin opacity-25"></div>
        </div>
      </div>
    </div>
  );
};

export default FloatingDrone;