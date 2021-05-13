import React from 'react';
import '../../SASS/carousel.scss';

const Info = ({info, logo}) => {
  return ( 
    <div className="rel">
      <div id="certinfo" className="info-wrap">
        {info.toUpperCase()}
      </div>
      <div className={`logo ${logo}`}></div>
    </div>
  );
}
export default Info;
