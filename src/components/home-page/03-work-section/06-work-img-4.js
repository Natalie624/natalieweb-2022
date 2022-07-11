import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

import * as WorkStyle from './work.module.css';

const WorkImg4 = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "work-img-4.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);
  return (
    <GatsbyImage
      className={WorkStyle.workImg4}
      alt='work img'
      image={data.file.childImageSharp.gatsbyImageData}
    />
  );
};

export default WorkImg4;
