import { ThemeProvider } from 'emotion-theming';

const theme = {
  colors: {
    // Set your brand colors
    green: '#0fce96',
    pink: '#fa7c91',
    pink2: '#ef3c8f',
    brown: '#757763',
    beigeLight: '#d0d1cd',
    beigeLightTransparent: 'rgba(208, 209, 205, 0.7)',
    beigeLighter: '#eff0eb',
    blue: '#00c2f7',
    blue2: '#2793da',
    white: 'white',
    black: '#0c0c0d',
    whiteSmoke: '#f5f5f5',
    orange: '#ff981b',
  },

  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  flexBetween: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  globalPadding: {
    padding: '0 20px',
  },

  pixelToVieWidth: (px) => {
    return (px / 375) * 100 + 'vw';
  },

  mediaTablet: '@media(min-width: 768px)',
};

// Update Bulma's global variables
// $family-sans-serif : menlo, Consolas, arial, sans-serif;
// $grey-dark         : $brown;
// $grey-light        : $beige-light;
// $primary           : $blue;
// $link              : $blue;
// $widescreen-enabled: false;
// $fullhd-enabled    : false;

// // Update some of Bulma's component variables
// $body-background-color: $beige-lighter;
// $control-border-width : 2px;
// $input-border-color   : transparent;
// $input-shadow         : none;

// $navbar-breakpoint: 400px;

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
