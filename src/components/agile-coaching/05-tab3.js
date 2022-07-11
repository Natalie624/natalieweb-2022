import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import AgileCoachingImg3 from './11-agile-coaching-img3';
import FloaterDivs from './16-tab3-floater-divs';

import * as CoachingStyle from './coaching.module.css';

const TabThree = () => (
  <Row>
    <Col xl={5} sm={3} className={` ${CoachingStyle.tabCol1}`}>
      <AgileCoachingImg3 />
      <FloaterDivs />
    </Col>
    <Col xl={7} sm={9} className={`${CoachingStyle.tabCol2}`}>
      <div className={`vert-center ${CoachingStyle.tabDescription}`}>
        Requirements definition as a team effort - avoiding silos. I encourage
        representatives from each discipline to be present at requirements
        definition and refinement. Each discipline has a unique voice and focus
        to offer that directly impacts the other. When Design, Quality, and
        Development all provide input it dramatically increases the team's
        understanding of feature goals, priorities, trade-offs, and risks.
      </div>
    </Col>
  </Row>
);

export default TabThree;
