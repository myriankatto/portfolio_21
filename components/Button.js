import React from 'react';
import ButtonStyles from '../styles/Button.module.scss';

const Button = ({ title }) => {
  return <div className={`${ButtonStyles.button} ${ButtonStyles.arrow}`}>{title}</div>;
};

export default Button;
