import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import AgileCoachingImg1 from './09-agile-coaching-img1';
import FloaterDivs from './14-tab1-floater-divs';

import * as CoachingStyle from './coaching.module.css';

const TabOne = () => (
  <Row>
    <Col xl={5} sm={3} className={` ${CoachingStyle.tabCol1}`}>
      <AgileCoachingImg1 />
      <FloaterDivs />
    </Col>
    <Col xl={7} sm={9} className={`${CoachingStyle.tabCol2}`}>
      <div className={`vert-center ${CoachingStyle.tabDescription}`}>
        Retrospectives that actually encourage positive change. I encourage
        teams to ask "why" something happened using the 5 "whys" method to get
        to the root of the problem and solve from there. We then work to
        prioritize &amp; focus on one problem at a time. We try out a new
        solution, experiment and use empirical data to assess how it worked.
        Then we make incremental adjustments to the solution as necessary.
      </div>
    </Col>
  </Row>
);

export default TabOne;
