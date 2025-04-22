/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: ["0.875rem", "16px"], // 16px
      // "2sm": ["18px", "1.35"], // 18px
      // base: ["1.25rem", "1.35"], // 20px
      // xl: ["1.5rem", "1.35"], // 24px
      // "2xl": ["1.875rem", "1.35"], // 30px
      // "3xl": ["2.5rem", "1.35"], // 40px
      // "4xl": ["3.125rem", "1.4"], // 50px
      // "4.5xl": ["3.6875rem", "1.4"], // 59px
      // "5xl": ["4.688rem", "1.25"], // 75px
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