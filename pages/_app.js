import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme, GlobalStyles } from '../styles/ThemeConfig';
import '../styles/globals.css';

import Nav from '../components/Nav';
import Loader from '../components/Loader';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark');

  
  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light');

  };

  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Nav toggleTheme={toggleTheme} theme={theme} />
      <Component {...pageProps} theme={theme} />
    </ThemeProvider>
  );
}

export default MyApp;
