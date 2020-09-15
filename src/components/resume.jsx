import React, { useEffect } from 'react';
import { onRoute } from './../utilities/onRoute';
import resume1 from '../images/resume1.jpg';
import resume2 from '../images/resume2.jpg';
import '../css/resume.css';
import Typewriter from 'typewriter-effect';

const Resume = () => {
  useEffect(() => {
    onRoute();
  },[])
  return (
    <>
  <div className="allTypeCont mx-auto">
    <div className="typeContainer">
      <Typewriter
        options={{
          strings: [
          "I love making beautiful user experiences with React",
          "Fast load times and lag free interaction, my highest priority",
          "My responsive layouts will work on any device, big or small"],
          autoStart: true,
          loop: true,
          cursor: "_",
          deleteSpeed: 10}}/>
    </div>
  </div>

      <div className="container-fluid resumeContainer">
      <div className="col-xl-12 p-0 imageContainer">
        <img src={resume1} className="resumeImg" alt="img"/>
        <img src={resume2} className="resumeImg yelly" alt="img"/>
      </div>
    </div>
    </>
  );
}
export default Resume;