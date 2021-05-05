import React from 'react';
import Image from 'next/image';
import AboutStyles from '../styles/About.module.scss';

const About = () => {
  return (
    <div className={AboutStyles.container}>
      <div className={AboutStyles.content}>
        <div className={AboutStyles.text}>
          <h5>Hi, I'm Myrian 🦄</h5>
          <p>
            I'm a <strong>Japanese-Brazilian Barcelona-based Front-end Developer</strong> with a
            Graphic Design background. I'm interested in human-centered development and{' '}
            <strong>I want to make the web easy to use, beautiful and accessible to all.</strong>
          </p>
          <p>
            My main focus these days is building accessible and design-minded products and digital
            experiences. My interest in web development started back in 2020 after working with
            graphic design for about 8 years.
          </p>
          <p>
            In my free time, you can find me enjoying the beach 🏝 in Barcelona, experimenting a new
            recipe 🍲 or cuddling my two lovely cats 🐈.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <div className={AboutStyles.technologies}>
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>React Native</li>
            </ul>
            <ul>
              <li>Typescript</li>
              <li>SaSS</li>
              <li>Next.js</li>
            </ul>
            <ul>
              <li>Express</li>
              <li>Node.js</li>
              <li>Postman</li>
            </ul>
            <ul>
              <li>MongoDB</li>
              <li>Heroku</li>
              <li>Netlify</li>
            </ul>
          </div>
        </div>
        <div className={AboutStyles.image}>
          <Image src="/images/about-img.png" alt="Picture of the author" width={425} height={400} />
        </div>
      </div>
    </div>
  );
};

export default About;
