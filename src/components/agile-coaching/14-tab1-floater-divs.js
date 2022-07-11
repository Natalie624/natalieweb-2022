import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';

import * as CoachingStyle from './coaching.module.css';

const FloaterDivs = () => (
  <div>
    {/* floater 1 */}
    <Parallax speed={-1}>
      <div
        className={`purple-3d purple-floater05 floater-20 ${CoachingStyle.floater1}`}
      />
    </Parallax>

    {/* floater 2 */}
    <Parallax speed={-1}>
      <div
        className={`purple-3d purple-floater1 floater-10 ${CoachingStyle.floater2}`}
      />
    </Parallax>

    {/* floater 3 */}
    <Parallax speed={1}>
      <div
        className={`purple-3d purple-floater0 floater-15 ${CoachingStyle.floater3}`}
      />
    </Parallax>
  </div>
);

export default FloaterDivs;
