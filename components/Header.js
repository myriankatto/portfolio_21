import React from 'react';
import HeaderStyles from '../styles/Header.module.scss';
import { Cycler } from 'react-text-scrambler';

import { ChevronDown } from 'react-feather';

const Header = () => {
  const strings = ['human-centered', 'design-minded', 'creative-based'];
  return (
    <div className={HeaderStyles.container}>
      <div className={HeaderStyles.text}>
        <h6>Hi, I’m Myrian!</h6>
        <h1>
          I develop <br />
          <Cycler duration={4000} strings={strings} /> <br />
          experiences.
        </h1>
      </div>
      {/* <div className={HeaderStyles.arrow}>
        <ChevronDown size={30} /> 
      </div> */}
    </div>
  );
};

export default Header;
