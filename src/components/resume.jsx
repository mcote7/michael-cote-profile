import React, { useEffect } from 'react';
import resume1 from '../images/resume1.jpg';
import resume2 from '../images/resume2.jpg';
import '../css/resume.css';

const Resume = () => {
  useEffect(() => {
    // const height = document.body.scrollHeight;
    console.log("resumeHeight",document.body.scrollHeight)
    window.scrollTo({top: 0});
    setTimeout(()=> {
      window.scrollTo({top: 755, behavior: 'smooth'});
    }, 100);
  },[])
  return (
    <div className="col-xl-12 mb-5">
      <img src={resume1} className="resumeImg" alt="img"/>
      <img src={resume2} className="resumeImg yelly" alt="img"/>
    </div>
  );
}
export default Resume;