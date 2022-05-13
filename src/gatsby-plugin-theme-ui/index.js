import '@fontsource/raleway'
import '@fontsource/raleway/100.css'
import '@fontsource/raleway/200.css'
import '@fonts/wreath-medium.css'
import '@fonts/grandoise-demo.css'

const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    social: 35,
  },
  fonts: {
    primary: 'Raleway',
    secondary: 'Grandoise',
    moonospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 80, 112, 144, 176, 208, 240],
  fontWeights: {
    thin: 100,
    body: 200,
    nav: 400,
    heading: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.6,
    heading: 0.6,
  },
  colors: {
    text: '#272c33',
    background: '#dcdae6',
    primary: '#a8a2c3',
    secondary: '#006fbb',
    highlight: '#47c1bf',
    muted: '#e6e6e6',
    gray: '#dfe3e8',
    accent: '#f49342',
    darken: '#00044c',
    light: '#f6f6f6',
    accept: '#5fd152',
    acceptLight: '#d8e4d7',
    reject: '#db516c',
    rejectLight: '#fae4e8',
  },
  text: {
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
    },
    heading: {
      fontFamily: 'secondary',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
  },
  links: {
    footer: {
      fontFamily: 'primary',
      fontWeight: 'nav',
      fontSize: 2,
      color: 'text',
      textDecoration: 'none',
    },
    nav: {
      fontFamily: 'primary',
      fontWeight: 'nav',
      fontSize: 4,
      color: 'text',
      textDecoration: 'none',
    },
  },
  images: {
    logo: {
      width: 200,
    },
  },

  styles: {
    root: {
      color: 'text',
      fontFamily: 'primary',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      color: 'text',
      fontFamily: 'secondary',
      lineHeight: 'heading',
      fontWeight: 'body',
      fontSize: [11,12,13],
    },
    h2: {
      color: 'text',
      fontFamily: 'secondary',
      lineHeight: 'heading',
      fontWeight: 'body',
      fontSize: 10,
      textAlign: 'center',
    },
    h3: {
      color: 'text',
      fontFamily: 'secondary',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
    },
    h4: {
      color: 'text',
      fontFamily: 'primary',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
    },
    h5: {
      color: 'text',
      fontFamily: 'primary',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1,
    },
    h6: {
      color: 'text',
      fontFamily: 'primary',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontFamily: 'primary',
      fontWeight: 'body',
      lineHeight: 'body',
      textAlign: 'justify',
    },
    a: {
      color: 'text',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    ul: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      textAlign: 'center',
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold',
    },
    input: {
      bg: 'light',
      borderColor: 'gray',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    select: {
      borderColor: 'gray',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    textarea: {
      bg: 'light',
      borderColor: 'gray',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    slider: {
      bg: 'muted',
    },
  },
}

export default theme
