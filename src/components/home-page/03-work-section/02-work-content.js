import * as React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { StaticQuery, graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text"
import * as WorkStyle from './work.module.css';

const WorkContent = () => (
  <StaticQuery query={graphql`
      query MyWork{
        contentfulMainScreenAssembly{
          myWork{
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
      <h3 className={`section-title text-align-center mb-2rem`}>{data.contentfulMainScreenAssembly.myWork.headline}</h3>
      <div className={`text-align-center ${WorkStyle.workDescription}`}>
        {renderRichText(data.contentfulMainScreenAssembly.myWork.description)}
      </div>
    </AnimationOnScroll>
  </div>
)}
/>
  
);

export default WorkContent;
