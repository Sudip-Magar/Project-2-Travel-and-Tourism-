/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'pop':["Poppins", 'sans-serif'],
        'ren':["Reenie Beanie", 'cursive']
      },
      colors:{
        'mycol':['#06A5E1'],
        'mycol2':['#081321e7']
      },
      margin:{
        'mymar':['500px']
      },
      keyframes:{
        'transup':{
          '0% , 100%':{transform: 'translateY(0px)'},
          '0%':{transform:'translatey(500px)'}
        }
      },
      animation:{
        'transup':'transup 1s ease-in-out'
      },
      width:{
        'mywid':['85%']
      }
    },
  },
  plugins: [],
}

