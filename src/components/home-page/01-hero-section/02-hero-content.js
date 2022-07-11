import * as React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import * as HeroStyle from './hero.module.css';

const HersoContent = () => (
  <div className={`${HeroStyle.heroCol1Div}`}>
    <AnimationOnScroll
      animateIn='animate__fadeIn'
      animateOut='animate__fadeOut'
      offset={100}
    >
      <h1 className={HeroStyle.heroTitle}>Hi, I'm Natalie</h1>
      <p className={HeroStyle.heroSubtitle}>
        I ARCHITECT MODERN DIGITAL EXPERIENCE SYSTEMS
      </p>
      <p className={HeroStyle.heroDescription}>
        Ever since I was a young girl, I wanted to help build the cool,
        futuristic tech I saw in movies and on TV. Fast-forward years later - My
        background includes leading rock-star teams to produce amazing software
        products for Fortune 100 giants and bootstrapped start-ups alike. I
        focus on building mobile-first enterprise web systems and omnichannel
        digital experiences for growing companies. I’d love to see what I can
        help you with!
      </p>
      <a className={`purple-btn float-shadow ${HeroStyle.heroBtn}`} href='/'>
        Let's Chat
      </a>
    </AnimationOnScroll>
  </div>
);

export default HersoContent;
