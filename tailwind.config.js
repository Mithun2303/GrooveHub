const { colors } = require('@material-ui/core');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
      screens:{
        sm:360,
        md:414,
        lg:1280,
        xl:1920
      },
    extend: {
      colors:{
          primary:"rgb(40,40,40)",
          primarytext:"rgb(233,68,67)",
          textbox:"rgb(233,68,67,0.9)",
          gray1:"#B9BBBE"
      }
    },
  },
  plugins: [
    
  ],
}

