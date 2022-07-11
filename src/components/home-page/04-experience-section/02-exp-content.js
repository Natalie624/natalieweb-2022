import * as React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import * as ExpStyle from './experience.module.css';

const ExperienceContent = () => (
  <div>
    <AnimationOnScroll
      animateIn='animate__fadeIn'
      animateOut='animate__fadeOut'
      offset={100}
    >
      <h3 className={`section-title text-align-center mb-2rem`}>Experience</h3>
      <p className={`text-align-center ${ExpStyle.expDescription}`}>
        I’ve worked with and led rock-star agile teams to produce next-level
        applications and experiences for clients such as:
      </p>
    </AnimationOnScroll>
  </div>
);

export default ExperienceContent;
