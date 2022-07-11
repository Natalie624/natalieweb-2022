import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';

import * as CoachingStyle from './coaching.module.css';

const FloaterDivs = () => (
  <div>
    {/* floater 10 */}
    <Parallax speed={-1}>
      <div
        className={`purple-3d purple-floater05 floater-10 ${CoachingStyle.floater10}`}
      />
    </Parallax>

    {/* floater 11 */}
    <Parallax speed={-1}>
      <div
        className={`purple-3d purple-floater1 floater-15 ${CoachingStyle.floater11}`}
      />
    </Parallax>

    {/* floater 12 */}
    <Parallax speed={1}>
      <div
        className={`purple-3d purple-floater0 floater-20 ${CoachingStyle.floater12}`}
      />
    </Parallax>
  </div>
);

export default FloaterDivs;
