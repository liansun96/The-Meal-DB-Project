/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
        '4xl': '2560px',
      },
      colors: {
        primary: "#222222",
        secondary: "#272727",
        light:"#F1FBFF",
        success:"#f8a01a",
        skyblue: {
          100: "#edecfb",
          200: "#bbbcc1",
          300: "#85868a",
          400: "#f5f5f6",
          500: "#aab3be"
        },
      },
      fontFamily: {
        Ubt: ["Ubuntu", "sans-serif"],        
      },    
    },
  },
  plugins: [],
}
