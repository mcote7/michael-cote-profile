import React from 'react';

const Title = ({light}) => {
  
  return ( <> 
    <div className="row mt-1 title-row">
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
  </> 
  );
};
export default Title;