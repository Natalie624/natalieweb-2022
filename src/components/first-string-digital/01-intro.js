import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import FadedLogoImg from '../layout/logo-faded';

import * as FSDStyle from './fsd.module.css';

const Intro = () => (
  <div className={`section ${FSDStyle.introSection}`}>
    <Parallax speed={-5}>
      <FadedLogoImg />
    </Parallax>
    <Parallax speed={2.5}>
      <AnimationOnScroll
        animateIn='animate__fadeIn'
        animateOut='animate__fadeOut'
        offset={100}
      >
        <h3 className={`section-title text-align-center mb-2rem`}>
          First String Digital
        </h3>
        <p>
          First String Digital is a web app built with a Jamstack architecture.
          I built this application from scratch alongside my business partner
          &amp; designer using React, Gatsby, GraphQL, Netlify, Weglot, and
          Stripe. This project has required a lot of heavy lifting and provided
          an immense learning experience both in launching an eCommerce solution
          as well as providing monthly &amp; annual subscription options.
        </p>
      </AnimationOnScroll>
    </Parallax>
  </div>
);

export default Intro;
