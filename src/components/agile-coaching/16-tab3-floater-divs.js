import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';

import * as CoachingStyle from './coaching.module.css';

const FloaterDivs = () => (
  <div>
    {/* floater 7 */}
    <Parallax speed={-1}>
      <div
        className={`purple-3d purple-floater05 floater-20 ${CoachingStyle.floater7}`}
      />
    </Parallax>

    {/* floater 8 */}
    <Parallax speed={2}>
      <div
        className={`purple-3d purple-floater1 floater-10 ${CoachingStyle.floater8}`}
      />
    </Parallax>

    {/* floater 9 */}
    <Parallax speed={1}>
      <div
        className={`purple-3d purple-floater0 floater-15 ${CoachingStyle.floater9}`}
      />
    </Parallax>
  </div>
);

export default FloaterDivs;
