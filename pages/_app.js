import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme, GlobalStyles } from '../styles/ThemeConfig';
import '../styles/globals.css';

import Nav from '../components/Nav';
import Loader from '../components/Loader';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(false);

  
  const toggleTheme = () => {
    setLoading(true);
    theme == 'light' ? setTheme('dark') : setTheme('light');
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  };

  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Nav toggleTheme={toggleTheme} theme={theme} />
      {loading ? <Loader /> : <Component {...pageProps} theme={theme} />}
    </ThemeProvider>
  );
}

export default MyApp;
