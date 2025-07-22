/** @type {import('tailwindcss').Config} */

export default {
  
  darkMode: "class", // This enables dark mode
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend:{
      fontFamily: {
        fraunces: ['Noto Sans', 'sans serrif'], // Define the Google Font
        
      },
    }

  },
plugins: [],
}
