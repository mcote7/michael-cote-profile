import React, {useState, useEffect} from 'react';

import Loading from '../MainView/MainLoading';
import Social from '../MainView/Social';
import Title from '../MainView/Title';
import Bio from '../MainView/Bio';

import self from '../../images/self1_edited.jpg';
import '../../css/main.css';

const MainView = ({message}) => {

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
    //contact btn
    setTimeout(()=> {
      setContact(true);
    }, 9100)
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
    <div className="mainViewContainer col-12">
      <Social message={message} contact={contact}/>
      <Title light={light} handleMouseMove={handleMouseMove} handleMouseOut={handleMouseOut}/>
      <Bio self={self} handleMouseMove={handleMouseMove} handleMouseOut={handleMouseOut}/>
    </div>
  );
};
export default MainView;