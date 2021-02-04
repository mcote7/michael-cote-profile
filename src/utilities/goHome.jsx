import React, { useEffect } from 'react';

import { navBarCollapseTransition } from './navBarCollapseTransition';

import { CSSRulePlugin, TweenLite } from "gsap/all";

import homeSound from '../audio/MainAudio/blobLong.mp3';


const GoHome = () => {

  const consoleCSS = 'background:#000000;color:#f5dc00;border:0.5rem solid #00c0f5;padding:0.5rem;margin:0.5rem';

  useEffect(() => {

    
    const hSound = new Audio(homeSound);
    hSound.preload = true;
    hSound.playbackRate = 8;
    hSound.volume = 0.3;

    hSound.play().catch(err => console.log("%ci know google damn...", consoleCSS, err));

    window.scrollTo({top: 0, behavior: 'smooth'});

    navBarCollapseTransition();

    const main_BG = CSSRulePlugin.getRule(".mainScreen:before");
    // console.log("main_BG", main_BG);
    TweenLite.to(main_BG, 2, {cssRule:{filter: "blur(0px)"}});
    setTimeout(() => {
      TweenLite.to(main_BG, 2.5, {cssRule:{opacity: 0.4}});
    }, 1500);

    const moon_BG = CSSRulePlugin.getRule(".mainScreen:after");
    // console.log("main_BG", main_BG);
    TweenLite.to(moon_BG, 2, {cssRule:{filter: "blur(0px)"}});

  },[]);
  
  return (
    <div className="dummy"></div>
  );
};
export default GoHome;