import * as React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { StaticQuery, graphql } from "gatsby";
import * as HeroStyle from './hero.module.css';

const HersoContent = () => (
  <StaticQuery query={graphql`
    query HomeHeaderAssembly{
      allContentfulHomeHeaderAssembly{
        nodes{
          headline
          headerTag{
            tag
          }
          headerDescription{
            headerDescription
          }
        }
      }
    }
  `}
  render = {data => (
    <div className={`${HeroStyle.heroCol1Div}`}>
    <AnimationOnScroll
      animateIn='animate__fadeIn'
      animateOut='animate__fadeOut'
      offset={100}
    >
      <h1 className={HeroStyle.heroTitle}>{data.allContentfulHomeHeaderAssembly.nodes[0].headline}</h1>
      <div className={HeroStyle.heroSubtitle}>
        {data.allContentfulHomeHeaderAssembly.nodes[0].headerTag.tag}
      </div>
      <div className={HeroStyle.heroDescription}>
        {data.allContentfulHomeHeaderAssembly.nodes[0].headerDescription.headerDescription}
      </div>
      <a className={`purple-btn float-shadow ${HeroStyle.heroBtn}`} 
      href='mailto:natalie.cervantes@gmail.com'>
        Let's Chat
      </a>
    </AnimationOnScroll>
  </div>
  )}   
  />
);

export default HersoContent;
