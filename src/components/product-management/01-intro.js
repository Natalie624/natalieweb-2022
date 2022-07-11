import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import FadedLogoImg from '../layout/logo-faded';

import * as ProdMgmtStyle from './prod-mgmt.module.css';

const Intro = () => (
  <div className={`section ${ProdMgmtStyle.introSection}`}>
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
          Digital Product Management
        </h3>
        <p>
          Over the past several years I have lead project teams in web redesigns
          and implementations. One of the larger, enterprise-level experiences I
          was involved with was leading a project team on the redesign of
          www.moneymanagement.org. I was accountable for all stages of the
          program beginning with product vision &amp; strategy (user journey
          mapping, personas, competitive metric analysis), project definition
          (budget, timeline, scope) to project design (wireframes, prototypes,
          design) then project execution (development and QA), and finally,
          project closing (post-mortem, launch, and internal training). The
          entire program consisted of three different projects: Overall site
          redesign, client DevOps enhancements, and CMS Analytics Strategy
          definition.
        </p>
      </AnimationOnScroll>
    </Parallax>
  </div>
);

export default Intro;
