// src/components/TypedText.jsx
import React, { useState, useEffect } from 'react';

const TypedText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);
  
  return (
    <span>{displayedText}<span className="animate-pulse">|</span></span>
  );
};

export default TypedText;