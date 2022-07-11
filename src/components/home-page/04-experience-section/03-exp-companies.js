import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ExpImg1 from './04-exp-img-1';
import ExpImg2 from './05-exp-img-2';
import ExpImg3 from './06-exp-img-3';
import ExpImg4 from './07-exp-img-4';
import ExpImg5 from './08-exp-img-5';

// import * as ExpStyle from './experience.module.css';

const ExperienceCompanies = () => (
  <Row>
    <Col>
      <AnimationOnScroll
        animateIn='animate__fadeIn'
        animateOut='animate__fadeOut'
        offset={100}
      >
        <ExpImg1 />
      </AnimationOnScroll>
    </Col>
    <Col>
      <AnimationOnScroll
        animateIn='animate__fadeIn'
        animateOut='animate__fadeOut'
        offset={100}
      >
        <ExpImg2 />
      </AnimationOnScroll>
    </Col>
    <Col>
      <AnimationOnScroll
        animateIn='animate__fadeIn'
        animateOut='animate__fadeOut'
        offset={100}
      >
        <ExpImg3 />
      </AnimationOnScroll>
    </Col>
    <Col>
      <AnimationOnScroll
        animateIn='animate__fadeIn'
        animateOut='animate__fadeOut'
        offset={100}
      >
        <ExpImg4 />
      </AnimationOnScroll>
    </Col>
    <Col>
      <AnimationOnScroll
        animateIn='animate__fadeIn'
        animateOut='animate__fadeOut'
        offset={100}
      >
        <ExpImg5 />
      </AnimationOnScroll>
    </Col>
  </Row>
);

export default ExperienceCompanies;
