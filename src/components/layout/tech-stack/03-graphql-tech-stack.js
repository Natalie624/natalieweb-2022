import * as React from 'react';
import GraphQLImg from './03a-graphql-img';

import * as StackStyle from './tech-stack.module.css';

const GraphqlStack = () => (
  <div>
    <div
      className={`content-align-center float-shadow white-btn ${StackStyle.stackDiv}`}
    >
      <GraphQLImg />
    </div>
    <p className={`text-align-center ${StackStyle.stackName}`}>GraphQL</p>
  </div>
);

export default GraphqlStack;
