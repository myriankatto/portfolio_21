import React from 'react';
import FooterStyles from '../styles/Footer.module.scss';
import Button from '../components/Button';

const Footer = () => {
  return (
    <div className={FooterStyles.container}>
      <div></div>
      <div className={FooterStyles.schedule}>
        <h4>Let's talk?</h4>
        <a href="mailto:myriankatto@gmail.com" target="_blank">
          <h6>myriankatto@gmail.com</h6>
        </a>
        <a href="https://calendly.com/myriankatto" target="_blank">
          <Button title="Schedule Here" />
        </a>
      </div>
      <footer className={FooterStyles.footer}>
        <p>Myrian Katto @ 2021</p>
        <p>
          Developed with{' '}
          <a href="https://reactjs.org" target="_blank">
            React
          </a>{' '}
          and{' '}
          <a href="https://nextjs.org" target="_blank">
            Next
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
