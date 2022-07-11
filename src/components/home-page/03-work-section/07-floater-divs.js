import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';

import * as WorkStyle from './work.module.css';

const FloaterDivs = () => (
  <div>
    {/*floater 1 */}
    <Parallax speed={-4}>
      <div
        className={`purple-3d purple-floater0 floater-30 ${WorkStyle.floater1}`}
      />
    </Parallax>

    {/*floater 2 */}
    <Parallax speed={0}>
      <div
        className={`purple-3d purple-floater1 floater-15 ${WorkStyle.floater2}`}
      />
    </Parallax>

    {/*floater 3 */}
    <Parallax speed={-5}>
      <div
        className={`purple-3d purple-floater0 floater-30 ${WorkStyle.floater3}`}
      />
    </Parallax>

    {/*floater 4 */}
    <Parallax speed={0}>
      <div
        className={`purple-3d purple-floater05 floater-20 ${WorkStyle.floater4}`}
      />
    </Parallax>

    {/*floater 5 */}
    <Parallax speed={5}>
      <div
        className={`purple-3d purple-floater1 floater-10 ${WorkStyle.floater5}`}
      />
    </Parallax>

    {/*floater 6 */}
    <Parallax speed={-2}>
      <div
        className={`purple-3d purple-floater1 floater-25 ${WorkStyle.floater6}`}
      />
    </Parallax>

    {/*floater 7 */}
    <Parallax speed={4}>
      <div
        className={`purple-3d purple-floater05 floater-10 ${WorkStyle.floater7}`}
      />
    </Parallax>
  </div>
);

export default FloaterDivs;
