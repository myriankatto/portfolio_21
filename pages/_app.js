import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../styles/ThemeConfig';
import { ParallaxProvider } from 'react-scroll-parallax';

import '../styles/globals.css';

const Nav = dynamic(() => import('../components/Nav'));

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light');
  };

  useEffect(() => {
    document.documentElement.lang = 'en-us';
  });

  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <ParallaxProvider>
        <GlobalStyles />
        <Nav toggleTheme={toggleTheme} theme={theme} />
        <Component {...pageProps} theme={theme} />{' '}
      </ParallaxProvider>
    </ThemeProvider>
  );
}

export default MyApp;
