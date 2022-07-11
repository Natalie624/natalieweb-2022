import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

import * as FSDStyle from './fsd.module.css';

const FsdImg3 = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "fsd-3.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);
  return (
    <GatsbyImage
      className={`content-align-center float-shadow white-btn ${FSDStyle.fsdImg3}`}
      alt='FSD img'
      image={data.file.childImageSharp.gatsbyImageData}
    />
  );
};

export default FsdImg3;
