import { createTheme, Theme } from '@mui/material';
import { lightBlue, deepPurple } from '@mui/material/colors';

const lightColorTheme = {
  palette: {
    primary: {
      main: '#FFFFFF',
      light: '#EDEDED',
      dark: '#000000',
      contrastText: '#000000',
    },
    secondary: {
      main: '#EFEFEF',
      dark: '#7B7B7B',
      light: 'rgba(255, 255, 255, 0.75)',
    },
    info: {
      main: 'rgba(0, 0, 0, 0.30)',
      contrastText: '#000000',
    },
    text: {
      primary: '#000000',
      secondary: 'rgba(0, 0, 0, 0.30);',
      disabled: 'rgba(0, 0, 0, 0.3)',
    },
    background: {
      default: '#FFFFFF',
    },
  },
};

const darkColorTheme = {
  palette: {
    primary: {
      main: '#0C0C0C',
      light: '#464646',
      dark: '#FFFFFF',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFFFFF',
      dark: '#7B7B7B',
      light: 'rgba(255, 255, 255, 0.75)',
    },
    info: {
      main: 'rgba(255, 255, 255, 0.30)',
      contrastText: '#000000',
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(0, 0, 0, 0.30);',
      disabled: '#FFFFFF',
    },
    background: {
      default: '#000000',
    },
  },
};

const breakpoints = {
  xs: 320,
  sm: 768,
  md: 1024,
  lg: 1366,
  xl: 1920,
};

const breakpointsValues = {
  breakpoints: {
    values: breakpoints,
  },
};

const TypographyTheme = {
  typography: {
    fontFamily: 'Roboto',
    h6: {
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '18px',
      lineHeight: '20px',
    },
    subtitle1: {
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '13px',
      lineHeight: '20px',
    },
    subtitle2: {
      fontStyle: 'normal',
      fontWeight: '300',
      fontSize: '13px',
      lineHeight: '20px',
    },
    // Select
    body1: {
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '13px',
      lineHeight: 'normal',
    },
    caption: {
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '18px',
      lineHeight: '20px',
    },
    // Select 2
    body2: {
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: '20px',
    },
  },
};

// const scrollbarColors = {
//   light: {
//     thumbBackground: lightColorTheme.palette.secondary.dark,
//   },
//   dark: {
//     thumbBackground: darkColorTheme.palette.secondary.dark,
//   },
// };

// const ScrollbarTheme = (themeMode: 'light' | 'dark') => {
//   const selectedColors = scrollbarColors[themeMode === 'light' ? 'light' : 'dark'];

//   return {
//     components: {
//       MuiCssBaseline: {
//         styleOverrides: {
//           html: {
//             '& ::-webkit-scrollbar': {
//               width: '9px',
//             },
//             '& ::-webkit-scrollbar-thumb': {
//               background: selectedColors.thumbBackground,
//               borderRadius: '10px',
//             },
//             '& ::-webkit-scrollbar-track': {},
//           },
//         },
//       },
//     },
//   };
// };

const lightTheme = createTheme({
  ...TypographyTheme,
  ...lightColorTheme,
  ...breakpointsValues,
});
const darkTheme = createTheme({
  ...TypographyTheme,
  ...darkColorTheme,
  ...breakpointsValues,
});

export { lightTheme, darkTheme };

export type ThemeType = typeof lightTheme;
