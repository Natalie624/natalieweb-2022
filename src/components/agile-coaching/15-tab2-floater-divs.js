import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';

import * as CoachingStyle from './coaching.module.css';

const FloaterDivs = () => (
  <div>
    {/* floater 4 */}
    <Parallax speed={-1}>
      <div
        className={`purple-3d purple-floater05 floater-20 ${CoachingStyle.floater4}`}
      />
    </Parallax>

    {/* floater 5 */}
    <Parallax speed={-1}>
      <div
        className={`purple-3d purple-floater1 floater-10 ${CoachingStyle.floater5}`}
      />
    </Parallax>

    {/* floater 6 */}
    <Parallax speed={1}>
      <div
        className={`purple-3d purple-floater0 floater-15 ${CoachingStyle.floater6}`}
      />
    </Parallax>
  </div>
);

export default FloaterDivs;
