/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        figtree: "'Figtree', sans-serif",
        cabin: "'Cabin', sans-serif",
        sans: "'DM Sans', sans-serif",
        alegreya: "'Alegreya Sans SC', sans-serif",
        space: "'Space Grotesk', sans-serif",
        openSans: "'Open Sans', sans-serif"
      },
      backgroundColor: {
        'custom-brown': '#E59C4F', // Replace with your own color and class name
        'custom-purple': '#864FD4', // Replace with your own color and class name
        'custom-green': '#60B084', // Replace with your own color and class name
        'custom-yellow': '#FFCC00', // Replace with your own color and class name
        'custom-blue': '#00228D', // Replace with your own color and class name
      },
      textColor: {
        'custom-dark-text': '#0D1A26',
        'red-500':'rgb(239 68 68)',
        'custom-blue': '#00228D',
      },
      padding: {
        'custom-padding': '11.5rem'
      },
      height:{
        'custom-card-height':'21rem'
      }
    },
  },
  plugins: [],
}