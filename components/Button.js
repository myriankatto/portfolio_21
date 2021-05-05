import React from 'react';
import ButtonStyles from '../styles/Button.module.scss';

const Button = ({ title, theme }) => {
  return (
    <div className={ButtonStyles.button}>
      {title}
      <img
        src={theme === 'dark' ? '/images/arrow-left.svg' : '/images/arrow-left-dark.svg'}
        alt=""
      />
    </div>
  );
};

export default Button;
