

/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,tx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-grey':'#979797',
        'text-custom-green':'#A5E7D4',
        'bg-custom':'#131313',
        'nav-second-text':'#979797'
      }
    },
    
  },
  plugins: [],
});

