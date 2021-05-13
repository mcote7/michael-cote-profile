import React, {useState, useEffect} from 'react';

import Loading from '../MainView/MainLoading';
import Social from '../MainView/Social';
import Title from '../MainView/Title';
import Bio from '../MainView/Bio';

import self from '../../images/main/self2.jpg';
import angular8 from '../../images/main/angular8.png';

import '../../SASS/main-view.scss';

import blobSound from '../../audio/MainAudio/blobShort.mp3';

const MainView = ({message, canPlayAudio}) => {

  const [loading, setLoading] = useState(true);
  const [social, setSocial] = useState(false);
  const [title, setTitle] = useState(false);
  const [bio, setBio] = useState(false);
  const [light, setLight] = useState(false);
  const [contact, setContact] = useState(false);

  const blob = new Audio(blobSound);
  blob.volume = 0.5;

  const playBlobSound = () => {
    if (canPlayAudio) {
      blob.play();
    } else {
      console.log("can not play audio must click first")
    }
  };

  useEffect(() => {
    //loader
    setTimeout(()=> {
      setLoading(false);
    }, 4000)
    setTimeout(()=> {
      setSocial(true);
    }, 4200)
    setTimeout(()=> {
      setTitle(true);
    }, 4800)
    setTimeout(()=> {
      setBio(true);
    }, 5000)
    //my i light
    setTimeout(()=> {
      setLight(true);
    }, 5500)
    //contact btn
    setTimeout(()=> {
      setContact(true);
    }, 7500)
  },[]);

  //mouse ghost
  const [myGhostDisplay, setMyGhostDisplay] = useState("none");
  const [myGhostMoveTop, setMyGhostMoveTop] = useState(0);
  const [myGhostMoveLeft, setMyGhostMoveLeft] = useState(0);
  const [inBounds, setInbounds] = useState(false);

  const myMoveStyle = {
    display: `${myGhostDisplay}`,
    height: "200px",
    width: "200px",
    position: "fixed",
    zIndex: 10999,
    top: `${myGhostMoveTop}`,
    left: `${myGhostMoveLeft}`,
    pointerEvents: "none",
  };

  //magic bg
  const [magic, setMagic] = useState("magic-out");
  const [magic_BG_ALPHA, setMagic_BG_ALPHA] = useState(0.150);
  const [magic_BG_MAIN, setMagic_BG_MAIN] = useState("255,255,255");
  const magic_BG_el = document.getElementsByClassName('quote')[0];

  const handleMouseDown = () => {
    playBlobSound();
    // console.log("audio?", blob)
  };

  const handleClick = () => {
    if(magic_BG_el !== undefined) {
      setMagic("magic-out")
      magic_BG_el.animate([
        {backgroundColor: `rgba(143,0,245,${magic_BG_ALPHA})`},
        {backgroundColor: 'rgba(96, 217, 251,0.85)'},
        {backgroundColor: 'rgba(143,0,245,0.3)'}
      ],{
        duration: 255
      });
      setTimeout(() => {
        setMagic("magic")
        setMagic_BG_ALPHA(0.300);
      }, 250);
    }
  };

  const handleMouseEnter = () => {
    playBlobSound();
    // console.log("audio?", blob)
    if(magic_BG_el !== undefined) {
      setMagic("magic");
      magic_BG_el.animate([
        {backgroundColor: 'rgba(255,255,255,0.15)'},
        {backgroundColor: 'rgba(143,0,245,0.3)'}
      ],{
        duration: 255
      });
      setTimeout(() => {
        setMagic_BG_MAIN("143,0,245");
        setMagic_BG_ALPHA(0.300);
      }, 250);
    }
  };

  const handleMouseMove = (e) => {
    if(magic_BG_el !== undefined) {
      setInbounds(true);
      setMagic_BG_ALPHA(magic_BG_ALPHA - 0.002);
      // console.log("magic-alpha", magic_BG_ALPHA)
      console.log("inBounds", inBounds);
      // console.log("e.screenY",e.screenY);
      // console.log("e.screenX",e.screenX);
      let eY = e.screenY - 219;
      let eX = e.screenX - 139;//           <-----<<<|) change to page for mobile ? 
      setMyGhostDisplay("block");
      setMyGhostMoveTop(`${eY}px`);
      setMyGhostMoveLeft(`${eX}px`);
    }
  };

  const handleMouseOut = () => {
    if(magic_BG_el !== undefined) {
      setInbounds(false);
      setMagic("magic-out");
      magic_BG_el.animate([
        {backgroundColor: `rgba(${magic_BG_MAIN}, ${magic_BG_ALPHA})`},
        {backgroundColor: 'rgba(255,255,255,0.15)'}
      ],{
        duration: 255
      });
      setTimeout(() => {
        setMagic_BG_MAIN("255,255,255");
        setMagic_BG_ALPHA(0.15);
      }, 250);
      const ghost_EXIT = document.getElementById('mouseGhost');
      ghost_EXIT.animate([
        {opacity: 0.5, transform: 'scale(1)', filter: 'blur(0px)'},
        {opacity: 1, transform: 'scale(0)', filter: 'blur(12px)'}
      ],{
        duration: 255
      });
      setTimeout(() => {
        setMyGhostDisplay("none");
      }, 250);
      console.log("inBounds", inBounds);
    }
  };

  if(loading) return <Loading loading={loading}/>;

  return (<>
    <div className="mainViewContainer col-12">
      {social &&
      <Social message={message} contact={contact}/>}
      {title &&
      <Title light={light}/>}
      {bio &&
      <Bio self={self} angular8={angular8}
          handleMouseDown={handleMouseDown}
          handleMouseMove={handleMouseMove} handleMouseOut={handleMouseOut}
          handleMouseEnter={handleMouseEnter} handleClick={handleClick}
          magic={magic} magic_BG_MAIN={magic_BG_MAIN} magic_BG_ALPHA={magic_BG_ALPHA}/>}
    </div>
    <div id="mouseGhost" style={myMoveStyle}></div>
  </>);
};
export default MainView;
