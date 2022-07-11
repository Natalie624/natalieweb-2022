import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'gatsby';

import Logo from './logo';
import Linkedin from '../../svg/linkedin.svg';
import Twitter from '../../svg/twitter.svg';
import Github from '../../svg/github.svg';

const Footer = () => (
  <Row className='footer-section'>
    <Col lg={2} className='footer-col1'>
      <div className={`float-shadow logo-div`}>
        <Logo />
      </div>
      <div className='footer-name'>Natalie Cervantes</div>
    </Col>
    <Col lg={6} className='footer-col2'>
      <Row className='footer-page-links-row'>
        <Col className='footer-page-link-col'>
          <div className='footer-page-link'>
            <Link to='/'>Home</Link>
          </div>
        </Col>
        <Col className='footer-page-link-col'>
          <div className='footer-page-link'>
            <Link to='/#story'>Story</Link>
          </div>
        </Col>
        <Col className='footer-page-link-col'>
          <div className='footer-page-link'>
            <Link to='/#work'>Work</Link>
          </div>
        </Col>
        <Col className='footer-page-link-col'>
          <div className='footer-page-link'>
            <Link to='/#experience'>Experience</Link>
          </div>
        </Col>
        <Col className='footer-page-link-col'>
          <div className='footer-page-link'>
            <a href='mailto:natalie.cervantes@gmail.com'>Contact</a>
          </div>
        </Col>
      </Row>
    </Col>
    <Col lg={2} className='footer-col3'>
      <div className={`footer-icon-div`}>
        <div className={`social-icon-div`}>
          <a
            className={`social-icon-link`}
            href='https://www.linkedin.com/in/nataliecervantes/'
            target='_blank'
            rel='noreferrer'
          >
            <Linkedin className={`social-icons`} />
          </a>
          <a
            className={`social-icon-link`}
            href='https://twitter.com/softwarenomad'
            target='_blank'
            rel='noreferrer'
          >
            {' '}
            <Twitter className={`social-icons`} />
          </a>
          <a
            className={`social-icon-link`}
            href='https://github.com/Natalie624'
            target='_blank'
            rel='noreferrer'
          >
            <Github className={`social-icons`} />
          </a>
        </div>
      </div>
    </Col>
  </Row>
);

export default Footer;
