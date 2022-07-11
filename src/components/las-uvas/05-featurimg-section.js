import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import LasUvasImg2 from './06-las-uvas-img2';
import LasUvasImg3 from './07-las-uvas-img3';

import * as FSDStyle from '../first-string-digital/fsd.module.css';

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
            <LasUvasImg2 />
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
            <LasUvasImg3 />
          </div>
        </AnimationOnScroll>
      </Col>
    </Row>
  </div>
);

export default FeatureImgSection;
