// src/components/Navigation.jsx
import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900 bg-opacity-90 shadow-lg shadow-cyan-500/10' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
          U J J A L
        </a>

        <div className="hidden md:flex space-x-8">
          {['Email Me', 'Education', 'Projects', 'Experience'].map((item) => (
            <a 
              key={item} 
              href={item === 'Email Me' ? "mailto:ujjalbaniya@gmail.com" : `#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <a 
            href="mailto:ujjalbaniya@gmail.com"
            className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-md font-medium text-white hidden md:block hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Email Me
          </a>

        <button 
          className="text-gray-300 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="bg-gray-900 bg-opacity-95 md:hidden">
          <div className="px-8 py-4 flex flex-col space-y-4">
            {['Email Me', 'Education', 'Projects', 'Experience'].map((item) => (
              <a 
                key={item} 
                href={item === 'Email Me' ? "mailto:ujjalbaniya@gmail.com" : `#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="mailto:ujjalbaniya@gmail.com"
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-md font-medium text-white self-start"
            >
              Email Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;