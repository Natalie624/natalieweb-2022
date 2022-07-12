import * as React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { StaticQuery, graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text"
import * as ExpStyle from './experience.module.css';

const ExperienceContent = () => (
  <StaticQuery query={graphql`
      query MyExperience{
        contentfulMainScreenAssembly{
          myExperience{
            headline
            description{
              raw
            }
          }
        }
      }
    `}
  render = {data => (
    <div>
    <AnimationOnScroll
      animateIn='animate__fadeIn'
      animateOut='animate__fadeOut'
      offset={100}
    >
      <h3 className={`section-title text-align-center mb-2rem`}>{data.contentfulMainScreenAssembly.myExperience.headline}</h3>
      <p className={`text-align-center ${ExpStyle.expDescription}`}>
        {renderRichText(data.contentfulMainScreenAssembly.myExperience.description)}
      </p>
    </AnimationOnScroll>
  </div>
  )}
  />   
);

export default ExperienceContent;
