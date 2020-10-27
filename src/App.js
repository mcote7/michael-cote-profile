import './App.css';
import React, {useState} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';

import ScrollProgressRead from 'react-scroll-progress-read';

import GoHome from './utilities/goHome';

import MainView from './components/MainView/MainView';
// optimize navbar next ...
import NavBar from './components/navigation';
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
    <div className="App">
      <div className="container-fluid">
        <div className="myScrollBar">
          <ScrollProgressRead backgroundColor="rgba(97, 218, 251, 0.5)" barColor="cornsilk" height="0.2rem"/>
        </div>
        <div id="cote" className="row fullScreen">
          <MainView  message={message} />
        </div>
        <div className="row">
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