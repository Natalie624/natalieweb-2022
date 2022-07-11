import * as React from 'react';
import ContentfulImg from './04a-contentful-img';

import * as StackStyle from './tech-stack.module.css';

const ContentfulStack = () => (
  <div>
    <div
      className={`content-align-center float-shadow white-btn ${StackStyle.stackDiv}`}
    >
      <ContentfulImg />
    </div>
    <p className={`text-align-center ${StackStyle.stackName}`}>Contentful</p>
  </div>
);

export default ContentfulStack;
