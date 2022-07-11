import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';

import * as FSDStyle from './fsd.module.css';

const FloaterDivs = () => (
  <div>
    {/* floater 1 */}
    <Parallax speed={-2}>
      <div
        className={`purple-3d purple-floater05 floater-30 ${FSDStyle.floater1}`}
      />
    </Parallax>

    {/* floater 2 */}
    <Parallax speed={1}>
      <div
        className={`purple-3d purple-floater1 floater-15 ${FSDStyle.floater2}`}
      />
    </Parallax>

    {/* floater 3 */}
    <Parallax speed={5}>
      <div
        className={`purple-3d purple-floater0 floater-20 ${FSDStyle.floater3}`}
      />
    </Parallax>

    {/* floater 4 */}
    <Parallax speed={-2}>
      <div
        className={`purple-3d purple-floater05 floater-25 ${FSDStyle.floater4}`}
      />
    </Parallax>

    {/* floater 5 */}
    <Parallax speed={-5}>
      <div
        className={`purple-3d purple-floater1 floater-20 ${FSDStyle.floater5}`}
      />
    </Parallax>

    {/* floater 6 */}
    <Parallax speed={5}>
      <div
        className={`purple-3d purple-floater0 floater-10 ${FSDStyle.floater6}`}
      />
    </Parallax>

    {/* floater 7 */}
    <Parallax speed={0}>
      <div
        className={`purple-3d purple-floater05 floater-30 ${FSDStyle.floater7}`}
      />
    </Parallax>
  </div>
);

export default FloaterDivs;
