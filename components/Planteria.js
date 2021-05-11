import React from 'react';
import ProjectsStyles from '../styles/Projects.module.scss';
import Button from './Button';
import Image from 'next/image';

import { SiReact, SiTypescript, SiExpo } from 'react-icons/si';
import { Parallax } from 'react-scroll-parallax';

const Planteria = () => {
  return (
    <div className={ProjectsStyles.container}>
      <div className={ProjectsStyles.mobile_images} style={{ marginBottom: '3em' }}>
        <Image
          src="/images/planteria.png"
          alt="Planteria Project Mockup"
          width={400}
          height={466}
        />
      </div>
      <div className={ProjectsStyles.images}>
        <Parallax className={ProjectsStyles.image} y={[80, 0]} tagOuter="figure">
          <Image
            src="/images/planteria.png"
            alt="Planteria Project Mockup"
            width={400}
            height={466}
          />
        </Parallax>
      </div>
      <h1>Planteria</h1>

      <p>
        Planteria is a Plant Manager App that helps you to remember to take care of your plants.
      </p>
      <div className={ProjectsStyles.icons}>
        <span tooltip="React Native" flow="up">
          <SiReact />
        </span>
        <span tooltip="Typescript" flow="up">
          <SiTypescript />
        </span>
        <span tooltip="Expo" flow="up">
          <SiExpo />
        </span>
      </div>

      <div className={ProjectsStyles.bottom}>
        <a href="https://github.com/myriankatto/planteria" target="_blank">
          <Button title="Github" github />
        </a>
        <Button title="Project" />
      </div>
    </div>
  );
};

export default Planteria;
