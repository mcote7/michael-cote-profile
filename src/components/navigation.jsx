import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar fixed-bottom navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Michael Cote</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/technical-skills">Technical Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/education">Education</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Personal Projects</a>
          </li>
        </ul>
        <span className="navbar-text">
          side note about things and stuff
        </span>
      </div>
    </nav>
  );
}

export default NavBar;