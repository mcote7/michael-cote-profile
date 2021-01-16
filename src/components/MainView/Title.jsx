import React from 'react';

const Title = ({light}) => {
  
  // , handleSnowRate, blizzard, snowGauge <-- need these props from app component for x-mas
  
  return (<>
    <div className="row mx-0 mt-1 title-row">
      <div className="col-12 title-col">
        <div className="titleName">M{light?
          <span className="yellowWar blinky">i</span>:
          <span className="titleNameSpec">i</span>}chael Cote
        </div>
        <div className="titleSub">
          <span style={{color: 'white', letterSpacing: 0}}>&#8943;&#8886;</span>
          &nbsp;WEB DEVELOPER IN 2021
          <span style={{color: 'white', letterSpacing: 0}}>&#8887;&#8943;</span>
        </div>
      </div>
    </div>

    {/* <div className="row snow-row">
      <div className="col-lg-6 col-md-10 col-sm-11 mx-auto snow-col">
        {snowGauge?
        <div className="snow-wrap">
          <span className="snow-range">
            <label title={blizzard?`Blizzard`:`Snow`} htmlFor="snow">
              {blizzard?<span><i style={{color: 'rgb(96, 217, 251)', transform: 'rotate(90deg)'}}
                className="fa fa-snowflake-o snow-icon" aria-hidden="true"></i></span>:
              <span><i className="fa fa-snowflake-o snow-icon" aria-hidden="true"></i></span>}
            </label>
            <input title={blizzard?`Blizzard`:`Snow`} type="range" min="10" max="99"
            onChange={(e)=>{handleSnowRate(e)}} className="form-control-range snow-input"/>
          </span>
        </div>:<div style={{height: '5rem'}}></div>}
      </div>
    </div> */}
</>
  );
};
export default Title;