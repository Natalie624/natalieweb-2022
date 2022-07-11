import * as React from 'react';
import { Link } from 'gatsby';
import { Parallax } from 'react-scroll-parallax';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Row, Col } from 'react-bootstrap';
import GithubSVG from '../../svg/github.svg';
import LinkSVG from '../../svg/link.svg';
import BackSVG from '../../svg/back.svg';

import * as FSDStyle from './fsd.module.css';

const WebStackLessonsSection = () => (
  <div
    className={`section section-bkgd-color ${FSDStyle.webstackLessonsSection}`}
  >
    <Parallax speed={-2.5}>
      <AnimationOnScroll
        animateIn='animate__fadeIn'
        animateOut='animate__fadeOut'
        offset={100}
      >
        <div>
          <h4 className={`section-subtitle mb-1rem`}>Webstack Explination</h4>
          <p className={`mb-0rem`}>
            The Jamstack architecture style was chosen due to its light-weight
            nature and flexible use of APIs. I also love the flexibility of use
            with headless CMSs and the ability to separate the content from the
            presentation. This all lent itself to a workable microservice
            architecture. Gatsby is a static site generator (SSG) but to call it
            that almost sounds a bit misleading. We chose Gatsby because it is
            so much more than an SSG (allowing for dynamic runtime updates via
            APIs) and includes a plethora of easy-to-integrate plugins including
            GraphQL and Contentful. We chose Stripe as our payment processor
            because we felt it would better allow for the customizations we
            wanted and would scale better than other options available. Weglot
            was chosen as our translation service because they provided great
            live localization services and automated translations.
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
            This project has been incredible as far as stretching my knowledge
            and growing my skillset. Not only did I increase my knowledge in
            basic React programming but dove deep into several challenges. I
            learned how to use React hooks, programmatically create Contentful
            content models, use GraphQL queries using the StaticQueryAPI from
            Gatsby, programmatically render rich text from Contentful content
            types, use React state management, and how to implement a custom
            checkout workflow with Stripe. All of this included learning about
            API integration and lots of refactoring as I continue to learn about
            better code structure and organization. The list goes on and I could
            talk about it for hours but feel free to check out the code.
          </p>
        </div>
      </AnimationOnScroll>
    </Parallax>
    <div>
      <Row>
        <Col xl={2} lg={3} md={4}>
          <div className={`github-link-div`}>
            <a
              className='project-page-link'
              href='https://github.com/Natalie624/FirstStringWeb'
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
              href='https://firststringdigital.com/'
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

export default WebStackLessonsSection;
