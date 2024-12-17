/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'], 
      },

      animation: {
        fadeUp: "fadeUp 1.2s ease-out forwards", // Custom animation
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(50px)" }, // Start invisible and shifted
          "100%": { opacity: 1, transform: "translateY(0)" },  // Fade in and move up
        },
      },
    },
  },
  plugins: [],
}
