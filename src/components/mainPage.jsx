import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import self from '../images/self1_edited.jpg';
import Loading from './MainView/MainLoading';

import '../css/main.css';

const MainPage = ({message}) => {

  const [light, setLight] = useState(false);
  const [contact, setContact] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //loader
    setTimeout(()=> {
      setLoading(false);
    }, 6000)
    //my i light
    setTimeout(()=> {
      setLight(true);
    }, 8000)
    // contact btn
    setTimeout(()=> {
      setContact(true);
    }, 9100)
  },[]);

  // mouse ghost //
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

  const handleMouseMove = (e) => {
    setInbounds(true);
    console.log("inBounds", inBounds);

    // console.log("e.screenY",e.screenY);
    // console.log("e.screenX",e.screenX);
    
    let eY = e.screenY - 219;
    let eX = e.screenX - 139;

    // console.log("eY-10", eY);
    // console.log("eX-10", eX);

    setMyGhostDisplay("block");

    setMyGhostMoveTop(`${eY}px`);
    setMyGhostMoveLeft(`${eX}px`);
  };

  const handleMouseOut = (e) => {
    setInbounds(false);
    console.log("inBounds", inBounds);

    setMyGhostDisplay("none");
  };

  // 
  if(loading) return <Loading loading={loading}/>;
  return (
    // parent = < row />
    <React.Fragment>
      {/* <div className="titleCont col-xl-12"> */}


        
        <div className="titleLinks mb-1">
          <p className="social"><span className="fadeicon"><i className="hovIcon fa fa-github-square fa-2x" aria-hidden="true"></i></span>
          &nbsp;<a className="titleAtag" target="_blank" rel="noopener noreferrer"
          href="https://github.com/mcote7">www.github.com/cote</a></p>
          <p className="social"><span className="fadeicon"><i className="hovIcon fa fa-linkedin-square fa-2x" aria-hidden="true"></i></span>
          &nbsp;<a className="titleAtag" target="_blank" rel="noopener noreferrer"
          href="https://linkedin.com/in/michael-cote-wa">www.linkedin.com/in/cote</a></p>
          <p className="social btmPhone"><span className="fadeicon"><i className="hovIcon fa fa-facebook-square fa-2x" aria-hidden="true"></i></span>
          &nbsp;<a className="titleAtag" target="_blank" rel="noopener noreferrer"
          href="https://facebook.com/profile.php?id=100012957396194">www.facebook.com/cote</a></p>
          {contact ? <Link to="/contact" className="contactBtn contactLink">
          <svg width="290px" height="40px" viewBox="0 0 290 40" className="contactBtn">
            <polyline points="289,1 289,39 1,39 1,1 289,1" className="bg-line" />
            <polyline points="289,1 289,39 1,39 1,1 289,1" className="hl-line" />
          </svg>
          {message ? <span style={{color: 'white', fontSize: 'medium'}}>&nbsp;&hearts;&nbsp;message sent, thank you</span> : 
          <span>&nbsp;&rarr;&nbsp;Contact me&nbsp;&nbsp;<i className="fa fa-envelope-o mailIcon" aria-hidden="true"></i></span>}</Link>
          : <div className="placeholder"></div>}
        </div>

        <h1 className="titleName">M{light?<span onMouseMove={(e)=>handleMouseMove(e)} onMouseOut={(e)=>handleMouseOut(e)} className="yellowWar blinky titleName">i</span>
        :<span className="titleNameSpec">i</span>}chael P Cote</h1>
        <p className="titleSub"> web developer in &nbsp;2020</p>

      {/* </div> */}
      
      <div onMouseMove={(e)=>handleMouseMove(e)} onMouseOut={(e)=>handleMouseOut(e)} className="titleQuote col-xl-7">
      <img src={self} className="mySelf float-right rounded-circle" alt="self"/>
        <h4 className="quote"> <span role="img" aria-label="cool">&#10024;</span> 
          Dedicated and motivated professional seeking an opportunity to showcase my creative and 
          technical proficiency. My goal is to attain a position which will provide an opportunity 
          for growth and personal development, as well as the opportunity to expand my knowledge.
        </h4>
      </div>
      
      <div id="mouseGhost" style={myMoveStyle}></div>
    
    </React.Fragment>
  );
};
export default MainPage;