import React from 'react';
import '../../SASS/carousel.scss';

const Info = ({info, logo}) => {
  return ( 
    <div className="info-wrap">
      {info.toUpperCase()}&nbsp;
      <div className={`logo ${logo}`}></div>
    </div>
  );
}
export default Info;
