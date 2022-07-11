import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import * as CoachingStyle from './coaching.module.css';

const TabSix = () => (
  <Row>
    <Col className={`${CoachingStyle.tabColLast}`}>
      <div className={`vert-center ${CoachingStyle.tabDescription}`}>
        These are a few of my top "agile best practices" that I bring to the
        table when working with any product implementation team.
      </div>
    </Col>
  </Row>
);

export default TabSix;
