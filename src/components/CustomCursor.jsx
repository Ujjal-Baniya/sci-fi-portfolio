// src/components/CustomCursor.jsx
import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);
  
  return (
    <div className="custom-cursor hidden md:block" style={{ 
      left: `${position.x}px`, 
      top: `${position.y}px`,
      pointerEvents: 'none',
      position: 'fixed',
      zIndex: 9999,
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      border: '2px solid #0ff',
      boxShadow: '0 0 10px rgba(0, 255, 255, 0.7)',
      transform: 'translate(-50%, -50%)'
    }}></div>
  );
};

export default CustomCursor;