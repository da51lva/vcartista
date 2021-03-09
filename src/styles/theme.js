import "@fontsource/dancing-script";
import "@fontsource/lato/400.css";
import "../assets/fonts/wreath-medium.css";

const theme = {
  font: {
    primary: `'Wreath'`,
    secondary: `'Lato'`,
  },
  font_size: {
    xsmall: 'font-size: 1vw; line-height: 1.1vw',
    small: 'font-size: 1.5vw; line-height: 1.6vw',
    regular: 'font-size: 2vw; line-height: 2.1vw',
    large: 'font-size: 3vw; line-height: 3.2vw',
    larger: 'font-size: 4vw; line-height: 4.2vw',
    xlarge: 'font-size: 5.3vw; line-height: 5.6vw',
  },
  color: {
    white: {
      regular: '#FFFFFF',
      dark: '#F6F6F6',
    },
    black: {
      lighter: '#ABA8AF',
      light: '#564F62',
      regular: '#211E26',
    },
    primary: '#8bd8ed',
    secondary: '#FECCCF',
  },
  screen: {
    xs: '575px',
    sm: '767px',
    md: '1050px',
    lg: '1199px',
  },
};

export default theme;
