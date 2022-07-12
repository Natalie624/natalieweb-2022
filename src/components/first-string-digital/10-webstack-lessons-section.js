import * as React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Parallax } from 'react-scroll-parallax';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Row, Col } from 'react-bootstrap';
import GithubSVG from '../../svg/github.svg';
import LinkSVG from '../../svg/link.svg';
import BackSVG from '../../svg/back.svg';

import * as FSDStyle from './fsd.module.css';

const WebStackLessonsSection = () => (
  <StaticQuery query={graphql`
      query FsdDescription{
        contentfulFsdPageAssembly{
          fsdStackExplanation{
            subheadline
            description{
              raw
            }
          }
          fsdLessons{
            subheadline
            description{
              raw
            }
          }
        }
      }
    `}
  render = {data => (
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
          <h4 className={`section-subtitle mb-1rem`}>{data.contentfulFsdPageAssembly.fsdStackExplanation.subheadline}</h4>
          <div className={`mb-0rem`}>
            {renderRichText(data.contentfulFsdPageAssembly.fsdStackExplanation.description)}
          </div>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn='animate__fadeIn'
        animateOut='animate__fadeOut'
        offset={100}
      >
        <div className={FSDStyle.lessonsLearnedDiv}>
          <h4 className={`section-subtitle mb-1rem`}>{data.contentfulFsdPageAssembly.fsdLessons.subheadline}</h4>
          <div className={`mb-0rem`}>
            {renderRichText(data.contentfulFsdPageAssembly.fsdLessons.description)}
          </div>
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
  )}
  />
);

export default WebStackLessonsSection;
