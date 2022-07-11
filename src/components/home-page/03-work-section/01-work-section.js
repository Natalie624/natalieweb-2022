import * as React from 'react';
import { Link } from 'gatsby';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Row, Col } from 'react-bootstrap';
import WorkContent from './02-work-content';
import WorkImg1 from './03-work-img-1';
import WorkImg2 from './04-work-img-2';
import WorkImg3 from './05-work-img-3';
import WorkImg4 from './06-work-img-4';
import FloaterDivs from './07-floater-divs';

import * as WorkStyle from './work.module.css';

const WorkSection = () => (
  <div
    className={`section section-bkgd-color ${WorkStyle.workSection}`}
    id='work'
  >
    <WorkContent />

    <Row className={WorkStyle.workRow}>
      {/* tab 1 */}
      <Col lg={3} sm={6}>
        <AnimationOnScroll
          animateIn='animate__fadeIn'
          animateOut='animate__fadeOut'
          offset={100}
        >
          <div className={`float-shadow white-btn ${WorkStyle.workTab}`}>
            <WorkImg1 />
            <Link
              to='/agile-coaching'
              className={`float-shadow purple-btn ${WorkStyle.workLink}`}
            >
              Agile Coaching
            </Link>
          </div>
        </AnimationOnScroll>
      </Col>

      {/* tab 2 */}
      <Col lg={3} sm={6}>
        <AnimationOnScroll
          animateIn='animate__fadeIn'
          animateOut='animate__fadeOut'
          offset={100}
        >
          <div className={`float-shadow white-btn ${WorkStyle.workTab} `}>
            <WorkImg2 />
            <Link
              to='/product-management'
              className={`float-shadow purple-btn ${WorkStyle.workLink}`}
            >
              Product Management
            </Link>
          </div>
        </AnimationOnScroll>
      </Col>

      {/* tab 3 */}
      <Col lg={3} sm={6}>
        <AnimationOnScroll
          animateIn='animate__fadeIn'
          animateOut='animate__fadeOut'
          offset={100}
        >
          <div className={`float-shadow white-btn ${WorkStyle.workTab} `}>
            <WorkImg3 />
            <Link
              to='/first-string-digital-web-project'
              className={`float-shadow purple-btn ${WorkStyle.workLink}`}
            >
              First String Web Project
            </Link>
          </div>
        </AnimationOnScroll>
      </Col>

      {/* tab 4 */}
      <Col lg={3} sm={6}>
        <AnimationOnScroll
          animateIn='animate__fadeIn'
          animateOut='animate__fadeOut'
          offset={100}
        >
          <div className={`float-shadow white-btn ${WorkStyle.workTab} `}>
            <WorkImg4 />
            <Link
              to='/las-uvas-web-project'
              className={`float-shadow purple-btn ${WorkStyle.workLink}`}
            >
              Las Uvas Web Project
            </Link>
          </div>
        </AnimationOnScroll>
      </Col>
    </Row>
    <FloaterDivs />
  </div>
);

export default WorkSection;
