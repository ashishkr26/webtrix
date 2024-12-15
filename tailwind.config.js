/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        'bottom-only': '0 4px 6px -1px rgba(0, 0, 0, 0.1)', // Adjust values as needed
      },
      colors: {
        brightgreen:'#66FF00', // Custom color name
      },
    },
  },
  plugins: [],
};
