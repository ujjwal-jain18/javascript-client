import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

import { ChildrenDemo } from './pages/index';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ChildrenDemo />
      </ThemeProvider>
    </>
  );
}

export default App;
