import './App.css';
import React, {useEffect, useState} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';

import {rainbowConsole} from './config/rainbow';

import ScrollProgressRead from 'react-scroll-progress-read';

import GoHome from './utilities/goHome';

import NavBar from './components/NavBar/NavBar';
import MainView from './components/MainView/MainView';
import TechnicalSkillsView from './components/TechnicalSkillsView/TechnicalSkillsView';

// optimize Education next ...
import Education from './components/education/education';
// import EducationView from './components/EducationView/EducationView';

import Projects from './components/projects/projects';
import Resume from './components/resume';
import Message from './components/message/message';


const App = ({history}) => {

  useEffect(()=> {
    console.log("%cHello World", rainbowConsole)
  },[]);
  
// --- STARS --------------------------------------------------------
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
// -----------

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
    </div>
    );
  };
export default App;