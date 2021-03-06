import React from 'react';
import dynamic from 'next/dynamic';
import FooterStyles from '../styles/Footer.module.scss';

const Button = dynamic(() => import('../components/Button'));

const Footer = () => {
  return (
    <div className={FooterStyles.container}>
      <div></div>
      <div className={FooterStyles.schedule}>
        <p>Let's talk?</p>
        <a href="mailto:myriankatto@gmail.com" target="_blank" rel="noreferrer">
          <span>myriankatto@gmail.com</span>
        </a>
        <a href="https://calendly.com/myriankatto" target="_blank" rel="noreferrer">
          <Button title="Schedule Here" />
        </a>
      </div>
      <footer className={FooterStyles.footer}>
        <p>Myrian Katto @ 2021</p>
        <p>
          Developed with{' '}
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            React
          </a>{' '}
          and{' '}
          <a href="https://nextjs.org" target="_blank" rel="noreferrer">
            Next
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
