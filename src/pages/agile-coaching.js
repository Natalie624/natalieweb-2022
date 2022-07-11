import React from 'react';
import Layout from '../components/layout/layout';
import Seo from '../components/seo';
import Intro from '../components/agile-coaching/01-intro';
import ToolsAndPractices from '../components/agile-coaching/02-tools-and-practices';

const AgileCoachingPage = () => (
  <div>
    <Layout>
      <Seo title='Agile Coaching' />
      <Intro />
      <ToolsAndPractices />
    </Layout>
  </div>
);

export default AgileCoachingPage;
