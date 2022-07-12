import * as React from 'react';
import { StaticQuery, graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Parallax } from 'react-scroll-parallax';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import FSDImg4 from './09-fsd-img4';
import FloaterDivs from '../product-management/05-floater-divs';

import * as FSDStyle from './fsd.module.css';

const PurposeGoalSection = () => (
  <StaticQuery query={graphql`
      query FsdPurpose{
        contentfulFsdPageAssembly{
          fsdProjectPurpose{
            subheadline
            description{
              raw
            }
          }
        }
      }
  `}
  render = {data => (
    <div className={`section`}>
    <Parallax speed={2.5}>
      <AnimationOnScroll
        animateIn='animate__fadeIn'
        animateOut='animate__fadeOut'
        offset={100}
      >
        <h4 className={`section-subtitle mb-1rem`}>
          {data.contentfulFsdPageAssembly.fsdProjectPurpose.subheadline}
        </h4>
        <div className={`mb-0rem`}>
          {renderRichText(data.contentfulFsdPageAssembly.fsdProjectPurpose.description)}
        </div>
      </AnimationOnScroll>
    </Parallax>
    <div className={FSDStyle.fsdImg4Div}>
      <AnimationOnScroll
        animateIn='animate__fadeIn'
        animateOut='animate__fadeOut'
        offset={100}
      >
        <FSDImg4 />
        <FloaterDivs />
      </AnimationOnScroll>
    </div>
  </div>
  )}
  />
);

export default PurposeGoalSection;
