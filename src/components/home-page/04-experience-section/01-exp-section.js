import * as React from 'react';
import ExperienceContent from './02-exp-content';
import ExperienceCompanies from './03-exp-companies';

const ExperienceSection = () => (
  <div className={`section`} id='experience'>
    <ExperienceContent />
    <ExperienceCompanies />
  </div>
);

export default ExperienceSection;
