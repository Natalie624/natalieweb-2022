import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

const FadedLogoImg = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "faded-logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);
  return (
    <GatsbyImage
      className={`faded-logo`}
      alt='logo background'
      image={data.file.childImageSharp.gatsbyImageData}
    />
  );
};

export default FadedLogoImg;
