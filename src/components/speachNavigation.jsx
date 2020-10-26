import React, { useEffect, useState } from 'react';

import '../css/navbar.css';

import { useSpeechRecognition } from 'react-speech-kit';

const SpeachNavigation = () => {

  const [showSpeachInfo, setShowSpeachInfo] = useState(false);
  const handleMouseEnter = () => {
    setShowSpeachInfo(true);
  };
  const handleMouseLeave = () => {
    setShowSpeachInfo(false);
  };


  const [value, setValue] = useState('');
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });

  const [micIcon, setMicIcon] = useState("microphone-slash");
  const handleMouseDown = () => {
    listen();
    setMicIcon("microphone");
    console.log("listening")
  };
  const handleMouseUp = () => {
    stop();
    setMicIcon("microphone-slash");
    console.log("stopped listening")
  };
  useEffect(()=>{
    console.log("result", value)
  },[value]);

  return (<>
    <div className="speach" 
      onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <span><i className={`fa fa-${micIcon} fa-2x`} aria-hidden="true"></i></span>
    </div>

    {showSpeachInfo && !listening ?
    
    <div className="speachInfo">

      <h5 style={{borderBottom: '2px solid'}}>Voice activated navigation!</h5>
      
        <div>1. Hold down <span><i className="fa fa-microphone" aria-hidden="true"></i></span> button</div>
        <p>2. Try Saying :</p>
        
        <div>"Technical"</div>
        <div>"Education"</div>
        <div>"Projects"</div>
        <div>"Resume"</div>
        <p>"Contact"</p>
        
    </div>:''}

  </>);
};
export default SpeachNavigation;