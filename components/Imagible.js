import React from 'react';
import ProjectsStyles from '../styles/Projects.module.scss';
import Button from './Button';
import Image from 'next/image';

import { SiReact, SiAmazonaws, SiMicrosoftazure, SiNodeDotJs } from 'react-icons/si';
import { FaSass } from 'react-icons/fa';
import { Parallax } from 'react-scroll-parallax';

const Imagible = () => {
  return (
    <div className={ProjectsStyles.container}>
      <div className={ProjectsStyles.mobile_images}>
        <Image src="/images/imagible2.png" alt="Imagible Project Mockup" width={2500} height={2500} />
      </div>
      <div className={ProjectsStyles.images}>
        <Parallax className={ProjectsStyles.image} y={[90, 5]} x={[10, 40]} tagOuter="figure">
          <Image src="/images/imagible.png" alt="Imagible Project Mockup" width={500} height={500} />
        </Parallax>
        <Parallax className={ProjectsStyles.image} y={[120, 5]} x={[-10, -40]} tagOuter="figure">
          <Image src="/images/imagible2.png" alt="Imagible Project Mockup" width={500} height={500} />
        </Parallax>
      </div>

      <h1>Imagible</h1>
      <p>
        Open source project developed to create accessible images using AI from Microsoft Computer Vision.
      </p>
      <div className={ProjectsStyles.icons}>
        <span tooltip="React" flow="up">
          <SiReact />
        </span>
        <span tooltip="Sass" flow="up">
          <FaSass />
        </span>
        <span tooltip="Microsoft Azure Computer Vision" flow="up">
          <SiMicrosoftazure />
        </span>
        <span tooltip="Node" flow="up">
          <SiNodeDotJs />
        </span>
        <span tooltip="Amazon Web Services" flow="up">
          <SiAmazonaws />
        </span>
      </div>

        <div className={ProjectsStyles.bottom}>
          <a href="https://github.com/myriankatto/imagible" target="_blank" rel="noreferrer">
            <Button title="Github" github />
          </a>
          <a href="https://imagible.herokuapp.com" target="_blank" rel="noreferrer">
            <Button title="Project" />
          </a>
        </div>
   
    </div>
  );
};

export default Imagible;
