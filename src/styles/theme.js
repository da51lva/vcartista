import "@fontsource/dancing-script";
import "@fontsource/lato/400.css";
import "../assets/fonts/wreath-medium.css";

const theme = {
  font: {
    primary: `'Wreath'`,
    secondary: `'Lato'`,
  },
  font_size: {
    small: 'font-size: 20px; line-height: 30px',
    regular: 'font-size: 24px; line-height: 32px',
    large: 'font-size: 30px; line-height: 40px',
    larger: 'font-size: 36px; line-height: 48px',
    xlarge: 'font-size: 65px; line-height: 75px',
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
    md: '991px',
    lg: '1199px',
  },
};

export default theme;
