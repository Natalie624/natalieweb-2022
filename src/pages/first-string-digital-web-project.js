import React from 'react';
import Layout from '../components/layout/layout';
import Seo from '../components/seo';
import Intro from '../components/first-string-digital/01-intro';
import FsdImg1Section from '../components/first-string-digital/02-fsd-img-section';
import TechStackSection from '../components/first-string-digital/04-techstack-section';
import FeatureImgSection from '../components/first-string-digital/05-feature-img-section';
import PurposeGoalSection from '../components/first-string-digital/08-purpose-goal-section';
import WebStackLessonsSection from '../components/first-string-digital/10-webstack-lessons-section';

const FSDPage = () => (
  <div>
    <Layout>
      <Seo title='First String Digital Web Project' />
      <Intro />
      <FsdImg1Section />
      <TechStackSection />
      <FeatureImgSection />
      <PurposeGoalSection />
      <WebStackLessonsSection />
    </Layout>
  </div>
);

export default FSDPage;
