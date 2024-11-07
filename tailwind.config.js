/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode with the class strategy
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Specify the paths to all of the template files
  theme: {
    extend: {}, // Extend default Tailwind CSS styles
  },
  plugins: [], // Add any Tailwind CSS plugins if needed
};
