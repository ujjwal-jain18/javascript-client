import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  typography: {
    htmlFontSize: 10,
    fontFamily: [
      'cursive',
      '"Comic Sans MS"',
      'sans-serif',
    ].join('.'),
  },
});
