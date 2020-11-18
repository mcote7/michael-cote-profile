import React from 'react';

const Bio = ({self, handleClick, handleMouseEnter, handleMouseMove, handleMouseOut, magic, magic_BG_MAIN, magic_BG_ALPHA}) => {

  return (
    <div className="row">
      <div className="bioWrap col-lg-9">

      <span className="selfWrap">
        <img src={self} className="mySelf float-right" alt="self"/>
      </span>
          
          <h4 className="quote" style={{backgroundColor: `rgba(${magic_BG_MAIN}, ${magic_BG_ALPHA})`}}
          onMouseEnter={(e)=>handleMouseEnter(e)} onMouseMove={(e)=>handleMouseMove(e)}
          onClick={(e)=>handleClick(e)} onMouseOut={(e)=>handleMouseOut(e)} > 
            <span className="mr-1"><i className={`fa fa-magic ${magic}`} aria-hidden="true"></i></span> 
            Dedicated and motivated professional seeking an opportunity to showcase my creative and 
            technical proficiency. My goal is to attain a position which will provide an opportunity 
            for growth and personal development, as well as the opportunity to expand my knowledge.
          </h4>
          
      </div>
    </div>
  );
};
export default Bio;