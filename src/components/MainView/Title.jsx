import React from 'react';

const Title = ({light, handleSnowRate, letItSnow, blizzard}) => {

  return (
    <div className="row my-1" style={{borderTop: '0.2rem solid'}}>
      <div className="col-lg-10">
        <h1 className="titleName">M{light?
          <span className="yellowWar blinky">i</span>:
          <span className="titleNameSpec">i</span>}chael P Cote&nbsp;
        </h1>
        <p className="titleSub">Web Developer in 2021</p>
      </div>
      <div className="col-lg-2 snow-col">
        {letItSnow?
        <div className="snow-wrap">
          <span className="snow-range">
            <label htmlFor="snow">
              {blizzard?<span><i className="fa fa-snowflake-o fa-2x snow-icon" aria-hidden="true"></i></span>:
              <span><i className="fa fa-snowflake-o fa-2x snow-icon" aria-hidden="true"></i></span>}</label>
            <input type="range" min="25" max="99" onChange={(e)=>{handleSnowRate(e)}} className="form-control-range snow-input"/>            
          </span>
        </div>:''}
      </div>
      {/* <div className="col-lg-1"></div> */}
    </div>
  );
};
export default Title;