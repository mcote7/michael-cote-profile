import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';

import '../../SASS/navbar.scss';

import SpeechNavigation from './SpeechNavigation';

import navToggleUpSound from '../../audio/NavBarAudio/navtogglegoup.wav';
import navToggleDownSound from '../../audio/NavBarAudio/navtogglegodown.wav';

import navLinkHover from '../../audio/NavBarAudio/navLinkHover.wav';
import navLinkClick from '../../audio/NavBarAudio/navLinkClick.wav';


const NavBar = ({history, canPlayAudio}) => {

    // navbar sounds 

    const navtogUpSound = new Audio(navToggleUpSound);
    navtogUpSound.playbackRate = 2;
    navtogUpSound.volume = 0.1;

    const navtogDownSound = new Audio(navToggleDownSound);
    navtogDownSound.playbackRate = 2;
    navtogDownSound.volume = 0.1;

    const navLinkHov = new Audio(navLinkHover);
    navLinkHov.playbackRate = 4;
    navLinkHov.volume = 0.1;

    const navLinkClk = new Audio(navLinkClick);
    navLinkClk.playbackRate = 2.5;
    navLinkClk.volume = 0.1;
  
    const playNavLinkHover = () => {
      if (canPlayAudio) {
        navLinkHov.play();
      } else {
        console.log("can not play audio must click first")
      }
    };
    
    const playNavLinkClick = () => {
      if (canPlayAudio) {
        navLinkClk.play();
      } else {
        console.log("can not play audio must click first")
      }
    };
    
    const playNavtogUpSound = () => {
      if (canPlayAudio) {
        navtogUpSound.play();
      } else {
        console.log("can not play audio must click first")
      }
    };
    
    const playNavtogDownSound = () => {
      if (canPlayAudio) {
        navtogDownSound.play();
      } else {
        console.log("can not play audio must click first")
      }
    };
    // end sounds 

  const [loading, setLoading] = useState(true);
  const [showHomeButton, setShowHomeButton] = useState(false);
  useEffect(() => {
    setTimeout(()=> {
      setLoading(false);
    }, 6500)
  },[]);

  useEffect(()=> {
    if(!loading) {
      const NAV = document.getElementById('myNavbar');
      NAV.animate([
        {bottom: '-80px'},
        {bottom: '0px'}
      ], {
        duration: 500,
        easing: 'ease-out'
      });
      setShowHomeButton(false);
    }
  },[loading]);

  const [navtoggle, setNavtoggle] = useState(false);
  const [navtoggleIcon, setNavtoggleIcon] = useState("bars");
  const [navtoggleBackgroundcolor, setNavtoggleBackgroundcolor] = useState("hsl(193, 95%, 38%)");
  const [navtoggleClippath, setNavtoggleClippath] = useState("polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)");
  useEffect(() => {
    if(navtoggle) {
      playNavtogUpSound();
      setNavtoggleIcon("chevron-circle-down");
      setNavtoggleBackgroundcolor("hsl(193, 95%, 48%)");
      setNavtoggleClippath("polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)")
    }
    else if(!navtoggle) {
      playNavtogDownSound();
      setNavtoggleIcon("bars");
      setNavtoggleBackgroundcolor("hsl(193, 95%, 38%)");
      setNavtoggleClippath("polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[navtoggle]);

  useEffect(() => {
    const targetnavbar = document.getElementById("navbarText");
    setTimeout(() => {
      if(targetnavbar !== null && !targetnavbar.classList.contains("show")) {
        setNavtoggle(false);
      }
    }, 1500);
  },[history.location]);

  useEffect(() => {
    if(history.location.pathname === '/michael-cote-profile-2020') {
      setShowHomeButton(false);
    }
    else {
      setShowHomeButton(true);
    }
  },[history.location.pathname]);


  if(loading) return null;
  return (
    <nav id="myNavbar" className="navbar navbar-expand-xl myNavBar">

      <div className="homeButtonWrap">
      {showHomeButton ?
        <NavLink 
          onMouseEnter={()=>playNavLinkHover()}
          className="homeButton" to="/" onMouseDown={()=>playNavLinkClick()}>
          <span><i className="fa fa-home fa-2x" aria-hidden="true"></i></span>
        </NavLink> :
        <div className="homeButtonActivePlaceholder">
          <span className="the-eye"><i className="fa fa-eye" aria-hidden="true"></i></span>
        </div>}
      </div>

      <button 
        onClick={()=>{setNavtoggle(!navtoggle)}}
        style={{clipPath: `${navtoggleClippath}`, backgroundColor: `${navtoggleBackgroundcolor}`}}
        className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span><i className={`fa fa-${navtoggleIcon} barsIcon`} aria-hidden="true"></i></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav m-auto">
          <li className="nav-item">
            <NavLink 
              onMouseEnter={()=>playNavLinkHover()}
              onMouseDown={()=>playNavLinkClick()}
              className="polyLink" activeClassName="polyLink-active" to="/technical">
              <span className="polyLink-icon"><i className="fa fa-floppy-o fa-2x" aria-hidden="true"></i></span>
              <span className="polyLink-text">Technical&nbsp;</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              onMouseEnter={()=>playNavLinkHover()}
              onMouseDown={()=>playNavLinkClick()}
              className="polyLink" activeClassName="polyLink-active" to="/education">
              <span className="polyLink-icon"><i className="fa fa-graduation-cap fa-2x" aria-hidden="true"></i></span>
              <span className="polyLink-text">Education&nbsp;</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              onMouseEnter={()=>playNavLinkHover()}
              onMouseDown={()=>playNavLinkClick()}
              className="polyLink" activeClassName="polyLink-active" to="/projects">
              <span className="polyLink-icon"><i className="fa fa-th-list fa-2x" aria-hidden="true"></i></span>
              <span className="polyLink-text">Projects&nbsp;&nbsp;</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              onMouseEnter={()=>playNavLinkHover()}
              onMouseDown={()=>playNavLinkClick()}
              className="polyLink" activeClassName="polyLink-active" to="/resume">
              <span className="polyLink-icon"><i className="fa fa-file-text-o fa-2x" aria-hidden="true"></i></span>
              <span className="polyLink-text">Resume&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </NavLink>
          </li>
        </ul>
        <div className="speechNavigationWrap">
          <SpeechNavigation history={history}/>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;