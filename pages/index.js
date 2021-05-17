import React from 'react';
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
      </Head>
      <div className={styles.spline}>
        <iframe
          src={
            theme === 'dark'
              ? 'https://my.spline.design/spline-d9e6800a4821d222a1d6a2d46a7d072c/'
              : 'https://my.spline.design/splinecopy-6ff8d48cfa08c095381aef44bb6653f8/'
          }
          frameborder="0"
        ></iframe>
      </div>
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
