import * as React from 'react';
import { StaticQuery, graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text"
import * as ContactStyle from './contact.module.css';

const ContactContent = () => (
  <StaticQuery query={graphql`
      query LetsMeet{
        contentfulMainScreenAssembly{
          letsMeet{
            headline
            description{
              raw
            }
          }
        }
      }
    `}
    render = {data => (
      <div>
      <h3 className={`section-title mb-2rem ${ContactStyle.contactTitle}`}>
        {data.contentfulMainScreenAssembly.letsMeet.headline}
      </h3>
      <p className={ContactStyle.contactDescription}>
        {renderRichText(data.contentfulMainScreenAssembly.letsMeet.description)}
      </p>
      <a
        className={`purple-btn float-shadow ${ContactStyle.contactBtn}`}
        href='mailto:natalie.cervantes@gmail.com'
      >
        Get In Touch
      </a>
    </div>
    )}
    />
);

export default ContactContent;
