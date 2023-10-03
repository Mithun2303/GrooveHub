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
      fontFamily:{
        'sans':['ui-sans-serif'],
      },
    extend: {
      colors:{
          primary:"rgb(40,40,40)",
          gray:"#3D3D3D",
          primarytext:"rgb(233,68,67)",
          textbox:"rgb(233,68,67,0.9)",
          gray1:"#B9BBBE"
      },
      backgroundImage:{
        "glassbg": "linear-gradient(180deg, #2F2F2F 0%, rgba(47, 47, 47, 0.00) 106.16%)",

      }
    },
  },
  plugins: [
    
  ],
}

