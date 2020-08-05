import React, { useEffect, useState } from 'react';
import { onRoute } from './../utilities/onRoute';
import '../css/technical.css'

const Home = () => {
  const [view0, setView0] = useState(false);
  const [view1, setView1] = useState(false);
  const [view2, setView2] = useState(false);
  const [view3, setView3] = useState(false);
  useEffect(() => {
    onRoute();
    setTimeout(()=> {
      setView0(true);
    }, 500);
    setTimeout(()=> {
      setView1(true);
    }, 1000);
    setTimeout(()=> {
      setView2(true);
    }, 1500);
    setTimeout(()=> {
      setView3(true);
    }, 2000);
  },[]);
  return (
    <React.Fragment>
      {view0 ? <>
      <div className="col-xl-3 techTop">
        <div className="techTitleWrap">
          <span className="techIcons"><i className="fa fa-file-code-o fa-4x" aria-hidden="true"></i></span>
          <h1 className="p-2 techTitle">Languages</h1>
        </div>
        <ul className="techList">
          <li>JavaScript</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>C#</li>
          <li>python</li>
        </ul>
      </div> </> : <div className="col-xl-3" style={{height: '100vh'}}></div>}
      {view1 ? <>
      <div className="col-xl-3 techTop">
        <div className="techTitleWrap">
          <span className="techIcons"><i className="fa fa-book fa-4x" aria-hidden="true"></i></span>
          <h1 className="p-2 techTitle">Libraries&nbsp;&nbsp;&nbsp;&nbsp;</h1>
        </div>
        <ul className="techList">
          <ul className="yella"><li className="yellowBull">React</li></ul>
          <li>Bootstrap</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>ASP.NET</li>
          <li>.NET Core</li>
          <li>Entity</li>
          <li>Django</li>
        </ul>
      </div> </> : <div className="col-xl-3" style={{height: '100vh'}}></div>}
      {view2 ? <>
      <div className="col-xl-3 techTop">
        <div className="techTitleWrap">
          <span className="techIcons"><i className="fa fa-database fa-4x" aria-hidden="true"></i></span>
          <h1 className="p-2 techTitle">Database&nbsp;&nbsp;</h1>
        </div>
        <ul className="techList">
          <li>MongoDB</li>
          <li>Mongo Atlas</li>
          <li>Mongo compass</li>
          <li>mongoose</li>
          <li>MySql</li>
          <li>MySqlLite</li>
        </ul>
      </div> </> : <div className="col-xl-3" style={{height: '100vh'}}></div>}
      {view3 ? <>
      <div className="col-xl-3 techTop">
        <div className="techTitleWrap">
          <span className="techIcons"><i className="fa fa-cogs fa-4x" aria-hidden="true"></i></span>
          <h1 className="p-2 techTitle">Tools&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
        </div>
        <ul className="techList titleBottom">
          <li>VSCode</li>
          <li>Jest</li>
          <li>SQL Workbench</li>
          <li>Postman</li>
          <li>Heroku</li>
          <li>AWS</li>
          <li>Git hub</li>
          <li>Photoshop</li>
        </ul>
      </div> </> : <div className="col-xl-3" style={{height: '100vh'}}></div>}
    </React.Fragment>
  );
};
export default Home;