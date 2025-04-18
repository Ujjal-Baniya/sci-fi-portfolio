// src/components/ParticleEffect.jsx
import React, { useState, useEffect } from 'react';

const ParticleEffect = () => {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    // Create random particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.2 + 0.1,
      opacity: Math.random() * 0.5 + 0.3
    }));
    
    setParticles(newParticles);
    
    // Animate particles
    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        y: particle.y + particle.speed > 100 ? 0 : particle.y + particle.speed
      })));
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-5">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-cyan-400"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.size/2}px rgba(0, 255, 255, 0.5)`
          }}
        />
      ))}
    </div>
  );
};

export default ParticleEffect;