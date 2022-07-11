import React from 'react';
import Layout from '../components/layout/layout';
import Seo from '../components/seo';
import HeroSection from '../components/home-page/01-hero-section/01-hero-section';
import StorySection from '../components/home-page/02-story-section/01-story-section';
import WorkSection from '../components/home-page/03-work-section/01-work-section';
import ExperienceSection from '../components/home-page/04-experience-section/01-exp-section';
import ContactSection from '../components/home-page/05-contact-section/01-contact-section';

const HomePage = () => (
  <div>
    <Layout>
      <Seo title='Natalie Cervantes' />
      <HeroSection />
      <StorySection />
      <WorkSection />
      <ExperienceSection />
      <ContactSection />
    </Layout>
  </div>
);

export default HomePage;
