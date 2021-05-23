import React, { useEffect } from 'react';
import { onRoute } from './../utilities/onRoute';
import resume1 from '../images/resume/resume1.jpg';
import resume2 from '../images/resume/resume2.jpg';
import self3 from '../images/resume/self3.jpg';
import '../css/resume.css';

const Resume = () => {
  useEffect(() => {
    onRoute();
  },[]);
  return (
    <div className="container-fluid resumeContainer row">
      <div className="col-xl-3" style={{display: 'flex'}}>
        <img src={self3} className="meme" alt="me"/>
      </div>
      <div className="col-xl-9 imageContainer">
        <img src={resume1} className="resumeImg" alt="img"/>
        <img src={resume2} className="resumeImg yelly" alt="img"/>
      </div>
    </div>
  );
}
export default Resume;