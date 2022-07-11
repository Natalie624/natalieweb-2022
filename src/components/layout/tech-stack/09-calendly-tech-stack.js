import * as React from 'react';
import CalendlyImg from './09a-calendly-img';

import * as StackStyle from './tech-stack.module.css';

const CalendlyStack = () => (
  <div>
    <div
      className={`content-align-center float-shadow white-btn ${StackStyle.stackDiv}`}
    >
      <CalendlyImg />
    </div>
    <p className={`text-align-center ${StackStyle.stackName}`}>Calendly</p>
  </div>
);

export default CalendlyStack;
