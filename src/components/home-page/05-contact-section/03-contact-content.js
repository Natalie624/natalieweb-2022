import * as React from 'react';

import * as ContactStyle from './contact.module.css';

const ContactContent = () => (
  <div>
    <h3 className={`section-title mb-2rem ${ContactStyle.contactTitle}`}>
      Let's Meet
    </h3>
    <p className={ContactStyle.contactDescription}>
      Are you looking for a customer-centric Engineering Manager who can make an
      immediate impact by building the tools, practices, and products that will
      support your business goals and help you achieve your company vision!?
      Let’s chat!
    </p>
    <a
      className={`purple-btn float-shadow ${ContactStyle.contactBtn}`}
      href='mailto:natalie.cervantes@gmail.com'
    >
      Get In Touch
    </a>
  </div>
);

export default ContactContent;
