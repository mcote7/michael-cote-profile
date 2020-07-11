import React, {Component} from 'react';
import './App.css';
import Education from './components/education/education';
import {Route, Switch} from 'react-router-dom';
import NavBar from './components/navigation';
import TechnicalSkills from './components/technicalSkills';
import MainPage from './components/mainPage';

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
          </Switch>
        </div>
      </div>
      <NavBar/>
    </div>
    );
  }
}
export default App;
