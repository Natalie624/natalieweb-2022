import * as React from 'react';
import ReactImg from './01a-react-img';

import * as StackStyle from './tech-stack.module.css';

const ReactStack = () => (
  <div>
    <div
      className={`content-align-center float-shadow white-btn ${StackStyle.stackDiv}`}
    >
      <ReactImg />
    </div>
    <p className={`text-align-center ${StackStyle.stackName}`}>React</p>
  </div>
);

export default ReactStack;
