import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';

import * as CoachingStyle from './coaching.module.css';

const FloaterDivs = () => (
  <div>
    {/* floater 13 */}
    <Parallax speed={-1}>
      <div
        className={`purple-3d purple-floater05 floater-20 ${CoachingStyle.floater13}`}
      />
    </Parallax>

    {/* floater 14 */}
    <Parallax speed={-1}>
      <div
        className={`purple-3d purple-floater1 floater-10 ${CoachingStyle.floater14}`}
      />
    </Parallax>

    {/* floater 15 */}
    <Parallax speed={1}>
      <div
        className={`purple-3d purple-floater0 floater-15 ${CoachingStyle.floater15}`}
      />
    </Parallax>
  </div>
);

export default FloaterDivs;
