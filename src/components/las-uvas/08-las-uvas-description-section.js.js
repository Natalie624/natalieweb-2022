import * as React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Row, Col } from 'react-bootstrap';
import GithubSVG from '../../svg/github.svg';
import LinkSVG from '../../svg/link.svg';
import BackSVG from '../../svg/back.svg';

import * as FSDStyle from '../first-string-digital/fsd.module.css';

const LasUvasDescriptionSection = () => (
  <StaticQuery query={graphql`
      query LasUvasSection{
        contentfulLasUvasPageAssembly{
          luProjectPurpose{
            subheadline
            description{
              raw
            }
          }
          luStackExplanation{
            subheadline
            description{
              raw
            }
          }
          luLessons{
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
    className={`section section-bkgd-color`}
    style={{ paddingBottom: '100px' }}
  >
    <AnimationOnScroll
      animateIn='animate__fadeIn'
      animateOut='animate__fadeOut'
      offset={100}
    >
      <h4 className={`section-subtitle mb-1rem`}>{data.contentfulLasUvasPageAssembly.luProjectPurpose.subheadline}</h4>
      <div className={`mb-0rem`}>
        {renderRichText(data.contentfulLasUvasPageAssembly.luProjectPurpose.description)}
      </div>
    </AnimationOnScroll>
    <AnimationOnScroll
      animateIn='animate__fadeIn'
      animateOut='animate__fadeOut'
      offset={100}
    >
      <div className={FSDStyle.webstackExplinationDiv}>
        <h4 className={`section-subtitle mb-1rem`}>{data.contentfulLasUvasPageAssembly.luStackExplanation.subheadline}</h4>
        <div className={`mb-0rem`}>
          {renderRichText(data.contentfulLasUvasPageAssembly.luStackExplanation.description)}
        </div>
      </div>
    </AnimationOnScroll>
    <AnimationOnScroll
      animateIn='animate__fadeIn'
      animateOut='animate__fadeOut'
      offset={100}
    >
      <div className={FSDStyle.lessonsLearnedDiv}>
        <h4 className={`section-subtitle mb-1rem`}>{data.contentfulLasUvasPageAssembly.luLessons.subheadline}</h4>
        <div className={`mb-0rem`}>
          {renderRichText(data.contentfulLasUvasPageAssembly.luLessons.description)}
        </div>
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
  )}
  />
  
);

export default LasUvasDescriptionSection;
