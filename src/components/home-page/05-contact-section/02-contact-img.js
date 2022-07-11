import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

import * as ContactStyle from './contact.module.css';

const ContactImg = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "contact-img.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);
  return (
    <GatsbyImage
      className={ContactStyle.contactImg}
      alt='contact img'
      image={data.file.childImageSharp.gatsbyImageData}
    />
  );
};

export default ContactImg;
