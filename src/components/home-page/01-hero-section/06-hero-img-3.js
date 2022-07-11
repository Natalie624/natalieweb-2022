import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

import * as HeroStyle from './hero.module.css';

const HeroImg3 = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "hero-img-3.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);
  return (
    <GatsbyImage
      className={HeroStyle.heroImg3}
      alt='hero img 3'
      image={data.file.childImageSharp.gatsbyImageData}
    />
  );
};

export default HeroImg3;
