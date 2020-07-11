import './App.css';
import React, {Component} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import Dummy from './components/dummy';
import NotFound from './components/notFound';
import NavBar from './components/navigation';
import MainPage from './components/mainPage';
import Education from './components/education/education';
import TechnicalSkills from './components/technicalSkills';


class App extends Component {

  render() {
    return(
    <div className="App">
      <div className="container-fluid">
        <div className="row fullScreen">
          <MainPage/>
        </div>
        <div className="row fullScreen">
          <Switch>
            <Route exact path="/technical-skills" component={TechnicalSkills}/>
            <Route exact path="/education" component={Education}/>
            <Route exact path="/not-found" component={NotFound}/>
            <Route exact path="/michael-cote" component={Dummy}/>
            <Redirect from="/" exact to="/michael-cote"/>
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
