import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

import * as ProdMgmtStyle from './prod-mgmt.module.css';

const MmiImg = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "mmi-img.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);
  return (
    <GatsbyImage
      className={`content-align-center float-shadow white-btn ${ProdMgmtStyle.mmiImg}`}
      alt='MMI img'
      image={data.file.childImageSharp.gatsbyImageData}
    />
  );
};

export default MmiImg;
