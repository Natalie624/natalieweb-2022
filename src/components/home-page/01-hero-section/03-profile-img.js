import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

import * as HeroStyle from './hero.module.css';

const ProfileImg = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);
  return (
    <GatsbyImage
      className={HeroStyle.profileImg}
      alt='profile'
      image={data.file.childImageSharp.gatsbyImageData}
    />
  );
};

export default ProfileImg;
