import React from 'react';

const Title = ({light}) => {

  return (
    <div className="row my-1">
      <div className="col-12">

        <h1 className="titleName">M
        
        {light?
        
        <span className="yellowWar blinky">i</span>
        
        :<span className="titleNameSpec">i</span>}
        
        chael P Cote</h1>

        <p className="titleSub">Web Developer in 2021</p>
      </div>
    </div>
  );
};
export default Title;