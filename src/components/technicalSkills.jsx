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
    <div className="techContainer container-fluid">
      {view0 ? <>
      <div className="col-xl-3 techTop image">
        <div className="techTitleWrap">
          <span className="techIcons"><i className="fa fa-file-code-o fa-4x" aria-hidden="true"></i></span>
          <h1 className="p-2 techTitle">Languages</h1>
        </div>
        <ul className="techList">
          <li className="listItem">JavaScript</li>
          <li className="listItem">HTML5</li>
          <li className="listItem">CSS3</li>
          <li className="listItem">C#</li>
          <li className="listItem">python</li>
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
          <li className="listItem">Bootstrap</li>
          <li className="listItem">Node.js</li>
          <li className="listItem">Express</li>
          <li className="listItem">ASP.NET</li>
          <li className="listItem">.NET Core</li>
          <li className="listItem">Entity</li>
          <li className="listItem">Django</li>
        </ul>
      </div> </> : <div className="col-xl-3" style={{height: '100vh'}}></div>}
      {view2 ? <>
      <div className="col-xl-3 techTop">
        <div className="techTitleWrap">
          <span className="techIcons"><i className="fa fa-database fa-4x" aria-hidden="true"></i></span>
          <h1 className="p-2 techTitle">Database&nbsp;&nbsp;</h1>
        </div>
        <ul className="techList">
          <li className="listItem">MongoDB</li>
          <li className="listItem">Mongo Atlas</li>
          <li className="listItem">Mongo compass</li>
          <li className="listItem">mongoose</li>
          <li className="listItem">MySql</li>
          <li className="listItem">MySqlLite</li>
        </ul>
      </div> </> : <div className="col-xl-3" style={{height: '100vh'}}></div>}
      {view3 ? <>
      <div className="col-xl-3 techTop">
        <div className="techTitleWrap">
          <span className="techIcons"><i className="fa fa-cogs fa-4x" aria-hidden="true"></i></span>
          <h1 className="p-2 techTitle">Tools&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
        </div>
        <ul className="techList titleBottom">
          <li className="listItem">VSCode</li>
          <li className="listItem">Jest</li>
          <li className="listItem">SQL Workbench</li>
          <li className="listItem">Postman</li>
          <li className="listItem">Heroku</li>
          <li className="listItem">AWS</li>
          <li className="listItem">Git hub</li>
          <li className="listItem">Photoshop</li>
        </ul>
      </div> </> : <div className="col-xl-3" style={{height: '100vh'}}></div>}
    </div>
    </React.Fragment>
  );
};
export default Home;