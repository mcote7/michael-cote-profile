import React from 'react';
import { Link } from 'react-router-dom';

const Social = ({message, contact}) => {

  return (
    <div className="row socialRow">

      <div className="col-sm-6 col-lg-4 col-xl-3">
        <p className="socialWraps">
          <a className="socialLinks" target="_blank" rel="noopener noreferrer" href="https://github.com/mcote7">
          <span className="socialIcons mx-1"><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></span>
          &nbsp;www.github.com/cote</a>
        </p>
      </div>

      <div className="col-sm-6 col-lg-4 col-xl-3">
        <p className="socialWraps">
          <a className="socialLinks" target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/michael-cote-wa">
          <span className="socialIcons mx-1"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></span>
          &nbsp;www.linkedin.com/in/cote</a>
        </p>
      </div>

      <div className="col-sm-6 col-lg-4 col-xl-3">
        <p className="socialWraps">
          <a className="socialLinks" target="_blank" rel="noopener noreferrer" href="https://facebook.com/profile.php?id=100012957396194">
          <span className="socialIcons mx-1"><i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i></span>
          &nbsp;www.facebook.com/cote</a>
        </p>
      </div>

      <div className="col-sm-6 col-lg-12 col-xl-3 order-xl-last order-lg-first order-md-first order-sm-first order-first">
        
        {contact ? <Link to="/contact" className="contactBtn">
        <svg width="290px" height="35px" viewBox="0 0 290 35" className="">
          <polyline points="289,1 289,34 1,34 1,1 289,1" className="bg-line" />
          <polyline points="289,1 289,34 1,34 1,1 289,1" className="hl-line" />
        </svg>
        
        {message ? <span style={{color: 'white', fontSize: 'medium'}}>&nbsp;&hearts;&nbsp;message sent, thank you</span> : 
        <span><i className="fa fa-envelope-o mailIcon mr-1 ml-2" aria-hidden="true"></i>&nbsp;Contact me&nbsp;&nbsp;</span>}</Link>
        : <div className="placeholder"></div>}
      </div>
    </div>
  );
};
export default Social;