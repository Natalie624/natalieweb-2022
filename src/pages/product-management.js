import React from 'react';
import Layout from '../components/layout/layout';
import Seo from '../components/seo';
import Intro from '../components/product-management/01-intro';
import MmiSection from '../components/product-management/02-mmi-section';
import SkillsAndExperience from '../components/product-management/04-skills-experience';

const ProductManagementPage = () => (
  <div>
    <Layout>
      <Seo title='Digital Product Management' />
      <Intro />
      <MmiSection />
      <SkillsAndExperience />
    </Layout>
  </div>
);

export default ProductManagementPage;
