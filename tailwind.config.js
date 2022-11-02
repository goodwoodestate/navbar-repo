

/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,tx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-green':'#A5E7D4',
        'text-custom-green':'#A5E7D4'
      }
    },
    
  },
  plugins: [],
});

