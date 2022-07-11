import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

import * as ExpStyle from './experience.module.css';

const ExpImg2 = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "exp-img-2.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);
  return (
    <GatsbyImage
      className={ExpStyle.expImg2}
      alt='experience img'
      image={data.file.childImageSharp.gatsbyImageData}
    />
  );
};

export default ExpImg2;
