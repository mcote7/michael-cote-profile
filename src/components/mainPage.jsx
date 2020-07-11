import React from 'react';
import '../css/main.css';

const MainPage = () => {
  return (
    <React.Fragment>
      <div className="titleCont col-12 ml-5">
        <h1 className="titleName">Michael P Cote</h1>
        <p className="titleSub ml-3"> web developer in &nbsp;2020</p>
      </div>
      <div className="titleQuote col-xl-7 ml-5">
        <h4 className="quote">
          ~ Dedicated and motivated professional seeking an opportunity to showcase my creative and 
          technical proficiency.  My goal is to attain a position which will provide an opportunity 
          for growth and personal development, as well as the opportunity to expand my knowledge.
        </h4>
      </div>
    </React.Fragment>
  );
}
export default MainPage;