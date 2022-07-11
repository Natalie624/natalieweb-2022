import * as React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import * as StoryStyle from './story.module.css';

const StoryContent = () => (
  <div>
    {/* Title */}
    <AnimationOnScroll
      animateIn='animate__fadeIn'
      animateOut='animate__fadeOut'
      offset={100}
    >
      <p className={`text-align-center ${StoryStyle.subtitle}`}>
        Attitude Is The Difference Between An Ordeal And An Adventure
      </p>
      <h2 className={`section-title text-align-center mb-2rem`}>True Story</h2>
    </AnimationOnScroll>

    {/* Description */}
    <AnimationOnScroll
      animateIn='animate__fadeIn'
      animateOut='animate__fadeOut'
      offset={100}
    >
      <p>
        I specialize in leading multimillion-dollar enterprise digital
        experience implementations for billion-dollar companies.
      </p>
      <p>
        Of course, I didn’t just land into this specialization overnight! It all
        started a couple of years after graduating college. I found myself
        sitting at a Seattle Starbucks thinking about the things I was naturally
        drawn to, contemplating what would make the most sense to me for my
        burgeoning career: I loved planning and organizing things, I loved
        creating and designing things, and I was fascinated by technology! A
        career in web development seemed like the perfect combination of all
        these passions.
      </p>
      <p>
        My degree wasn’t in CS, but I submitted my resume to Microsoft anyway.
        I’ve always been the kind of relentlessly driven, ambitious person that
        has the audacity to reach for what others would deem unreachable. I just
        wanted to get my foot in the door.
      </p>
      <p>
        That was nearly 20 years ago. Since then I've logged thousands of hours
        successfully leading software product releases at Microsoft and many
        other top-tier companies. As an Engineering Manager, Sr. Program Manager
        and, Agile Coach, I’ve spent years working with engineering teams and
        collaborating with marketers and senior leadership executives at all
        levels to produce customer-facing products that are used by millions of
        people every day.
      </p>
      <p>
        I’ve always had a passion for web development and technology. Today the
        web has ballooned into a network of APIs connecting purpose-built
        services allowing users to connect to your brand through a plethora of
        channels. My career plan, born at that Seattle Starbucks years ago, has
        taken me far and wide. Now, I architect, direct, and help build
        large-scale custom enterprise web systems that provide the agile
        flexibility needed to respond to the demands of today’s fast-growing
        businesses.
      </p>
      <p>
        I'd love to show you how I can help your business build a world-class
        digital customer experience!
      </p>
    </AnimationOnScroll>
  </div>
);

export default StoryContent;
