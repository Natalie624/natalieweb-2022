import React from 'react';
import Layout from '../components/layout/layout';
import Seo from '../components/seo';
import Intro from '../components/las-uvas/01-intro';
import LasUvasImg1Section from '../components/las-uvas/02-las-uvas-img-section';
import TechStackSection from '../components/las-uvas/04-techstack-section';
import FeatureImgSection from '../components/las-uvas/05-featurimg-section';
import LasUvasDescriptionSection from '../components/las-uvas/08-las-uvas-description-section.js';

const LasUvasPage = () => (
  <div>
    <Layout>
      <Seo title='Las Uvas Web Project' />
      <Intro />
      <LasUvasImg1Section />
      <TechStackSection />
      <FeatureImgSection />
      <LasUvasDescriptionSection />
    </Layout>
  </div>
);

export default LasUvasPage;
