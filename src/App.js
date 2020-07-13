import './App.css';
import React, {Component} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import scrollTop from './components/scrollTop';
import NotFound from './components/notFound';
import NavBar from './components/navigation';
import MainPage from './components/mainPage';
import Education from './components/education/education';
import TechnicalSkills from './components/technicalSkills';
import Projects from './components/projects/projects';
import Resume from './components/resume';

class App extends Component {
  render() {
    return(
    <div className="App">
      <div className="container-fluid">
        <div id="cote" className="row fullScreen">
          <MainPage/>
        </div>
        <div className="row">
          <Switch>
            <Route exact path="/technical-skills" component={TechnicalSkills}/>
            <Route exact path="/education" component={Education}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/resume" component={Resume}/>
            <Route exact path="/not-found" component={NotFound}/>
            <Route exact path="/michael-cote" component={scrollTop}/>
            <Redirect from="/" exact to="/michael-cote"/>
            <Redirect from="http://mcote7.github.io/michael-cote-profile-2020" exact to="/michael-cote"/>
            <Redirect to="/not-found"/>
          </Switch>
        </div>
      </div>
      <NavBar/>
    </div>
    );
  }
}
export default App;
