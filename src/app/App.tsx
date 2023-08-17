import React from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import { Router } from '../router';
import { darkTheme, lightTheme } from '../theme';
import { useAppSelector } from '../shared';

const App = () => {
  const prefersDarkMode = useAppSelector((state) => state.theme);
  const theme = React.useMemo(() => (prefersDarkMode ? darkTheme : lightTheme), [prefersDarkMode]);
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
