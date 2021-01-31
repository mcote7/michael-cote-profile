import './App.css';
import React, {useEffect, useState} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';

import ScrollProgressRead from 'react-scroll-progress-read';

import GoHome from './utilities/goHome';

import NavBar from './components/NavBar/NavBar';
import MainView from './components/MainView/MainView';
import TechnicalSkillsView from './components/TechnicalSkillsView/TechnicalSkillsView';

// optimize Education next ...
import Education from './components/education/education';

import Projects from './components/projects/projects';
import Resume from './components/resume';
import Message from './components/message/message';


const App = ({history}) => {

// XMAS ONLY
  // const [letItSnow, setLetItSnow] = useState(false);
  // const [snowGauge, setSnowGauge] = useState(false);
  // useEffect(()=>{
  //   const body = document.getElementById('body');
  //   body.style.backgroundColor = 'rgba(0,0,0,1)';
  //   body.style.color = 'rgba(255,255,255,1)';
  //   setTimeout(() => {
  //     setSnowGauge(true);
  //     setLetItSnow(true);
  //     setTimeout(() => {
  //       setBlizzard(true);
  //     }, 2000);
  //     body.animate([
  //       {backgroundColor: 'rgba(0,0,0,1)'},
  //       {backgroundColor: 'rgba(0,0,0,0.75)'},
  //       {backgroundColor: 'rgba(255,255,255,0.75)'},
  //       {backgroundColor: 'rgba(0,200,0,0.75)'},
  //       {backgroundColor: 'rgba(0,200,0,1)'},
  //       {backgroundColor: 'rgba(0,200,0,0.75)'},
  //       {backgroundColor: 'rgba(200,0,0,0.75)'},
  //       {backgroundColor: 'rgba(200,0,0,1)'},
  //       {backgroundColor: 'rgba(200,0,0,0.75)'},
  //       {backgroundColor: 'rgba(0,0,0,0.75)'},
  //       {backgroundColor: 'rgba(0,0,0,1)'}
  //     ], {
  //       duration: 4000,
  //       delay: 2000
  //     });
  //     setTimeout(() => {
  //       setBlizzard(false);
  //       body.style.backgroundColor = 'rgba(0,0,0,1)';
  //     }, 6000);

  //   }, 12500);
  // },[]);
  // const [SNOW_RATE, SET_SNOW_RATE] = useState(0.25);
  // const handleSnowRate = (e) => {
  //   let prefix = `0.${e.target.value}`;
  //   let result = +prefix;
  //   console.log("input", result)
  //   SET_SNOW_RATE(result);
  // };
  // const [blizzard, setBlizzard] = useState(false);
  // useEffect(()=>{
  //   if(SNOW_RATE === 0.25) {
  //     return;
  //   }
  //   if(SNOW_RATE < 0.15) {
  //     setLetItSnow(false);
  //   } else {
  //     setLetItSnow(true);
  //   }
  //   if(SNOW_RATE > 0.85) {
  //     setBlizzard(true);
  //   } else {
  //     setBlizzard(false);
  //   }
  // },[SNOW_RATE]);
  
// x ------- STARS --------------------------------------------------------
  const [starTop_0, setStarTop_0] = useState(Math.floor(Math.random()*41));
  const [starLeft_0, setStarLeft_0] = useState(Math.floor(Math.random()*100));
  useEffect(()=> {
    setInterval(() => {
      setStarTop_0(Math.floor(Math.random()*41));
      setStarLeft_0(Math.floor(Math.random()*100));
    }, 1750);
  },[]);
  const [starTop_1, setStarTop_1] = useState(Math.floor(Math.random()*41));
  const [starLeft_1, setStarLeft_1] = useState(Math.floor(Math.random()*100));
  useEffect(()=> {
    setInterval(() => {
      setStarTop_1(Math.floor(Math.random()*41));
      setStarLeft_1(Math.floor(Math.random()*100));
    }, 1650);
  },[]);
  const [starTop_2, setStarTop_2] = useState(Math.floor(Math.random()*41));
  const [starLeft_2, setStarLeft_2] = useState(Math.floor(Math.random()*100));
  useEffect(()=> {
    setInterval(() => {
      setStarTop_2(Math.floor(Math.random()*41));
      setStarLeft_2(Math.floor(Math.random()*100));
    }, 1550);
  },[]);
// ---------------------------------------------

  const [message, setMessage] = useState(false);
  const handleMessage = () => {
    setMessage(true);
  };
    return(
    <div className="App mainScreen">
      <div className="container-fluid">
        <div className="myScrollBar">
          <ScrollProgressRead backgroundColor="rgba(97, 218, 251, 0.25)" barColor="rgba(255, 234, 41, 0.5)" height="0.05rem"/>
        </div>
          <div className="star_0" style={{top: `${starTop_0}%`, left: `${starLeft_0}%`}}></div>
          <div className="star_1" style={{top: `${starTop_1}%`, left: `${starLeft_1}%`}}></div>
          <div className="star_2" style={{top: `${starTop_2}%`, left: `${starLeft_2}%`}}></div>
          <div id="gravity" className="gravity"><i className="fa fa-grav fa-2x" aria-hidden="true"></i></div>
        <div id="mainView" className="row mainView">
          <MainView message={message}/>
        </div>
        <div id="routes" className="row">
          <Switch>
            <Route exact path="/technical" component={TechnicalSkillsView}/>
            <Route exact path="/education" component={Education}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/resume" component={Resume}/>
            <Route exact path="/contact" render={props=> <Message {...props} handleMessage={handleMessage}/>}/>
            <Route exact path="/michael-cote-profile-2020" component={GoHome}/>
            <Redirect from="/" exact to="/michael-cote-profile-2020"/>
            <Redirect to="/michael-cote-profile-2020"/>
          </Switch>
        </div>
      </div>
      <NavBar history={history}/>
      
      {/* {letItSnow?<div id="snow" style={{opacity: `${SNOW_RATE}`}}></div>:''} */}
      {/* {blizzard?<div id="blizzard" style={{opacity: `${SNOW_RATE}`}}></div>:''} */}
    </div>
    );
  };
export default App;