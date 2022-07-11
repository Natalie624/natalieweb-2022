import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Parallax } from 'react-scroll-parallax';
import HersoContent from './02-hero-content';
import FloaterDivs from './08-floater-divs';
import ProfileImg from './03-profile-img';
import HeroImg1 from './04-hero-img-1';
import HeroImg2 from './05-hero-img-2';
import HeroImg3 from './06-hero-img-3';
import HeroImg4 from './07-hero-img-4';

import * as HeroStyle from './hero.module.css';

const HeroSection = () => (
  <div>
    <Row>
      <Col lg={6}>
        <Parallax speed={5}>
          <HersoContent />
        </Parallax>
      </Col>
      <Col className={` ${HeroStyle.heroCol2}`} lg={6}>
        <div className={HeroStyle.heroCol2Div}></div> {/* blue background*/}
        <ProfileImg />
        <FloaterDivs />
        {/* img 1 */}
        <Parallax speed={5}>
          <HeroImg1 />
        </Parallax>
        {/* img 2 */}
        <Parallax speed={3}>
          <HeroImg2 />
        </Parallax>
        {/* img 3 */}
        <Parallax speed={4}>
          <HeroImg3 />
        </Parallax>
        {/* img 4 */}
        <Parallax speed={1}>
          <HeroImg4 />
        </Parallax>
      </Col>
    </Row>
  </div>
);

export default HeroSection;
