import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faSun, faMoon } from '@fortawesome/fontawesome-free-solid';

import NavStyles from '../styles/Nav.module.scss';

const Nav = ({ theme, toggleTheme }) => {
  return (
    <nav className={NavStyles.nav}>
      <div className={NavStyles.container}>
        <div className={NavStyles.logo}>myriankatto</div>
        <div className={NavStyles.theme} onClick={toggleTheme}>
          {theme === 'dark' ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
        </div>
        <div className={NavStyles.links}>
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
