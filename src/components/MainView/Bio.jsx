import React from 'react';

const Bio = ({self, handleMouseMove, handleMouseOut}) => {

  return (
    <div className="row">
      <div onMouseMove={(e)=>handleMouseMove(e)} onMouseOut={(e)=>handleMouseOut(e)} className="bioWrap col-md-9 mt-4">

        <img src={self} className="mySelf float-right rounded-circle" alt="self"/>
          
          <h4 className="quote"> <span role="img" aria-label="cool">&#10024;</span> 
            Dedicated and motivated professional seeking an opportunity to showcase my creative and 
            technical proficiency. My goal is to attain a position which will provide an opportunity 
            for growth and personal development, as well as the opportunity to expand my knowledge.
          </h4>
          
      </div>
    </div>
  );
};
export default Bio;