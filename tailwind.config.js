/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {

      // ### Primary
      "Light-Cyan": "hsl(193, 38%, 86%)",
      "Neon-Green": "hsl(150, 100%, 66%)",

      // ### Neutral
      "Grayish-Blue": "hsl(217, 19%, 38%)",
      "Dark-Grayish-Blue": "hsl(217, 19%, 24%)",
      "Dark-Blue": "hsl(218, 23%, 16%)"

    },
    extend: {
      dropShadow:{
        "neon-green": "0 0 15px hsl(150, 100%, 66%)"
      }
    },
  },
  plugins: [],
}