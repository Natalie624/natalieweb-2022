import * as React from 'react';
import WeglotImg from './06a-weglot-img';

import * as StackStyle from './tech-stack.module.css';

const WeglotStack = () => (
  <div>
    <div
      className={`content-align-center float-shadow white-btn ${StackStyle.stackDiv}`}
    >
      <WeglotImg />
    </div>
    <p className={`text-align-center ${StackStyle.stackName}`}>
      Weglot Localization Translation API
    </p>
  </div>
);

export default WeglotStack;
