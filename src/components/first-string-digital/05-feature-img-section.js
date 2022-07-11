import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import FSDImg2 from './06-fsd-img2';
import FSDImg3 from './07-fsd-img3';

import * as FSDStyle from './fsd.module.css';

const FeatureImgSection = () => (
  <div className={`section`}>
    <Row>
      <Col lg={6}>
        <AnimationOnScroll
          animateIn='animate__fadeIn'
          animateOut='animate__fadeOut'
          offset={100}
        >
          <div className={`${FSDStyle.featureImgCol1Div}`}>
            <FSDImg2 />
          </div>
        </AnimationOnScroll>
      </Col>
      <Col lg={6}>
        <AnimationOnScroll
          animateIn='animate__fadeIn'
          animateOut='animate__fadeOut'
          offset={100}
        >
          <div className={`${FSDStyle.featureImgCol2Div}`}>
            <FSDImg3 />
          </div>
        </AnimationOnScroll>
      </Col>
    </Row>
  </div>
);

export default FeatureImgSection;
