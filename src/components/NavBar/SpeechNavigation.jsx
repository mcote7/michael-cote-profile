import React, { useEffect, useState } from 'react';

import { useSpeechRecognition } from 'react-speech-kit';
import { useSpeechSynthesis } from 'react-speech-kit';


const SpeechNavigation = ({history}) => {

  // Speech tool tip 
  const [showSpeechInfo, setShowSpeechInfo] = useState(false);
  const handleMouseEnter = () => {
    setShowSpeechInfo(true);
  };
  const handleMouseLeave = () => {
    const info = document.getElementById('speechInfo');
    if(info !== null) {
      info.animate([
        {opacity: 1, filter: 'blur(0px)'},
        {opacity: 0, filter: 'blur(12px)'}
      ], {
        duration: 510
      });
      setTimeout(() => {
        setShowSpeechInfo(false);
      }, 500);
    }
  };

  // speech synth
  const { speak, voices } = useSpeechSynthesis();
  const voice = voices[9];
  const rate = 0.9;
  const volume = 0.3;
  // speech recog
  const [value, setValue] = useState('');
  const { listen, listening, stop, supported} = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
    onError: (err) => {
      stop();
      console.log('something went wrong with speech', err);
    },
  });
  const [micIcon, setMicIcon] = useState("microphone-slash");
  
  const handleMouseDown = () => {
    listen();
    setMicIcon("microphone");
    console.log("listening?", listening)
  };
  const handleMouseUp = () => {
    stop();
    setMicIcon("microphone-slash");
    console.log("listening?", listening)
  };
  
  const [thumbsUp, setThumbsUp] = useState(false);
  const [captain_AUTH, setCaptain_AUTH] = useState(false);

  useEffect(()=>{
    
    const ROUTES = ["contact", "technical", "education", "projects", "resume"];
    
    console.log("result", value);
    
    if(ROUTES.includes(value) && history.location.pathname !== `/${value}`) {
      
      history.push(`/${value}`);
      
      setThumbsUp(true);
      
      setTimeout(() => {
        speak({text: `Michael's ${value} page`, voice, rate, volume});
      }, 2000);
      
      setTimeout(() => {
        setThumbsUp(false);
      }, 4000);
      
      setTimeout(() => {
        setValue('');
      }, 5000);
    }
    else {
      setValue('');
    }
    
    if(value === "home" && history.location.pathname !== '/michael-cote-profile-2020') {
      history.push('/');
      setThumbsUp(true);
      setTimeout(() => {
        speak({text: `Welcome home`, voice, rate, volume});
      }, 2000);
      setTimeout(() => {
        setThumbsUp(false);
      }, 4000);
      setTimeout(() => {
        setValue('');
      }, 5000);
    }
    else {
      setValue('');
    }
    if(value === "computer") {
      stop();
      setMicIcon("check-circle");
      setCaptain_AUTH(true);
      setTimeout(() => {
        speak({text: `Yes Captain, voice activated navigation initialized, awaiting your commands, Sir.`, voice, rate, volume});
      }, 2000);
      setTimeout(() => {
        setCaptain_AUTH(false);
      }, 4000);
      setTimeout(() => {
        setValue('');
      }, 5000);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[value]);

  return (<>
    {supported &&
    <div className="speech ml-auto" 
      onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <span><i className={`fa fa-${micIcon} fa-2x`} aria-hidden="true"></i></span>
    </div>}

    {supported && showSpeechInfo && !listening && value === '' && !thumbsUp ? 
      <div id="speechInfo" className="speechInfo">
        <h5 style={{borderBottom: '2px solid'}}>Voice activated navigation</h5>
          <div>1. HOLD DOWN <span style={{color: 'white'}}><i className="fa fa-microphone" aria-hidden="true"></i></span> button</div>
          <p>2. Try Saying :</p>
          <div style={{color: 'white'}}>" Contact "</div>
          <div style={{color: 'white'}}>" Technical "</div>
          <div style={{color: 'white'}}>" Education "</div>
          <div style={{color: 'white'}}>" Projects "</div>
          <div style={{color: 'white'}}>" Resume "</div>
          <p style={{color: 'white'}}>" Home "</p>
      </div>:''}

    {thumbsUp ? <>
      <div className="thumbsUp"><span role="img" aria-label="good-job">&#128077;</span></div>
      <p className="goodJob">"Good Job!"</p></>
    :''}

    {captain_AUTH ? <>
      <div className="thumbsUp"><span role="img" aria-label="good-job">&#128406;</span></div>
      <p className="goodJob">"Hello Captain"</p></>
    :''}

  </>);
};
export default SpeechNavigation;