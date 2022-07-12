import * as React from 'react';
import { StaticQuery, graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Parallax } from 'react-scroll-parallax';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import FadedLogoImg from '../layout/logo-faded';

import * as CoachingStyle from './coaching.module.css';

const Intro = () => (
  <StaticQuery query={graphql`
      query AgileIntro{
        contentfulAgilePageAssembly{
          agileHeading{
            headline
            description{
              raw
            }
          }
        }
      }
    `}
  render = {data => (
    <div className={`section ${CoachingStyle.introSection}`}>
    <Parallax speed={-5}>
      <FadedLogoImg />
    </Parallax>
    <Parallax speed={2.5}>
      <AnimationOnScroll
        animateIn='animate__fadeIn'
        animateOut='animate__fadeOut'
        offset={100}
      >
        <h3 className={`section-title text-align-center mb-2rem`}>
          {data.contentfulAgilePageAssembly.agileHeading.headline}
        </h3>
        <p>
          {renderRichText(data.contentfulAgilePageAssembly.agileHeading.description)}
        </p>
      </AnimationOnScroll>
    </Parallax>
  </div>
  )}
  />
);

export default Intro;
