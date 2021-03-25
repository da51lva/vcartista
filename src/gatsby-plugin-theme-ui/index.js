import "@fontsource/raleway";

const theme = {
    
    space: [
      0,
      4,
      8,
      16,
      32,
      64,
      128,
      256,
      512
    ],
    sizes: {
      social: 35
    },
    fonts: {
      body: "system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", sans-serif",
      heading: 'Raleway',
      moonospace: "Menlo, monospace"
    },
    fontSizes: [
      12,
      14,
      16,
      20,
      24,
      32,
      48,
      64,
      96
    ],
    "fontWeights": {
      "body": 400,
      "heading": 600,
      "bold": 700
    },
    "lineHeights": {
      "body": 1.6,
      "heading": 1.16
    },
    "colors": {
      "text": "#454f5b",
      "background": "#fff",
      "primary": "#FCF2FB",
      "secondary": "#006fbb",
      "highlight": "#47c1bf",
      "muted": "#e6e6e6",
      "gray": "#dfe3e8",
      "accent": "#f49342",
      "darken": "#00044c",
    },
    text: {
      caps: {
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
      },
      heading: {
        fontFamily: 'heading',
        fontWeight: 'heading',
        lineHeight: 'heading',
      },
    },
    links: {
      footer: {
        fontFamily: 'heading',
        fontWeight: 'body',
        color: 'text',
        textDecoration: 'none',
        fontSize: 2,
      },
      nav: {
        fontWeight: 'bold',
        color: 'inherit',
        textDecoration: 'none',
      }
    },
    images: {
      logo: {
        width: 200,
        },
    },
    
    "styles": {
      "root": {
        "fontFamily": "body",
        "lineHeight": "body",
        "fontWeight": "body"
      },
      "h1": {
        "color": "text",
        "fontFamily": "heading",
        "lineHeight": "heading",
        "fontWeight": "heading",
        "fontSize": [4,5,6]
      },
      "h2": {
        "color": "text",
        "fontFamily": "heading",
        "lineHeight": "heading",
        "fontWeight": "heading",
        "fontSize": 4
      },
      "h3": {
        "color": "text",
        "fontFamily": "heading",
        "lineHeight": "heading",
        "fontWeight": "heading",
        "fontSize": 3
      },
      "h4": {
        "color": "text",
        "fontFamily": "heading",
        "lineHeight": "heading",
        "fontWeight": "heading",
        "fontSize": 2
      },
      "h5": {
        "color": "text",
        "fontFamily": "heading",
        "lineHeight": "heading",
        "fontWeight": "heading",
        "fontSize": 1
      },
      "h6": {
        "color": "text",
        "fontFamily": "heading",
        "lineHeight": "heading",
        "fontWeight": "heading",
        "fontSize": 0
      },
      "p": {
        "color": "text",
        "fontFamily": "body",
        "fontWeight": "body",
        "lineHeight": "body"
      },
      a: {
        color: 'text'
      },
      "pre": {
        "fontFamily": "monospace",
        "overflowX": "auto",
        "code": {
          "color": "inherit"
        }
      },
      ul: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        textAlign: 'center'
      },
      "code": {
        "fontFamily": "monospace",
        "fontSize": "inherit"
      },
      "table": {
        "width": "100%",
        "borderCollapse": "separate",
        "borderSpacing": 0
      },
      "th": {
        "textAlign": "left",
        "borderBottomStyle": "solid"
      },
      "td": {
        "textAlign": "left",
        "borderBottomStyle": "solid"
      },
      "img": {
        "maxWidth": "100%"
      }
    }
  }

  export default theme;