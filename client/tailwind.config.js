/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",  // Søker gjennom alle filer i src/
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#003B4D",  // Dr. Dropin sin blåfarge
        "secondary": "#003B4D", // Lett grå bakgrunn
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],  // Bruk Poppins eller Roboto
      },
    },
  },
  plugins: [],
}

