import * as React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { StaticQuery, graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text"
import * as StoryStyle from './story.module.css';

const StoryContent = () => (
  <StaticQuery query={graphql`
      query MyStory{
        allContentfulMainScreenAssembly{
          nodes{
            mainScreenTagline{
              tag
            }
            myStory{
              headline
              description{
                raw
              }
              
            }
          }
        }
      }
    `}
    render = {data => (
    <div>
    {/* Title */}
    <AnimationOnScroll
      animateIn='animate__fadeIn'
      animateOut='animate__fadeOut'
      offset={100}
    >
      <p className={`text-align-center ${StoryStyle.subtitle}`}>
        {data.allContentfulMainScreenAssembly.nodes[0].mainScreenTagline.tag}
      </p>
      <h2 className={`section-title text-align-center mb-2rem`}>{data.allContentfulMainScreenAssembly.nodes[0].myStory.headline}</h2>
    </AnimationOnScroll>

    {/* Description */}
    <AnimationOnScroll
      animateIn='animate__fadeIn'
      animateOut='animate__fadeOut'
      offset={100}
    >
      <div>
      {renderRichText(data.allContentfulMainScreenAssembly.nodes[0].myStory.description)}
      </div>
    </AnimationOnScroll>
  </div>
  )}
  />
);

export default StoryContent;
