import * as React from 'react';
import { StaticQuery, graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Parallax } from 'react-scroll-parallax';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import FadedLogoImg from '../layout/logo-faded';

import * as FSDStyle from './fsd.module.css';

const Intro = () => (
  <StaticQuery query={graphql`
      query FirstStringIntro{
        contentfulFsdPageAssembly{
          fsdHeading{
            headline
            description{
              raw
            }
          }
        }
      }
    `}
  render = {data => (
    <div className={`section ${FSDStyle.introSection}`}>
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
          {data.contentfulFsdPageAssembly.fsdHeading.headline}
        </h3>
        <div>
          {renderRichText(data.contentfulFsdPageAssembly.fsdHeading.description)}
        </div>
      </AnimationOnScroll>
    </Parallax>
  </div>
 )}
/>
 );

export default Intro;
