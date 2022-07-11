import * as React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import FloaterDivs from './02a-floater-divs';
import FSDImg1 from './03-fsd-img1';
import * as FSDStyle from './fsd.module.css';

const FsdImg1Section = () => (
  <div className={`section ${FSDStyle.fsdImg1Section}`}>
    <AnimationOnScroll
      animateIn='animate__fadeIn'
      animateOut='animate__fadeOut'
      offset={100}
    >
      <FSDImg1 />
      <FloaterDivs />
    </AnimationOnScroll>
  </div>
);

export default FsdImg1Section;
