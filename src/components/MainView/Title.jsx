import React from 'react';

const Title = ({light, handleMouseMove, handleMouseOut}) => {



  return (
    <div className="row my-1">
      <div className="col-12">

        <h1 className="titleName">M
        
        {light?
        
        <span onMouseMove={(e)=>handleMouseMove(e)} onMouseOut={(e)=>handleMouseOut(e)}
        className="yellowWar blinky titleName">i</span>
        
        :<span className="titleNameSpec">i</span>}
        
        chael P Cote</h1>

        <p className="titleSub">web developer in&nbsp;&nbsp;2020</p>
      </div>
    </div>
  );
};
export default Title;