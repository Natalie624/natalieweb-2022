import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Parallax } from 'react-scroll-parallax';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ReactStack from '../layout/tech-stack/01-react-tech-stack';
import GatsbyStack from '../layout/tech-stack/02-gatsby-tech-stack';
import GraphqlStack from '../layout/tech-stack/03-graphql-tech-stack';
import WordpressStack from '../layout/tech-stack/08-wordpress-tech-stack';
import CalendlyStack from '../layout/tech-stack/09-calendly-tech-stack';
import NetlifyStack from '../layout/tech-stack/07-netlify-tech-stack';

import * as FSDStyle from '../first-string-digital/fsd.module.css';

const TechStackSection = () => (
  <div className={`section section-bkgd-color ${FSDStyle.techStackSection}`}>
    <Parallax speed={-2.5}>
      <AnimationOnScroll
        animateIn='animate__fadeIn'
        animateOut='animate__fadeOut'
        offset={100}
      >
        <h4 className={`section-subtitle mb-2rem`}>Tech Stack</h4>
      </AnimationOnScroll>
      <Row>
        <Col className={FSDStyle.stackCol1}>
          <AnimationOnScroll
            animateIn='animate__fadeIn'
            animateOut='animate__fadeOut'
            offset={100}
          >
            <ReactStack />
          </AnimationOnScroll>
        </Col>
        <Col className={FSDStyle.stackCol2}>
          <AnimationOnScroll
            animateIn='animate__fadeIn'
            animateOut='animate__fadeOut'
            offset={100}
          >
            <GatsbyStack />
          </AnimationOnScroll>
        </Col>
        <Col className={FSDStyle.stackCol3}>
          <AnimationOnScroll
            animateIn='animate__fadeIn'
            animateOut='animate__fadeOut'
            offset={100}
          >
            <GraphqlStack />
          </AnimationOnScroll>
        </Col>
        <Col className={FSDStyle.stackCol4}>
          <AnimationOnScroll
            animateIn='animate__fadeIn'
            animateOut='animate__fadeOut'
            offset={100}
          >
            <WordpressStack />
          </AnimationOnScroll>
        </Col>
        <Col className={FSDStyle.stackCol5}>
          <AnimationOnScroll
            animateIn='animate__fadeIn'
            animateOut='animate__fadeOut'
            offset={100}
          >
            <CalendlyStack />
          </AnimationOnScroll>
        </Col>
        <Col className={FSDStyle.stackCol6}>
          <AnimationOnScroll
            animateIn='animate__fadeIn'
            animateOut='animate__fadeOut'
            offset={100}
          >
            <NetlifyStack />
          </AnimationOnScroll>
        </Col>
      </Row>
    </Parallax>
  </div>
);

export default TechStackSection;
