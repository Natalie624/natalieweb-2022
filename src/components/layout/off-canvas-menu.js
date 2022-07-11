import React, { useState } from 'react';
import { Button, Offcanvas, Stack } from 'react-bootstrap';
import { Link } from 'gatsby';

import Linkedin from '../../svg/linkedin.svg';
import Twitter from '../../svg/twitter.svg';
import Github from '../../svg/github.svg';

function OffCanvasMenu({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant='primary'
        onClick={handleShow}
        className='float-shadow offcanvas-btn'
      >
        <span>Menu</span>
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={3} className='offcanvas-stack'>
            <div className={`content-align-center`}>
              <Link
                to='/'
                className={`float-shadow offcanvas-link`}
                onClick={handleClose}
              >
                Home
              </Link>
            </div>
            <div className={`content-align-center`}>
              <Link
                to='/#story'
                className={`float-shadow offcanvas-link`}
                onClick={handleClose}
              >
                True Story
              </Link>
            </div>
            <div className={`content-align-center`}>
              <Link
                to='/#work'
                className={`float-shadow offcanvas-link`}
                onClick={handleClose}
              >
                Work
              </Link>
            </div>
            <div className={`content-align-center`}>
              <Link
                to='/#experience'
                className={`float-shadow offcanvas-link`}
                onClick={handleClose}
              >
                Experience
              </Link>
            </div>
            <div className={`content-align-center`}>
              <a
                href='mailto:natalie.cervantes@gmail.com'
                className={`float-shadow offcanvas-link`}
                onClick={handleClose}
              >
                Contact
              </a>
            </div>
            <div className={`content-align-center`}>
              <div className={`float-shadow offcanvas-div`}>
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
            </div>
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function OffCanvasBtn() {
  return (
    <>
      {['end'].map((placement, idx) => (
        <OffCanvasMenu key={idx} placement={placement} />
      ))}
    </>
  );
}

export default OffCanvasBtn;
