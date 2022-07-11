import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

import * as FSDStyle from '../first-string-digital/fsd.module.css';

const LasUvasImg3 = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "las-uvas3.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);
  return (
    <GatsbyImage
      className={`content-align-center float-shadow white-btn ${FSDStyle.fsdImg3}`}
      alt='Las Uvas img'
      image={data.file.childImageSharp.gatsbyImageData}
    />
  );
};

export default LasUvasImg3;
