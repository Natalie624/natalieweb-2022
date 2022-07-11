import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import AgileCoachingImg4 from './12-agile-coaching-img4';
import FloaterDivs from './17-tab4-floater-divs';

import * as CoachingStyle from './coaching.module.css';

const TabFour = () => (
  <Row>
    <Col xl={5} sm={3} className={` ${CoachingStyle.tabCol1}`}>
      <AgileCoachingImg4 />
      <FloaterDivs />
    </Col>
    <Col xl={7} sm={9} className={`${CoachingStyle.tabCol2}`}>
      <div className={`vert-center ${CoachingStyle.tabDescription}`}>
        Backlog grooming practices that reduce waste and provide team and
        stakeholder transparency. I've found that consistent, iterative reviews
        of upcoming work with product owners or key stakeholders help to further
        refine requirements, and strategically eliminate old, stale stories that
        no longer serve the organization.
      </div>
    </Col>
  </Row>
);

export default TabFour;
