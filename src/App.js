import React from 'react';
import Routes from './routes';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './theme';

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </div>
  );
};

export default App;
