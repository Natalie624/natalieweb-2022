import * as React from 'react';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { ParallaxProvider } from 'react-scroll-parallax';

import Header from './header';
import Footer from './footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import './global.css';

const Layout = ({ children }) => {
  return (
    <SSRProvider>
      <Header />
      <ParallaxProvider scrollAxis='vertical'>
        <main>{children}</main>
      </ParallaxProvider>
      <Footer />
    </SSRProvider>
  );
};

export default Layout;
