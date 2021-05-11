import React from 'react';
import Link from 'next/link';

import { FaSun, FaMoon, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import NavStyles from '../styles/Nav.module.scss';

const Nav = ({ theme, toggleTheme }) => {
  return (
    <nav className={NavStyles.nav}>
      <div className={NavStyles.container}>
        <div className={NavStyles.logo}>
          <Link href="/">myriankatto</Link>
        </div>
        <div className={NavStyles.theme} onClick={toggleTheme}>
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </div>
        <div className={NavStyles.links}>
          <a href="https://github.com/myriankatto" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/myrian-katto-2792a921/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="mailto:myriankatto@gmail.com" target="_blank">
            <MdEmail />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
