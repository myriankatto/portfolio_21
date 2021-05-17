import React from 'react';
import HeaderStyles from '../styles/Header.module.scss';
import { Cycler } from 'react-text-scrambler';

const Header = () => {
  const strings = ['human-centered', 'design-minded', 'creative-based'];
  return (
    <div className={HeaderStyles.container}>
      <div className={HeaderStyles.text}>
        <p>Hi, I’m Myrian!</p>
        <h1>
          I develop <br />
          <Cycler duration={4000} strings={strings} /> <br />
          experiences.
        </h1>
      </div>
    </div>
  );
};

export default Header;
