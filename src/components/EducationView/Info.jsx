import React from 'react';
import '../../SASS/carousel.scss';

const Info = ({info, logo}) => {
  const scrollbox = document.getElementById("certinfo");
  const scrollCheck = () => {
    console.log("📜", scrollbox);
  };
  return ( 
    <div className="rel">
      <div id="certinfo" className="info-wrap" onScroll={scrollCheck}>
        {info.toUpperCase()}&nbsp;
      </div>
      <div className={`logo ${logo}`}></div>
      <div id="carrot" className="carrot-down">
          <i class="fa fa-caret-down" aria-hidden="true"></i>
      </div>
    </div>
  );
}
export default Info;
