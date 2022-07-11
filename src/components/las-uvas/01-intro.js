import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import FadedLogoImg from '../layout/logo-faded';

import * as FSDStyle from '../first-string-digital/fsd.module.css';

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
          Las Uvas Wine Tasting
        </h3>
        <p>
          Las Uvas Wine Tasting was a conceptual project built as a web app for
          users to schedule in-home wine tasting experiences. This web app was
          built from scratch using React, Gatsby, Calendly, headless WordPress,
          and Netlify. With this project, I obtained my first foray into GraphQL
          and working with headless CMS APIs along with using the Gatsby
          framework.
        </p>
      </AnimationOnScroll>
    </Parallax>
  </div>
);

export default Intro;
