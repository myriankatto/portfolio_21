import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faSun, faMoon } from '@fortawesome/fontawesome-free-solid';

import NavStyles from '../styles/Nav.module.scss';

const Nav = ({ theme, toggleTheme }) => {
  return (
    <nav className={NavStyles.nav}>
      <div className={NavStyles.container}>
        <div className={NavStyles.logo}>
          <Link href="/">myriankatto</Link>
        </div>
        <div className={NavStyles.theme} onClick={toggleTheme}>
          {theme === 'dark' ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
        </div>
        <div className={NavStyles.links}>
          <a href="https://github.com/myriankatto" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/myrian-katto-2792a921/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />{' '}
          </a>
          <a href="mailto:myriankatto@gmail.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} />{' '}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
