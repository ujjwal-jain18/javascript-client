import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'cursive',
      '"Comic Sans MS"',
      'sans-serif',
    ].join('.'),
    htmlFontSize: 10,
  },
});
