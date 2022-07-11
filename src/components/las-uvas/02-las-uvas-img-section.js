import * as React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import FloaterDivs from '../first-string-digital/02a-floater-divs';
import LasUvasImg1 from './03-las-uvas-img1';

import * as FSDStyle from '../first-string-digital/fsd.module.css';

const LasUvasImg1Section = () => (
  <div className={`section ${FSDStyle.fsdImg1Section}`}>
    <AnimationOnScroll
      animateIn='animate__fadeIn'
      animateOut='animate__fadeOut'
      offset={100}
    >
      <LasUvasImg1 />
      <FloaterDivs />
    </AnimationOnScroll>
  </div>
);

export default LasUvasImg1Section;
