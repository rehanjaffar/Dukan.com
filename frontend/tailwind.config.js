/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#fea928",
        secondary: "#ed8900",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      screens: {
     'xxs':'350px',
        'xs': '475px',     
        'sm': '640px',     
        'md': '768px',     
        'lg': '1024px',    
        'xl': '1280px',    
        '2xl': '1536px',   
        'custom': '1800px' 
      },
    },
  },
  plugins: [],
};
