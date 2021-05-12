import React from 'react';
import '../../SASS/carousel.scss';

const Info = ({info, logo}) => {
  const scrollbox = document.getElementById("certinfo");
  const carrot = document.getElementById("carrot");
  const scrollCheck = () => {
    if(scrollbox.scrollTop < 5) {
      // console.log("top?", scrollbox.scrollTop)
      carrot.style.opacity = 0.25;
      scrollbox.style.boxShadow = '0px -18px 10px -10px inset rgba(255,255,255,0.25)';
    } else {
      carrot.style.opacity = 1;
      scrollbox.style.boxShadow = '0px 18px 10px -10px inset rgba(255,255,255,0.25)';
    }
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
