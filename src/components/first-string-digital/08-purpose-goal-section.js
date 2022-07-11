import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import FSDImg4 from './09-fsd-img4';
import FloaterDivs from '../product-management/05-floater-divs';

import * as FSDStyle from './fsd.module.css';

const PurposeGoalSection = () => (
  <div className={`section`}>
    <Parallax speed={2.5}>
      <AnimationOnScroll
        animateIn='animate__fadeIn'
        animateOut='animate__fadeOut'
        offset={100}
      >
        <h4 className={`section-subtitle mb-1rem`}>
          Project Purpose &amp; Goal
        </h4>
        <p className={`mb-0rem`}>
          First String Digital started out as a custom web development agency
          targeting the restaurant industry. Over the course of 3 phases, it has
          evolved to a SaaS product that provides pre-made web templates that
          can be custom branded for restaurants. The first phase of this project
          allowed users to select a monthly or annual option then contact us for
          a consultation by filling out a form. Many of our interactions are
          with both Mexican and American clients, so we integrated a
          localization API for our Spanish-speaking audience. With the option to
          choose EN (English) or ES (Spanish) on the site, our client base can
          learn about our services in the language most native for them. In the
          second phase, we added online payments so users could simply sign up
          and pay for services without having to contact us first. In the third
          phase of the project, we have moved the product to a SaaS model where
          we are adding subscription services, and a customer portal to manage
          subscription upgrades/ downgrades or cancelations.
        </p>
      </AnimationOnScroll>
    </Parallax>
    <div className={FSDStyle.fsdImg4Div}>
      <AnimationOnScroll
        animateIn='animate__fadeIn'
        animateOut='animate__fadeOut'
        offset={100}
      >
        <FSDImg4 />
        <FloaterDivs />
      </AnimationOnScroll>
    </div>
  </div>
);

export default PurposeGoalSection;
