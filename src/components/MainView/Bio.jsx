import React from 'react';

const Bio = ({self, angular8, handleClick, handleMouseEnter, handleMouseMove, handleMouseOut, magic, magic_BG_MAIN, magic_BG_ALPHA}) => {

  return (
    <div className="row">

      <div className="bioWrap col-lg-9">
        <span className="selfWrap">
          <img src={self} className="mySelf float-right" alt="self"/>
        </span>
          <h4 className="quote" style={{backgroundColor: `rgba(${magic_BG_MAIN}, ${magic_BG_ALPHA})`}}
          onMouseEnter={(e)=>handleMouseEnter(e)} onMouseMove={(e)=>handleMouseMove(e)}
          onClick={(e)=>handleClick(e)} onMouseOut={(e)=>handleMouseOut(e)}>
            <span className="mr-1"><i className={`fa fa-magic ${magic}`} aria-hidden="true"></i></span> 
            Dedicated and motivated professional seeking an opportunity to showcase my creative and 
            technical proficiency. My goal is to attain a position which will provide an opportunity 
            for growth and personal development, as well as the opportunity to expand my knowledge.
          </h4>
      </div>

      <div className="bioWrap col-lg-9">
        <span className="selfWrap">
          <img src={angular8} className="mySelf angular8 float-right" alt="angular8"/>
        </span>
          <h4 className="quote newRole">
            <span className="laptop mr-1"><i className="fa fa-laptop" aria-hidden="true"></i>&nbsp;Current Role:</span><br></br><br></br>
            <span>Software Developer @ VIA3 corperation. We are using Angular 8 to develop video chat and video conferencing applications.</span><br></br><br></br>
            <span>Check out our Unity platform:</span><br></br><br></br>
            <span><a className="via3 py-2 px-3" href="https://www.via3.com/" target="_blank" rel="noopener noreferrer">VIA3.com</a></span>
          </h4>
      </div>

      <div className="bioWrap col-xl-3 col-lg-4">
        <div className="quote theCube pb-4">
          <span className="mr-1 cube"><i className="fa fa-cube fa-4x" aria-hidden="true"></i>. . .</span><br></br><br></br><br></br>
          <a className="enterCube p-2" href="https://mcote7.github.io/react-menu-cube/" target="_blank" rel="noopener noreferrer">&nbsp;enter the cube</a>
        </div>
      </div>

    </div>
  );
};
export default Bio;