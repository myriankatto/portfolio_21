import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../components/Header'));
const Experience = dynamic(() => import('../components/Experience'));
const About = dynamic(() => import('../components/About'));
const Newton = dynamic(() => import('../components/Newton'));
const Imagible = dynamic(() => import('../components/Imagible'));
const Wasabi = dynamic(() => import('../components/Wasabi'));
const Planteria = dynamic(() => import('../components/Planteria'));
const Footer = dynamic(() => import('../components/Footer'));

import styles from '../styles/Styles.module.scss';

export default function Home({ theme }) {
  const [loadSpline, setLoadSpline] = useState(false);

  useEffect(() => {
    let timer1 = setTimeout(() => setLoadSpline(true), 100);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Myrian Katto</title>
        <meta name="title" content="Myrian Katto" />
        <meta name="description" content="Frontend Developer based in Barcelona." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://myriankatto.com" />
        <meta property="og:title" content="Myrian Katto" />
        <meta property="og:description" content="Frontend developer based in Barcelona." />
        <meta property="og:image" content="https://i.ibb.co/9G0snX6/Frame-3-1.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://myriankatto.com" />
        <meta property="twitter:title" content="Myrian Katto" />
        <meta property="twitter:description" content="Frontend developer based in Barcelona." />
        <meta property="twitter:image" content="https://i.ibb.co/9G0snX6/Frame-3-1.png" />

        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="apple-mobile-web-app-status-bar" content="#232323" />
        <meta name=" theme-color" content="#232323" />

      </Head>
      {loadSpline && (
        <div className={styles.spline}>
          <iframe
            src={
              theme === 'dark'
                ? 'https://my.spline.design/spline-d9e6800a4821d222a1d6a2d46a7d072c/'
                : 'https://my.spline.design/splinecopy-6ff8d48cfa08c095381aef44bb6653f8/'
            }
            frameBorder="0"
            title="spline"
          ></iframe>
        </div>
      )}
      <Header />
      <About />
      <Newton />
      <Imagible />
      <Planteria />
      <Wasabi />
      <Experience />
      <Footer />
    </div>
  );
}
