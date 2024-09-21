const path = require('path');

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 10px 20px rgba(255, 87, 51, 0.5)', // Example custom shadow
      },
      
      screens: {
        'x-sm': '310px',
        'sm': '640px',
        'md': '1024px',
        'lg': '1280px',
      },
    },
  },
  plugins: [],
};
