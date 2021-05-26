import React from 'react';
import Image from 'next/image';
import AboutStyles from '../styles/About.module.scss';

const About = () => {
  return (
    <div className={AboutStyles.container}>
      <div className={AboutStyles.content}>
        <div className={AboutStyles.text}>
          <span>Hi, I'm Myrian</span>
          <p>I'm a Japanese-Brazilian frontend developer with a graphic design background.</p>{' '}
          <p>
            I'm interested in human-centered, accessible and design-minded development,
            <strong>
              {' '}
              I want to make the web easy to use, beautiful and accessible to everyone.
            </strong>
          </p>
          <p>
            My interest in development started when I was a teenager, I learned by myself how to
            create basic HTML and CSS templates for blogs. In 2012 I graduated in graphic design and
            had several great experiences. In the end of 2019 I decided to change my career.
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
