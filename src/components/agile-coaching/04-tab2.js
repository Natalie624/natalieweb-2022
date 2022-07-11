import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import AgileCoachingImg2 from './10-agile-coaching-img2';
import FloaterDivs from './15-tab2-floater-divs';

import * as CoachingStyle from './coaching.module.css';

const TabTwo = () => (
  <Row>
    <Col xl={5} sm={3} className={` ${CoachingStyle.tabCol1}`}>
      <AgileCoachingImg2 />
      <FloaterDivs />
    </Col>
    <Col xl={7} sm={9} className={`${CoachingStyle.tabCol2}`}>
      <div className={`vert-center ${CoachingStyle.tabDescription}`}>
        Quality front and center. I favor collaboration with key stakeholders on
        a consistent and iterative basis to define acceptance criteria. Teams
        would ideally do this at the start of each sprint or iteration during
        planning. This ensures everyone is on the same page as to what the
        definition of success for each feature looks like.
      </div>
    </Col>
  </Row>
);

export default TabTwo;
