import React, {useState, useEffect} from 'react';
import self from '../images/self1_edited.jpg';
import '../css/main.css';
import { Link } from 'react-router-dom';
import Loading from './isLoading';

const MainPage = ({message}) => {
  const [light, setLight] = useState(false);
  const [contact, setContact] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    //loader
    setTimeout(()=> {
      setLoading(false);
    }, 6000)
    //my i
    setTimeout(()=> {
      setLight(true);
    }, 8000)
    // contact btn
    setTimeout(()=> {
      setContact(true);
    }, 9100)
    setTimeout(()=> {
      setContact(false);
    }, 9125)
    setTimeout(()=> {
      setContact(true);
    }, 9150)
    setTimeout(()=> {
      setContact(false);
    }, 9250)
    setTimeout(()=> {
      setContact(true);
    }, 9300)
    setTimeout(()=> {
      setContact(true);
    }, 9350)
    setTimeout(()=> {
      setContact(false);
    }, 9400)
    setTimeout(()=> {
      setContact(true);
    }, 9600)
    setTimeout(()=> {
      setContact(false);
    }, 9625)
    setTimeout(()=> {
      setContact(true);
    }, 9750)
    setTimeout(()=> {
      setContact(false);
    }, 13400)
    setTimeout(()=> {
      setContact(true);
    }, 13600)
    setTimeout(()=> {
      setContact(false);
    }, 13625)
    setTimeout(()=> {
      setContact(true);
    }, 13750)
  },[]);
  if(loading) return <Loading loading={loading}/>;
  return (
    <React.Fragment>
      <div className="titleCont col-xl-12">
        <div className="titleLinks mb-1">
          <p className="social"><span className="fadeicon"><i className="hovIcon fa fa-github-square fa-2x" aria-hidden="true"></i></span>
          &nbsp;<a className="titleAtag" target="_blank" rel="noopener noreferrer"
          href="https://github.com/mcote7">www.github.com/cote</a></p>
          <p className="social"><span className="fadeicon"><i className="hovIcon fa fa-linkedin-square fa-2x" aria-hidden="true"></i></span>
          &nbsp;<a className="titleAtag" target="_blank" rel="noopener noreferrer"
          href="https://linkedin.com/in/michael-cote-wa">www.linkedin.com/in/cote</a></p>
          <p className="social btmPhone"><span className="fadeicon"><i className="hovIcon fa fa-facebook-square fa-2x" aria-hidden="true"></i></span>
          &nbsp;<a className="titleAtag" target="_blank" rel="noopener noreferrer"
          href="https://facebook.com/profile.php?id=100012957396194">www.facebook.com/cote</a></p>
          {contact ? <Link to="/contact" className="contactBtn contactLink">
          <svg width="290px" height="40px" viewBox="0 0 290 40" className="contactBtn">
            <polyline points="289,1 289,39 1,39 1,1 289,1" className="bg-line" />
            <polyline points="289,1 289,39 1,39 1,1 289,1" className="hl-line" />
          </svg>
          {message ? <span style={{color: 'white', fontSize: 'medium'}}>message sent, thank you</span> : 
          <span>&nbsp;Contact me&nbsp;&nbsp;<i className="fa fa-envelope-o" aria-hidden="true"></i></span>}</Link>
          : <div className="placeholder"></div>}
        </div>
        <h1 className="titleName">M{light?<span className="yellowWar blinky titleName">i</span>:<span className="titleNameSpec">i</span>}chael P Cote</h1>
        <p className="titleSub"> web developer in &nbsp;2020</p>
      </div>
      
      <div className="titleQuote col-xl-7">
      <img src={self} className="mySelf float-right rounded-circle" alt="self"/>
        <h4 className="quote">~ 
          Dedicated and motivated professional seeking an opportunity to showcase my creative and 
          technical proficiency. My goal is to attain a position which will provide an opportunity 
          for growth and personal development, as well as the opportunity to expand my knowledge.
        </h4>
      </div>
    </React.Fragment>
  );
}
export default MainPage;

