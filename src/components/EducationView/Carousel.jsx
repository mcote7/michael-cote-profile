import React from 'react';
import '../../SASS/carousel.scss';


const Carousel = ({image, len, id}) => {
  
  return ( 
    <div className="my-carousel">
      <div className="cell-frame">{`${id} of ${len}`}</div>
      <div className={`my-cell ${image}`}></div>
    </div>
  );
}

export default Carousel;