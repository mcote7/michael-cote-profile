import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';

import '../css/navbar.css';

import SpeachNavigation from './SpeachNavigation';


const NavBar = ({history}) => {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(()=> {
      setLoading(false);
    }, 9000)
  },[])
  if(loading) return null;

  return (
    <nav id="myNavbar" className="navbar fixed-bottom navbar-expand-xl myNavBar">

      <div className="nameGroup">
        <NavLink className="myNavLinksName" to="/">Michael Cote</NavLink>
        <NavLink className="navSpan" to="/">web developer in 2020</NavLink>
      </div>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span><i className="fa fa-bars barsIcon" aria-hidden="true"></i></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarText">

        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink activeClassName="myNavLinks-on" className="myNavLinks" to="/technical">
            <span><i className="fa fa-cog" aria-hidden="true"></i></span>&nbsp;Technical</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="myNavLinks-on" className="myNavLinks" to="/education">
            <span><i className="fa fa-graduation-cap" aria-hidden="true"></i></span>&nbsp;Education</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="myNavLinks-on" className="myNavLinks" to="/projects">
            <span><i className="fa fa-th-list" aria-hidden="true"></i></span>&nbsp;Projects</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="myNavLinks-on" className="myNavLinks" to="/resume">
            <span><i className="fa fa-file-text-o" aria-hidden="true"></i></span>&nbsp;Resume</NavLink>
          </li>
        </ul>

        <span className="navbar-text">
          <SpeachNavigation history={history}/>
        </span>

      </div>

    </nav>
  );
};
export default NavBar;