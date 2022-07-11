import * as React from 'react';
import { Link } from 'gatsby';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Row, Col } from 'react-bootstrap';
import GithubSVG from '../../svg/github.svg';
import LinkSVG from '../../svg/link.svg';
import BackSVG from '../../svg/back.svg';

import * as FSDStyle from '../first-string-digital/fsd.module.css';

const LasUvasDescriptionSection = () => (
  <div
    className={`section section-bkgd-color`}
    style={{ paddingBottom: '100px' }}
  >
    <AnimationOnScroll
      animateIn='animate__fadeIn'
      animateOut='animate__fadeOut'
      offset={100}
    >
      <h4 className={`section-subtitle mb-1rem`}>Project Purpose &amp; Goal</h4>
      <p className={`mb-0rem`}>
        This project was started as an ambitious business concept to bring
        Mexican wines to international tourists staying in private villas while
        on vacation in Cabo San Lucas, Mexico. Many people visiting from outside
        of Mexico are often surprised to learn about Mexico’s fabulous wine
        country and its incredible wines. Using this web app, customers could
        select from 3 different tasting experiences - a basic wine &amp; cheese
        tasting, a more in-depth small bites &amp; wine tasting, or a full-blown
        4-course wine pairing with a professional chef and sommelier. Customers
        would schedule their in-home tasting experience directly using the web
        app with the integrated Calendly appointment scheduling API.
      </p>
    </AnimationOnScroll>
    <AnimationOnScroll
      animateIn='animate__fadeIn'
      animateOut='animate__fadeOut'
      offset={100}
    >
      <div className={FSDStyle.webstackExplinationDiv}>
        <h4 className={`section-subtitle mb-1rem`}>Webstack Explination</h4>
        <p className={`mb-0rem`}>
          This was my first web project using Jamstack architecture and honestly
          where I fell in love with the concept as a whole. I had been studying
          React and working on a Progressive Web App when I started learning
          more about Jamstack and its benefits. Therefore this project was
          purposefully built with the Gatsby framework because I felt that
          Gatsby provided a good base with lots of existing plugins available
          and great documentation from which to start this project. Gatsby also
          works pretty seamlessly with Netlify, which I had also chosen as my
          deployment platform. I deploy nearly all my sites using Netlify
          because it is fast, secure and, super intuitive to use without having
          to worry about a bunch of deployment obstacles. I chose to use
          headless WordPress as my CMS for this project as I had been using
          monolithic WordPress previously and I was curious as to how it would
          work as a headless option.
        </p>
      </div>
    </AnimationOnScroll>
    <AnimationOnScroll
      animateIn='animate__fadeIn'
      animateOut='animate__fadeOut'
      offset={100}
    >
      <div className={FSDStyle.lessonsLearnedDiv}>
        <h4 className={`section-subtitle mb-1rem`}>Lessones Learned</h4>
        <p className={`mb-0rem`}>
          Headless WordPress is a whole other beast but I gained a lot of great
          experience customizing the content authoring experience using Advanced
          Custom Fields and creating Custom Post Types. I also dove further into
          database work and the webserver working with MySQL &amp; Apache using
          MAMP for local development. Deploying everything live on our hosting
          platform (for the CMS) and Netlify (for the frontend UI) was also a
          learning challenge that provided me valuable insights. This was also
          my first experience with GraphQL and that was a fairly steep learning
          curve. I dove into learning how GraphQL queries work and hence how to
          best organize my content. Overall this was a great project and I had a
          lot of fun working with the different APIs and frameworks.
        </p>
      </div>
    </AnimationOnScroll>
    <div>
      <Row>
        <Col xl={2} lg={3} md={4}>
          <div className={`github-link-div`}>
            <a
              className='project-page-link'
              href='https://github.com/FirstStringDigital/LasUvas'
              target='_blank'
              rel='noreferrer'
            >
              <GithubSVG className={`github-svg`} />
              Source Code
            </a>
          </div>
        </Col>
        <Col xl={2} lg={3} md={4}>
          <div className={`website-link-div`}>
            <a
              className='project-page-link'
              href='https://thewinebar.netlify.app/'
              target='_blank'
              rel='noreferrer'
            >
              <LinkSVG className={`website-link-svg`} />
              Live website
            </a>
          </div>
        </Col>
        <Col xl={2} lg={3} md={4}>
          <div className={`previous-page-div`}>
            <Link className='project-page-link' to='/#work'>
              <BackSVG className={`back-svg`} />
              Previous Page
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default LasUvasDescriptionSection;
