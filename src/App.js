import './App.css';
import React, {useEffect, useState} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';

import ScrollProgressRead from 'react-scroll-progress-read';

import GoHome from './utilities/goHome';

import NavBar from './components/NavBar/NavBar';

// MAKE REUSEABLE CARD COMPONENT FOR MAIN ITEMS??
import MainView from './components/MainView/MainView';

// optimize technical skills next ...
import TechnicalSkills from './components/technicalSkills';

import Education from './components/education/education';
import Projects from './components/projects/projects';
import Resume from './components/resume';
import Message from './components/message/message';


const App = ({history}) => {

// XMAS ONLY
  const [letItSnow, setLetItSnow] = useState(false);
  useEffect(()=>{
    const body = document.getElementById('body');
    body.style.backgroundColor = 'rgba(0,0,0,1)';
    body.style.color = 'rgba(255,255,255,1)';
    setTimeout(() => {
      setLetItSnow(true);

      body.animate([
        {backgroundColor: 'rgba(0,0,0,1)'},
        {backgroundColor: 'rgba(0,0,0,0.75)'},
        {backgroundColor: 'rgba(255,255,255,0.75)'},
        {backgroundColor: 'rgba(0,255,0,0.75)'},
        {backgroundColor: 'rgba(0,255,0,0.9)'},
        {backgroundColor: 'rgba(0,255,0,0.75)'},
        {backgroundColor: 'rgba(255,0,0,0.75)'},
        {backgroundColor: 'rgba(255,0,0,0.9)'},
        {backgroundColor: 'rgba(255,0,0,0.75)'},
        {backgroundColor: 'rgba(0,0,0,0.75)'},
        {backgroundColor: 'rgba(0,0,0,1)'}
      ], {
        duration: 14000,
        delay: 2000
      });
      setTimeout(() => {
        body.style.backgroundColor = 'rgba(0,0,0,1)';
      }, 16000);

    }, 12500);
  },[]);
  const [SNOW_RATE, SET_SNOW_RATE] = useState(0.25);
  const handleSnowRate = (e) => {
    let prefix = `0.${e.target.value}`;
    let result = +prefix;
    console.log("input", result)
    SET_SNOW_RATE(result);
  };
  const [blizzard, setBlizzard] = useState(false);
  useEffect(()=>{
    if(SNOW_RATE > 0.8) {
      setBlizzard(true);
    } else {
      setBlizzard(false);
    }
  },[SNOW_RATE]);
// x ----------------------------------------------------------------------

  const [message, setMessage] = useState(false);
  const handleMessage = () => {
    setMessage(true);
  };
    return(
    <div className="App mainScreen">
      <div className="container-fluid">
        <div className="myScrollBar">
          <ScrollProgressRead backgroundColor="rgba(97, 218, 251, 0.5)" barColor="cornsilk" height="0.2rem"/>
        </div>
        <div id="mainView" className="row mainView">
          <MainView message={message} handleSnowRate={handleSnowRate} letItSnow={letItSnow} blizzard={blizzard}/>
        </div>
        <div id="routes" className="row">
          <Switch>
            <Route exact path="/technical" component={TechnicalSkills}/>
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
      {letItSnow?<div id="snow" style={{opacity: `${SNOW_RATE}`}}></div>:''}
      {blizzard?<div id="blizzard" style={{opacity: `${SNOW_RATE}`}}></div>:''}
    </div>
    );
  };
export default App;