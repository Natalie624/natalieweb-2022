import * as React from 'react';
import GatsbyImg from './02a-gatsby-img';

import * as StackStyle from './tech-stack.module.css';

const GatsbyStack = () => (
  <div>
    <div
      className={`content-align-center float-shadow white-btn ${StackStyle.stackDiv}`}
    >
      <GatsbyImg />
    </div>
    <p className={`text-align-center ${StackStyle.stackName}`}>Gatsby</p>
  </div>
);

export default GatsbyStack;
