import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';

import * as ContactStyle from './contact.module.css';

const FloaterDivs = () => (
  <div className={`floater-fade-in`}>
    {/* floater 1 */}
    <Parallax speed={-2}>
      <div
        className={`purple-3d purple-floater1 floater-30 ${ContactStyle.floater1}`}
      />
    </Parallax>

    {/* floater 2 */}
    <Parallax speed={-5}>
      <div
        className={`purple-3d purple-floater0 floater-15 ${ContactStyle.floater2}`}
      />
    </Parallax>

    {/* floater 3 */}
    <Parallax speed={2}>
      <div
        className={`purple-3d purple-floater1 floater-15 ${ContactStyle.floater3}`}
      />
    </Parallax>

    {/* floater 4 */}
    <Parallax speed={5}>
      <div
        className={`purple-3d purple-floater05 floater-10 ${ContactStyle.floater4}`}
      />
    </Parallax>
  </div>
);

export default FloaterDivs;
