import React, { useState } from 'react';
import '../css/navbar.css';

const SpeachNavigation = (props) => {
  // console.log("speach props",props);

  const [micIcon, setMicIcon] = useState("microphone-slash");
  const handleMouseOver = () => {
    setMicIcon("microphone");
  };
  const handleMouseLeave = () => {
    setMicIcon("microphone-slash")
  };



  return (
    <div className="speach" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      <span className="micIcon"><i className={`fa fa-${micIcon} fa-2x`} aria-hidden="true"></i></span>
    </div>
  );
};
export default SpeachNavigation;