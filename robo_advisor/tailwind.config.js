/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],

  
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primary: '#002146',
        secondary: '#9ca3af',
        white: '#ffffff',
        lightprimary: '#d9e9fa',
        firstgold: '#e0c212',
       
      },
      
      fontFamily:{
        'primary': ['Poppins']
      }
    },
  },
  plugins: [],
}
