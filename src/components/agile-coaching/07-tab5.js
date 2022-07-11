import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import AgileCoachingImg5 from './13-agile-coaching-img5';
import FloaterDivs from './18-tab5-floater-divs';

import * as CoachingStyle from './coaching.module.css';

const TabFive = () => (
  <Row>
    <Col xl={5} sm={3} className={` ${CoachingStyle.tabCol1}`}>
      <AgileCoachingImg5 />
      <FloaterDivs />
    </Col>
    <Col xl={7} sm={9} className={`${CoachingStyle.tabCol2}`}>
      <div className={`vert-center ${CoachingStyle.tabDescription}`}>
        A faster, more efficient way to track progress. I focus on forecasting
        progress based on actual data versus attempting to precisely estimate
        effort. Volumes of research and statics prove estimates are nearly
        always wrong. Using the actual number of stories completed each
        iteration (the team's throughput) as a measure of future progress
        provides a more concrete way to forecast delivery timelines.
      </div>
    </Col>
  </Row>
);

export default TabFive;
