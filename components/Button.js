import React from 'react';
import ButtonStyles from '../styles/Button.module.scss';

const Button = ({ title }) => {
  return (
    <div className={ButtonStyles.button}>
      {title} <img src="/images/arrow-left.svg" alt="" />
    </div>
  );
};

export default Button;
