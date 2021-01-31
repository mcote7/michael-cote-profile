import React, {useState, useEffect} from 'react';

import Loading from '../MainView/MainLoading';
import Social from '../MainView/Social';
import Title from '../MainView/Title';
import Bio from '../MainView/Bio';

import self from '../../images/self1_edited.jpg';
import angular8 from '../../images/angular8.png';

import '../../SASS/main-view.scss';

//*new audio pkg.
import blobSound from '../../audio/MainAudio/blobShort.mp3';

const MainView = ({message}) => {

  const [light, setLight] = useState(false);
  const [contact, setContact] = useState(false);
  const [loading, setLoading] = useState(true);

  // audio
  const blob = new Audio(blobSound);
  blob.preload = true;
  blob.volume = 0.5;

  useEffect(() => {
    //loader
    setTimeout(()=> {
      setLoading(false);
    }, 4000)
    //my i light
    setTimeout(()=> {
      setLight(true);
    }, 7000)
    //contact btn
    setTimeout(()=> {
      setContact(true);
    }, 7750)
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

  const handleMouseDown = (e) => {
    blob.play();
    console.log("audio?", blob, e)
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

  const handleMouseEnter = (e) => {
    blob.play();
    console.log("audio?", blob, e)
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
      let eX = e.screenX - 139;
      
      setMyGhostDisplay("block");
      setMyGhostMoveTop(`${eY}px`);
      setMyGhostMoveLeft(`${eX}px`);
    }
  };

  const handleMouseOut = (e) => {
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

  //
  if(loading) return <Loading loading={loading}/>;

  return (<>
    <div className="mainViewContainer col-12">
      <Social message={message} contact={contact}/>
      <Title light={light}/>
      <Bio self={self} angular8={angular8}
          handleMouseDown={handleMouseDown}
          handleMouseMove={handleMouseMove} handleMouseOut={handleMouseOut}
          handleMouseEnter={handleMouseEnter} handleClick={handleClick}
          magic={magic} magic_BG_MAIN={magic_BG_MAIN} magic_BG_ALPHA={magic_BG_ALPHA}/>
    </div>

    <div id="mouseGhost" style={myMoveStyle}></div>
  </>);
};
export default MainView;