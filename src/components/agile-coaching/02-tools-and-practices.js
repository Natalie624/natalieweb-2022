import * as React from 'react';
import { Link } from 'gatsby';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Row, Col } from 'react-bootstrap';
import TabOne from './03-tab1';
import TabTwo from './04-tab2';
import TabThree from './05-tab3';
import TabFour from './06-tab4';
import TabFive from './07-tab5';
import TabSix from './08-tab6';
import BackSVG from '../../svg/back.svg';

import * as CoachingStyle from './coaching.module.css';

const ToolsAndPractices = () => (
  <div className={`section section-bkgd-color ${CoachingStyle.toolsSection}`}>
    <AnimationOnScroll
      animateIn='animate__fadeIn'
      animateOut='animate__fadeOut'
      offset={100}
    >
      <h4 className={`section-subtitle mb-1rem`}>Tools &amp; Practices</h4>
      <p>
        The systems and processes I use better enable agile teams to succeed at
        delivering high-value, high-quality products for their stakeholders.
        Some of these systems &amp; processes include:
      </p>
    </AnimationOnScroll>
    <Row>
      {/* tab 1 */}
      <Col xl={6} className={`${CoachingStyle.tab}`}>
        <AnimationOnScroll
          animateIn='animate__fadeIn'
          animateOut='animate__fadeOut'
          offset={100}
        >
          <div className={`float-shadow white-btn ${CoachingStyle.tabDiv}`}>
            <TabOne />
          </div>
        </AnimationOnScroll>
      </Col>

      {/* tab 2 */}
      <Col xl={6} className={`${CoachingStyle.tab}`}>
        <AnimationOnScroll
          animateIn='animate__fadeIn'
          animateOut='animate__fadeOut'
          offset={100}
        >
          <div className={`float-shadow white-btn ${CoachingStyle.tabDiv}`}>
            <TabTwo />
          </div>
        </AnimationOnScroll>
      </Col>

      {/* tab 3 */}
      <Col xl={6} className={`${CoachingStyle.tab}`}>
        <AnimationOnScroll
          animateIn='animate__fadeIn'
          animateOut='animate__fadeOut'
          offset={100}
        >
          <div className={`float-shadow white-btn ${CoachingStyle.tabDiv}`}>
            <TabThree />
          </div>
        </AnimationOnScroll>
      </Col>

      {/* tab 4 */}
      <Col xl={6} className={`${CoachingStyle.tab}`}>
        <AnimationOnScroll
          animateIn='animate__fadeIn'
          animateOut='animate__fadeOut'
          offset={100}
        >
          <div className={`float-shadow white-btn ${CoachingStyle.tabDiv}`}>
            <TabFour />
          </div>
        </AnimationOnScroll>
      </Col>

      {/* tab 5 */}
      <Col xl={6} className={`${CoachingStyle.tab}`}>
        <AnimationOnScroll
          animateIn='animate__fadeIn'
          animateOut='animate__fadeOut'
          offset={100}
        >
          <div className={`float-shadow white-btn ${CoachingStyle.tabDiv}`}>
            <TabFive />
          </div>
        </AnimationOnScroll>
      </Col>

      {/* tab 6 */}
      <Col xl={6} className={`${CoachingStyle.tab}`}>
        <AnimationOnScroll
          animateIn='animate__fadeIn'
          animateOut='animate__fadeOut'
          offset={100}
        >
          <div className={`${CoachingStyle.tabLast}`}>
            <TabSix />
          </div>
        </AnimationOnScroll>
      </Col>
    </Row>
    <div className={`previous-page-div`} style={{ width: '155px' }}>
      <Link to='/#work'>
        <BackSVG className={`back-svg`} />
        Previous Page
      </Link>
    </div>
  </div>
);

export default ToolsAndPractices;
