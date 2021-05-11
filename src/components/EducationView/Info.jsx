import React from 'react';
import '../../SASS/carousel.scss';

const Info = ({info, logo}) => {
  // const scrollbox = document.getElementById("certinfo");
  const carrot = document.getElementById("carrot");
  const scrollCheck = () => {
    carrot.style.opacity = 1;
  };
  return ( 
    <div className="rel">
      <div id="certinfo" className="info-wrap" onScroll={scrollCheck}>
        {info.toUpperCase()}&nbsp;
      </div>
      <div className={`logo ${logo}`}></div>
      <div id="carrot" className="carrot-down">
          <i className="fa fa-caret-down" aria-hidden="true"></i>
      </div>
    </div>
  );
}
export default Info;
