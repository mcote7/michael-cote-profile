import React, { useState } from 'react';

import '../css/navbar.css';

const SpeachNavigation = (props) => {
  // console.log("speach props",props);

  const [showSpeachInfo, setShowSpeachInfo] = useState(false);
  const handleMouseEnter = () => {
    setShowSpeachInfo(true);
  };
  const handleMouseLeave = () => {
    setShowSpeachInfo(false);
  };

  const [micIcon, setMicIcon] = useState("microphone-slash");
  const handleMouseDown = () => {
    setMicIcon("microphone");
  };
  const handleMouseUp = () => {
    setMicIcon("microphone-slash");
  };


  return (<>
    <div className="speach" 
      onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <span><i className={`fa fa-${micIcon} fa-2x`} aria-hidden="true"></i></span>
    </div>

    {showSpeachInfo ?
    
    <div className="speachInfo">

      {/*  */}
      <span style={{fontSize: 'x-small'}}>{`( under construction )`}</span>
      <h5><span role="img" aria-label="under-construction">&#128679; &#128679; &#128679;</span></h5>
      {/*  */}

      <h5 style={{borderBottom: '2px solid'}}>Voice activated navigation!</h5>
      
        <div>1. Hold down <span><i className="fa fa-microphone" aria-hidden="true"></i></span> button</div>
        <p>2. Try Saying :</p>
        
        <div>"Technical"</div>
        <div>"Education"</div>
        <div>"Projects"</div>
        <div>"Resume"</div>
        <div>"Contact"</div>
        
    </div>:''}

  </>);
};
export default SpeachNavigation;