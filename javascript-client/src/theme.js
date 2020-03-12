import { createMuiTheme } from '@material-ui/core';

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
