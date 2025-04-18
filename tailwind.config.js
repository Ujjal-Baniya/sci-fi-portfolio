// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          'spin-slow': 'spin 3s linear infinite',
          'pulse-slow': 'pulse 3s linear infinite',
          'ping-slow': 'ping 3s linear infinite',
        },
        colors: {
          'cyber-cyan': '#0ff',
          'cyber-purple': '#b026ff',
          'cyber-blue': '#0b2e59',
          'cyber-dark': '#050A30',
        },
        boxShadow: {
          'neon-cyan': '0 0 10px rgba(0, 255, 255, 0.7)',
          'neon-purple': '0 0 10px rgba(176, 38, 255, 0.7)',
        },
      },
    },
    plugins: [],
  }