import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

import * as HeroStyle from './hero.module.css';

const HeroImg4 = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "hero-img-4.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);
  return (
    <GatsbyImage
      className={HeroStyle.heroImg4}
      alt='hero img 4'
      image={data.file.childImageSharp.gatsbyImageData}
    />
  );
};

export default HeroImg4;
