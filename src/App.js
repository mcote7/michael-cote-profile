import './App.css';
import React, {useState} from 'react';
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
          <MainView message={message}/>
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
    </div>
    );
  };
export default App;