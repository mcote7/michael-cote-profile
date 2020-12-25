import React, { useState, useEffect } from 'react';

import EmojiPicker from './emojiTest/EmojiPicker.jsx';

const Bio = ({self, angular8, handleClick, handleMouseEnter, handleMouseMove, handleMouseOut, magic, magic_BG_MAIN, magic_BG_ALPHA}) => {

  const [quote0, setQuote0] = useState(false);
  const [quote1, setQuote1] = useState(false);
  const [quote2, setQuote2] = useState(false);
  const [quote3, setQuote3] = useState(false);
  useEffect(() => {
    setTimeout(()=> {
      setQuote0(true);
    }, 500);
    setTimeout(()=> {
      setQuote1(true);
    }, 1250);
    setTimeout(()=> {
      setQuote2(true);
    }, 2000);
    setTimeout(()=> {
      setQuote3(true);
    }, 2750);
  },[]);
  return (<>
    <div className="row">
      {quote0?
      <div className="bioWrap col-lg-9 order-lg-1 order-md-1">
        <span className="selfWrap">
          <img src={self} className="mySelf float-right" alt="self"/>
        </span>
          <div className="quote" style={{backgroundColor: `rgba(${magic_BG_MAIN}, ${magic_BG_ALPHA})`}}
          onMouseEnter={(e)=>handleMouseEnter(e)} onMouseMove={(e)=>handleMouseMove(e)}
          onClick={(e)=>handleClick(e)} onMouseOut={(e)=>handleMouseOut(e)}>
            <span className="mr-1"><i className={`fa fa-magic ${magic}`} aria-hidden="true"></i></span> 
            Dedicated and motivated professional seeking an opportunity to showcase my creative and 
            technical proficiency. My goal is to attain a position which will provide an opportunity 
            for growth and personal development, as well as the opportunity to expand my knowledge.
          </div>
      </div>
      :''}
      {quote1?
      <div className="bioWrap col-lg-3 col-md-6 order-lg-2 order-md-3">
        <div className="quote freelance">
          <span className="mr-1 freelanceIcon"><i className="fa fa-code-fork fa-2x" aria-hidden="true"></i></span>
          <a style={{color: 'white'}} href="https://mcote7.github.io/jitsi-chat/" target="_blank" rel="noopener noreferrer"><span>Open To Freelance work.</span></a><br></br><br></br>
          <span className="leisure">( at my leisure )</span>&nbsp;<span className="myLeisureFace" role="img" aria-label="my-leisure">&#128526;</span>
        </div>
      </div>
      :''}
      {quote2?
      <div className="bioWrap col-lg-9 order-lg-3 order-md-2">
        <span className="selfWrap">
          <img src={angular8} className="mySelf angular8 float-right" alt="angular8"/>
        </span>
          <div className="quote newRole">
            <span className="laptop mr-1"><i className="fa fa-laptop" aria-hidden="true"></i>&nbsp;Current Role:</span><br></br><br></br>
            <span>Software Developer @ VIA3 corperation. We are using Angular 8 to develop video chat and video conferencing applications.</span><br></br><br></br>
            <span>Check out our Unity platform:</span><br></br><br></br>
            <span><a className="via3 py-2 px-3" href="https://www.via3.com/" target="_blank" rel="noopener noreferrer">VIA3.com</a></span>
          </div>
      </div>
      :''}
      {quote3?
      <div className="bioWrap col-lg-3 col-md-6 order-lg-4 order-md-4">
        <div className="quote theCube">
          <span className="mr-1 cube"><i className="fa fa-cube fa-4x" aria-hidden="true"></i></span><br></br><br></br><br></br>
          <a className="enterCube p-2" href="https://mcote7.github.io/react-menu-cube/" target="_blank" rel="noopener noreferrer">&nbsp;enter the cube</a>
        </div>
      </div>
      :''}
    </div>
    <br></br>
    <div className="row mt-5">
        <div className="col-lg-6 mx-auto mt-5">
          <EmojiPicker/>
        </div>
    </div>
    </>
  );
};
export default Bio;