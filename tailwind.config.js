/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: ["0.875rem", "16px"], // 16px
    },
    extend: {
      fontFamily: {
        sans: ["Public Sans", "sans-serif"],
        Caveat:["Caveat"]
      },
      colors: {
        primary: "#372973",
        "green": "#33A844",
        "light-green": "#65CB7B",
        "dark-green": "#008000",
        "orange": "#FCA61F",
        "purple": "#907BEA",
        gray:"#0A0717",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.25rem',
          lg: '1.5rem',
        },
        
      },
    },
  },
  plugins: [],
}