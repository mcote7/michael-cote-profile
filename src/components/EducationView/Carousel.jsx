import React from 'react';
import '../../SASS/carousel.scss';


const Carousel = ({image, len, id}) => {

  
  return ( 
    <div className="my-carousel">
      <div className="car-cap"></div>
      <div className="car-cusp"><div className="cusp-car"></div></div>
      <div className="cell-frame">
        <div id="certidx" className="cell-frame-display">
          {`${id}`}&nbsp;OF&nbsp;{`${len}`}
        </div>
      </div>
      
      <div className={`my-cell ${image}`}></div>
      
      <div className="speach-wrap">
        <div className="speach-button">
          <strong><i class="fa fa-assistive-listening-systems" aria-hidden="true"></i></strong>
          <small><i class="fa fa-audio-description" aria-hidden="true"></i></small>
        </div>
      </div>
    </div>
  );
}

export default Carousel;