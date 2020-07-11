import React, { useEffect } from 'react';
import { onRoute } from './../utilities/onRoute';
import '../css/technical.css'

const Home = () => {
  useEffect(() => {
    onRoute();
  },[])
  return (
    <React.Fragment>
      <div className="col-xl-3 mt-5">
        <div className="techTitleWrap mr-5">
          <span className="techIcons"><i className="fa fa-file-code-o fa-5x" aria-hidden="true"></i></span>
          <h1 className="p-2 techTitle">Languages</h1>
        </div>
        <ul className="techList titleLeftMargin">
          <li>JavaScript</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>C#</li>
          <li>python</li>
        </ul>
      </div>
      <div className="col-xl-3 mt-5">
        <div className="techTitleWrap mr-5">
          <span className="techIcons"><i className="fa fa-book fa-5x" aria-hidden="true"></i></span>
          <h1 className="p-2 techTitle">Libraries</h1>
        </div>
        <ul className="techList titleLeftMargin">
          <ul className="yella"><li className="yellowBull">React</li></ul>
          <li>Bootstrap</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>ASP.NET</li>
          <li>.NET Core</li>
          <li>Entity</li>
          <li>Django</li>
        </ul>
      </div>
      <div className="col-xl-3 mt-5">
        <div className="techTitleWrap mr-5">
          <span className="techIcons"><i className="fa fa-database fa-5x" aria-hidden="true"></i></span>
          <h1 className="p-2 techTitle">Database</h1>
        </div>
        <ul className="techList titleLeftMargin">
          <li>MongoDB</li>
          <li>Mongo Atlas</li>
          <li>Mongo compass</li>
          <li>mongoose</li>
          <li>MySql</li>
          <li>MySqlLite</li>
        </ul>
      </div>
      <div className="col-xl-3 mt-5">
        <div className="techTitleWrap tools">
          <span className="techIcons"><i className="fa fa-wrench fa-5x" aria-hidden="true"></i></span>
          <h1 className="p-2 techTitle">Tools</h1>
        </div>
        <ul className="techList titleLeftMargin titleBottom">
          <li>VSCode</li>
          <li>Jest</li>
          <li>MySQL Workbench</li>
          <li>Postman</li>
          <li>Heroku</li>
          <li>AWS</li>
          <li>Git hub</li>
          <li>Photoshop</li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Home;