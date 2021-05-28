module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false,
  theme: {
    fontSize: {
      'x-small': '10px',
      'calc': 'calc(1.325rem + .9vw)',
      'calc-md': 'calc(3em + .5vw)',
      'calc-lg': 'calc(3em + 5vw)',
      'tiny': '16px',
       'base': '20px',
       'medium': '25px',
       'title': '50px',
       'lg-members': '40px',
       'lg': '30px',
       'xl': '35px',
       '2xl': '70px',
       'h4': '1.5rem',
       '1r':'1rem',
       '1-25': '1.25rem'
     },
    textColor: {
      'primary': '#aa4f4f',
      'secondary': '#c8d368',
      'white': '#fff',
      'blue': '#52dbfb',
      'grey': '#353535',
      'black': '#000',
      'nav': 'hsla(0,0%,100%,.55)',
      'linkgray': '#6c757d'
    },
    backgroundColor: theme => ({
      'grey': '#353535',
      'white': '#fff',
      'green': '#c8d368',
      'black': '#000'
     }),
     fontFamily: {

      'sans': ['montserrat', 'helvetica', 'arial', 'sans serif'],

      'serif': ['OCR A EXTENDED', 'monospace']
     },
     minWidth: {
      '250': '250px',
     },
     boxShadow: {
      sm: '0 4px 8px 0 rgba(0, 0, 0, .4)',
      xl: '0 8px 16px 0 rgba(0, 0, 0, .4)',
    },
    padding: {
      sm: '5%',
      md: '10%',
      lg: '15%',
      xl: '20%',
      nav: '.5rem',
      nav1: '.75rem',
      0: '0px',
      4: '1rem',
      s: '0.125rem',
      ss: '0.15em',
      10: '10px',
      30: '30px',
      nav2: '.3125rem'
     },
     margin: {
      sm: '10px',
      smm: '16px',
      md: '25px',
      mdl: '40px',
      lg: '50px',
      xlg: '70px',
      xl: '100px',
      0: '0px',
      a: 'auto',
      1: '1em',
      3: '3rem'
     },
    extend: {
      width: {
        '2/7': '30%',
      },
      maxHeight: {
        '74': '300px'
       },
      gridTemplateColumns: {
        // Simple 16 column grid
       'portada': '1fr minmax(10em, max-content) 1fr minmax(10em, max-content) 1fr minmax(10em, 1fr)',
      },
      gridTemplateRows: {
        // Simple 8 row grid
       'portada': '30vh 30vh 20vh'
      },
      lineHeight: {
        'extra-loose': '1.2'
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
