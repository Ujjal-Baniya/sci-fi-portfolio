// src/components/AnimatedBackground.jsx
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
      <div className="stars"></div>
      <div className="grid"></div>
      <style jsx>{`
        .stars {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(ellipse at center, transparent 0%, #050A30 100%);
        }
        .stars:after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(white, rgba(255,255,255,0) 2px);
          background-size: 50px 50px;
          background-position: 0 0, 25px 25px;
        }
        .grid {
          position: absolute;
          width: 100%;
          height: 100%;
          background-size: 50px 50px;
          background-image: 
            linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
          animation: grid-move 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;