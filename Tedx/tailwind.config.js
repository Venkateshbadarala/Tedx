const path = require('path');

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
    
    },
    screens: {
      'x-sm': '310px',
      'sm': '640px',
      'md': '1024px',
      'lg': '1280px',
    },
  },
  plugins: [],
};
