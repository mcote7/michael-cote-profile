import React from 'react';
import '../../SASS/carousel.scss';


const Carousel = ({image}) => {
  
  return ( 
    <div className="my-carousel">
      <div className={`my-cell ${image}`}></div>
    </div>
  );
}

export default Carousel;