import React from 'react';
import CV from '../../assets/my_cv.docx';

const CTA = () => {
  return (
    <div>
      <div className="cta">
        <a href={CV} download className="btn">
          Download Resume
        </a>
        <a href="#contact" className="btn btn-primary">
          Let's Talk
        </a>
      </div>
    </div>
  );
};

export default CTA;
