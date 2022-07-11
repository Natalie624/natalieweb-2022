import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';

import * as HeroStyle from './hero.module.css';

const FloaterDivs = () => (
  <div className={`floater-fade-in`}>
    {/* floater 1 */}
    <Parallax speed={-2}>
      <div
        className={`purple-3d purple-floater05 floater-30 ${HeroStyle.floater1}`}
      />
    </Parallax>

    {/* floater 2 */}
    <Parallax speed={-2}>
      <div
        className={`purple-3d purple-floater1 floater-25 ${HeroStyle.floater2}`}
      />
    </Parallax>

    {/* floater 3 */}
    <Parallax speed={5}>
      <div
        className={`purple-3d purple-floater0 floater-15 ${HeroStyle.floater3}`}
      />
    </Parallax>

    {/* floater 4 */}
    <Parallax speed={-4}>
      <div
        className={`purple-3d purple-floater0 floater-20 ${HeroStyle.floater4}`}
      />
    </Parallax>

    {/* floater 5 */}
    <Parallax speed={4}>
      <div
        className={`purple-3d purple-floater1 floater-10 ${HeroStyle.floater5}`}
      />
    </Parallax>

    {/* floater 6 */}
    <Parallax speed={5}>
      <div
        className={`purple-3d purple-floater05 floater-10 ${HeroStyle.floater6}`}
      />
    </Parallax>
  </div>
);

export default FloaterDivs;
