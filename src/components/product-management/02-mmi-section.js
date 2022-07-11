import * as React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import MmiImg from './03-mmi-img';
import FloaterDivs from './05-floater-divs';

import * as ProdMgmtStyle from './prod-mgmt.module.css';

const MmiSection = () => (
  <div className={`section ${ProdMgmtStyle.mmiSection}`}>
    <AnimationOnScroll
      animateIn='animate__fadeIn'
      animateOut='animate__fadeOut'
      offset={100}
    >
      <MmiImg />
      <FloaterDivs />
    </AnimationOnScroll>
  </div>
);

export default MmiSection;
