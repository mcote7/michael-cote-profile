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
          &nbsp;WEB DEVELOPER IN 2020
          <span style={{color: 'white', letterSpacing: 0}}>&#8887;&#8943;</span>
        </div>
      </div>
      <a href="https://mcote7.github.io/michael-cote/" className="alert alert-danger" style={{position: 'sticky'}}>
        This site is old, my first in fact. check out my new site <span><i class="fa fa-external-link" aria-hidden="true"></i></span>
      </a>
    </div>
  </> 
  );
};
export default Title;