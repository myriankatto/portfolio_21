import React from 'react';
import ProjectsStyles from '../styles/Projects.module.scss';
import Button from './Button';
import Image from 'next/image';

import { SiReact, SiRedux, SiSentry } from 'react-icons/si';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { FaSass } from 'react-icons/fa';
import { Parallax } from 'react-scroll-parallax';

const Projects = () => {
  return (
    <div className={ProjectsStyles.container}>
      <div className={ProjectsStyles.mobile_images}>
        <Image src="/images/newton.png" alt="Newton Project Mockup" width={2500} height={2500} />
      </div>
      <div className={ProjectsStyles.images}>
        <Parallax className={ProjectsStyles.image} y={[90, 0]} x={[10, 40]} tagOuter="figure">
          <Image src="/images/newton2.png" alt="Newton Project Mockup" width={500} height={500} />
        </Parallax>
        <Parallax className={ProjectsStyles.image} y={[120, 0]} x={[-10, -40]} tagOuter="figure">
          <Image src="/images/newton.png" alt="Newton Project Mockup" width={500} height={500} />
        </Parallax>
      </div>

      <h1>Newton Labs</h1>
      <p>
        Platform that combines AI and NLP to source candidates with optimal precision and speed.
      </p>
      <div className={ProjectsStyles.icons}>
        <span tooltip="React" flow="up">
          <SiReact />
        </span>
        <span tooltip="Redux" flow="up">
          <SiRedux />
        </span>
        <span tooltip="Sass" flow="up">
          <FaSass />
        </span>
        <span tooltip="Ant Design" flow="up">
          <AiOutlineAntDesign />
        </span>
        <span tooltip="Sentry" flow="up">
          <SiSentry />
        </span>
      </div>

      <div className={ProjectsStyles.bottom}>
        <a href="https://newton.ai" target="_blank">
          <Button title="View Newton" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
