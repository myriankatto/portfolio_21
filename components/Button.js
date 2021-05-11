import React from 'react';
import ButtonStyles from '../styles/Button.module.scss';

const Button = ({ title, github }) => {
  return (
    <div
      className={github ? `${ButtonStyles.button}` : `${ButtonStyles.button} ${ButtonStyles.arrow}`}
    >
      {title}
    </div>
  );
};

export default Button;
