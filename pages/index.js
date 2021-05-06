import React from 'react';

import Header from '../components/Header';
import Experience from '../components/Experience';
import About from '../components/About';
import Footer from '../components/Footer';
import styles from '../styles/Styles.module.scss';

export default function Home({ theme }) {
  return (
    <div>
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
      <Experience />
      <About />
      <Footer/>
    </div>
  );
}
