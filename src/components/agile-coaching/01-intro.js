import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import FadedLogoImg from '../layout/logo-faded';

import * as CoachingStyle from './coaching.module.css';

const Intro = () => (
  <div className={`section ${CoachingStyle.introSection}`}>
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
          Agile Coaching
        </h3>
        <p>
          I’ve been an agile practitioner for 15 years, specializing in both
          Scrum and Kanban. I’ve had the privilege of working with many great
          teams in many different environments. I’ve even been featured on the
          Scrum Master Toolbox podcast with Vasco Duarte, author of #NoEstimates
          - a book that has had an enormously positive impact on my work. These
          experiences provided me with the opportunity to try new things and
          apply different approaches that honed my skills &amp; refined the
          systems and processes I use today.
        </p>
      </AnimationOnScroll>
    </Parallax>
  </div>
);

export default Intro;
