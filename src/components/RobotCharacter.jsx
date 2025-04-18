// src/components/RobotCharacter.jsx
import React from 'react';

const RobotCharacter = () => {
  return (
    <div className="absolute bottom-32 right-8 lg:right-20 w-16 h-24 hidden lg:block">
      <div className="relative w-full h-full">
        {/* Robot Head */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gray-800 rounded-lg border-2 border-cyan-500 animate-pulse">
          {/* Eyes */}
          <div className="absolute top-2 left-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute top-2 right-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          {/* Antenna */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-gray-600">
            <div className="absolute top-0 left-0 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          </div>
        </div>
        {/* Robot Body */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-12 h-14 bg-gray-700 rounded-md border border-cyan-500">
          {/* Chest Light */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-cyan-400 rounded animate-pulse"></div>
          <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-6 h-4 grid grid-cols-2 gap-1">
            <div className="bg-gray-600 rounded-sm"></div>
            <div className="bg-gray-600 rounded-sm"></div>
            <div className="bg-gray-600 rounded-sm"></div>
            <div className="bg-gray-600 rounded-sm"></div>
          </div>
        </div>
        {/* Arms */}
        <div className="absolute top-12 left-0 w-3 h-8 bg-gray-600 rounded-full transform origin-top rotate-12 animate-wave"></div>
        <div className="absolute top-12 right-0 w-3 h-8 bg-gray-600 rounded-full transform origin-top -rotate-12"></div>
        {/* Legs */}
        <div className="absolute bottom-0 left-1/4 w-3 h-6 bg-gray-800 rounded-b-lg"></div>
        <div className="absolute bottom-0 right-1/4 w-3 h-6 bg-gray-800 rounded-b-lg"></div>
      </div>
    </div>
  );
};

export default RobotCharacter;