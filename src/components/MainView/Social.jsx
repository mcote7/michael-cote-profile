import React from 'react';
import { Link } from 'react-router-dom';

const Social = ({message, contact}) => {

  return (
    <div className="row my-1">

      <div className="col-sm-6 col-lg-4 col-xl-3">
        <p className="socialWrap"><span className="socialIcons"><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></span>
        &nbsp;<a className="titleAtag" target="_blank" rel="noopener noreferrer"
        href="https://github.com/mcote7">www.github.com/cote</a></p>
      </div>

      <div className="col-sm-6 col-lg-4 col-xl-3">
        <p className="socialWrap"><span className="socialIcons"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></span>
        &nbsp;<a className="titleAtag" target="_blank" rel="noopener noreferrer"
        href="https://linkedin.com/in/michael-cote-wa">www.linkedin.com/in/cote</a></p>
      </div>

      <div className="col-sm-6 col-lg-4 col-xl-3">
        <p className="socialWrap"><span className="socialIcons"><i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i></span>
        &nbsp;<a className="titleAtag" target="_blank" rel="noopener noreferrer"
        href="https://facebook.com/profile.php?id=100012957396194">www.facebook.com/cote</a></p>
      </div>

      <div className="col-sm-6 col-lg-4 col-xl-3">
        
        {contact ? <Link to="/contact" className="contactBtn contactLink">
        <svg width="290px" height="40px" viewBox="0 0 290 40" className="contactBtn">
          <polyline points="289,1 289,39 1,39 1,1 289,1" className="bg-line" />
          <polyline points="289,1 289,39 1,39 1,1 289,1" className="hl-line" />
        </svg>
        
        {message ? <span style={{color: 'white', fontSize: 'medium'}}>&nbsp;&hearts;&nbsp;message sent, thank you</span> : 
        <span>&nbsp;&rarr;&nbsp;Contact me&nbsp;&nbsp;<i className="fa fa-envelope-o mailIcon" aria-hidden="true"></i></span>}</Link>
        : <div className="placeholder"></div>}
      </div>
    </div>
  );
};
export default Social;