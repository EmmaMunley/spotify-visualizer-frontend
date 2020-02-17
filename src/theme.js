import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  typography: {
    fontFamily: ['Circular-Pro-Book', 'Helvetica', 'Arial', 'sans-serif'].join(
      ','
    ),
  },
  palette: {
    primary: {
      main: '#1ED760',
    },
    secondary: {
      main: '#222226',
      light: '#000000',
    },
  },
  overrides: {
    // Style sheet name
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        color: '#000000',
      },
    },
  },
});
