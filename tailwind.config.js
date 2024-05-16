/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",],
  theme: {
    extend: {
      fontFamily:{
        'pop':["Poppins", 'sans-serif'],
        'ren':["Reenie Beanie", 'cursive']
      },
      colors:{
        'mycol':['#06A5E1'],
        'mycol2':['#081321e7'],
        'mycol3':['#A0A8B3'],
        'nepal':['#F3F3F4']
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
        'mywid':['85%'],
        'newid':['32%'],
        'newwid1':['48%'],
        'adv':['700px'],
        'fle1':['65%'],
        'fle2':['35%'],
        'abwid':['24%']
      },
      backgroundImage: {
        'mybac': "url('img/backglobe1.png')",
      },
      letterSpacing:{
        'mylet':['3px']
      },
      lineHeight:{
        'myheig':['60px']
      },
      fontSize:{
        'myfon':['35px']
      },
      height:{
        'myh':['80vh'],
        'myh2':['40vh']
      }
    },
  },
  plugins: [],
}

