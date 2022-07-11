import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';
import FadedLogoImg from '../../layout/logo-faded';
import StoryContent from './03-story-content';

import * as StoryStyle from './story.module.css';

const StorySection = () => (
  <div className={`section ${StoryStyle.storySection}`} id='story'>
    <Parallax speed={-5}>
      <FadedLogoImg />
    </Parallax>
    <Parallax speed={5}>
      <StoryContent />
    </Parallax>
  </div>
);

export default StorySection;
