import React from 'react';
import ProjectsStyles from '../styles/Projects.module.scss';
import Button from './Button';
import Image from 'next/image';

import { SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si';
import { Parallax } from 'react-scroll-parallax';

const Wasabi = () => {
  return (
    <div className={ProjectsStyles.container}>
      <div className={ProjectsStyles.mobile_images}>
        <Image src="/images/wasabi2.png" alt="Wasabi Project Mockup" width={2500} height={2500} />
      </div>
      <div className={ProjectsStyles.images}>
        <Parallax className={ProjectsStyles.image} y={[90, 0]} x={[10, 40]} tagOuter="figure">
          <Image src="/images/wasabi2.png" alt="Wasabi Project Mockup" width={500} height={500} />
        </Parallax>
        <Parallax className={ProjectsStyles.image} y={[120, 0]} x={[-10, -40]} tagOuter="figure">
          <Image src="/images/wasabi.png" alt="Wasabi Project Mockup" width={500} height={500} />
        </Parallax>
      </div>
      <h1>Wasabi</h1>
      <p>
      Javascript 2D game developed in a Bootcamp Project as a tribute to the most wonderful cat on earth.
      </p>
      <div className={ProjectsStyles.icons}>
        <span tooltip="Javascript" flow="up">
          <SiJavascript />
        </span>
        <span tooltip="HTML 5" flow="up">
          <SiHtml5 />
        </span>
        <span tooltip="CSS 3" flow="up">
          <SiCss3 />
        </span>
      </div>

      <div className={ProjectsStyles.bottom}>
        <a href="https://github.com/myriankatto/wasabi" target="_blank" rel="noreferrer">
          <Button title="Github" github />
        </a>
        <a href="https://dontfeedwasabi.netlify.app/" target="_blank" rel="noreferrer">
          <Button title="Project" />
        </a>
      </div>
    </div>
  );
};

export default Wasabi;
