import React from 'react';

const Title = ({light, handleSnowRate, letItSnow, blizzard}) => {
  

  return (<>
    <div className="row mx-0 mt-1 title-row">
      <div className="col-12">
        <h1 className="titleName">M{light?
          <span className="yellowWar blinky">i</span>:
          <span className="titleNameSpec">i</span>}chael P Cote&nbsp;
        </h1>
        <p className="titleSub">Web Developer in 2021</p>
      </div>
    </div>

    <div className="row snow-row">
      <div className="col-md-6 mx-auto">
        {letItSnow?
        <div className="snow-wrap">
          <span className="snow-range">
            <label title={blizzard?`Blizzard`:`Snow`} htmlFor="snow">
              {blizzard?<span><i style={{color: 'rgb(96, 217, 251)', transform: 'rotate(90deg)'}}
                className="fa fa-snowflake-o snow-icon" aria-hidden="true"></i></span>:
              <span><i className="fa fa-snowflake-o snow-icon" aria-hidden="true"></i></span>}
            </label>
            <input title={blizzard?`Blizzard`:`Snow`} type="range" min="25" max="99"
            onChange={(e)=>{handleSnowRate(e)}} className="form-control-range snow-input"/>
          </span>
        </div>:<div style={{height: '2rem'}}></div>}
      </div>
    </div>
</>
  );
};
export default Title;