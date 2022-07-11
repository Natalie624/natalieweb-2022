import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

import * as StackStyle from './tech-stack.module.css';

const ReactImg = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "react.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);
  return (
    <GatsbyImage
      className={` content-align-center ${StackStyle.stackImg}`}
      alt='React img'
      image={data.file.childImageSharp.gatsbyImageData}
    />
  );
};

export default ReactImg;
