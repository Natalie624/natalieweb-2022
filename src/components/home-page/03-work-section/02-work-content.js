import * as React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import * as WorkStyle from './work.module.css';

const WorkContent = () => (
  <div>
    <AnimationOnScroll
      animateIn='animate__fadeIn'
      animateOut='animate__fadeOut'
      offset={100}
    >
      <h3 className={`section-title text-align-center mb-2rem`}>Work</h3>
      <p className={`text-align-center ${WorkStyle.workDescription}`}>
        I’m excited to share with you some of my accomplishments. Tap the icons
        below to learn more about my Agile coaching work, my experience as a
        Digital Product Manager, or take a look at some of my favorite personal
        web projects so far!
      </p>
    </AnimationOnScroll>
  </div>
);

export default WorkContent;
