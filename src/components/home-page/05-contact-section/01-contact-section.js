import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Row, Col } from 'react-bootstrap';
import ContactImg from './02-contact-img';
import FloaterDivs from './04-floater-divs';
import ContactContent from './03-contact-content';

import * as ContactStyle from './contact.module.css';

const ContactSection = () => (
  <div className={`section`}>
    <Parallax speed={5} translateY={['-25px', '50px']}>
      <AnimationOnScroll
        animateIn='animate__fadeIn'
        animateOut='animate__fadeOut'
        offset={100}
      >
        <div className={`float-shadow white-btn ${ContactStyle.floatBox}`}>
          <Row>
            <Col lg={6} className={ContactStyle.contactCol1}>
              <ContactImg />
              <FloaterDivs />
            </Col>
            <Col lg={6}>
              <ContactContent />
            </Col>
          </Row>
        </div>
      </AnimationOnScroll>
    </Parallax>
  </div>
);

export default ContactSection;
