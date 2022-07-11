import * as React from 'react';
import { Link } from 'gatsby';
import { Parallax } from 'react-scroll-parallax';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Row, Col } from 'react-bootstrap';
import BackSVG from '../../svg/back.svg';

import * as ProdMgmtStyle from './prod-mgmt.module.css';

const SkillsAndExperience = () => (
  <div
    className={`section section-bkgd-color ${ProdMgmtStyle.skillsExpSection}`}
  >
    <Parallax speed={-2.5}>
      <AnimationOnScroll
        animateIn='animate__fadeIn'
        animateOut='animate__fadeOut'
        offset={100}
      >
        <h4 className={`section-subtitle  mb-1rem`}>Skills &amp; Experience</h4>
      </AnimationOnScroll>
      <Row>
        <Col lg={6}>
          <AnimationOnScroll
            animateIn='animate__fadeIn'
            animateOut='animate__fadeOut'
            offset={100}
          >
            <div className={ProdMgmtStyle.skillsCol1Div}>
              <p>
                My background includes several years of hands-on skill
                development and training in online digital strategy. I continue
                to stay up to date on the latest trends in web technologies
                particularly headless CMS implementations, microservices, and
                serverless architecture. I'm a Contentful Certified Professional
                with expertise and experience in:
              </p>
              <ul>
                <li>Content Strategy</li>
                <li>Content Modeling</li>
                <li>Brand Strategy</li>
                <li>SEO</li>
                <li>Google Analystics</li>
                <li>Web Ccontent Accessibility Compliance (WCAG)</li>
              </ul>
            </div>
          </AnimationOnScroll>
        </Col>
        <Col lg={6}>
          <AnimationOnScroll
            animateIn='animate__fadeIn'
            animateOut='animate__fadeOut'
            offset={100}
          >
            <div className={ProdMgmtStyle.skillsCol2Div}>
              <p>
                I have a proven track-record spanning 10 years leading teams in
                an array of software products and service releases ranging from
                mobile applications to web platforms. My Product Management
                expertise includes:
              </p>
              <ul>
                <li>Competitive and market research and analysis.</li>
                <li>Consumer roadmap development and management.</li>
                <li>Product roadmap development and management.</li>
                <li>Budget/Timeline definition and management.</li>
                <li>Resource allocation and management.</li>
                <li>Scope definition and management.</li>
                <li>Contract proposals and service agreements.</li>
                <li>Executive, stakeholder and client briefings.</li>
              </ul>
            </div>
          </AnimationOnScroll>
        </Col>
      </Row>
    </Parallax>
    <div className={`previous-page-div`} style={{ width: '155px' }}>
      <Link to='/#work'>
        <BackSVG className={`back-svg`} />
        Previous Page
      </Link>
    </div>
  </div>
);

export default SkillsAndExperience;
