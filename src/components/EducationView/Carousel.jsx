import React from 'react';
import '../../SASS/carousel.scss';

import { useSpeechSynthesis } from 'react-speech-kit';


const Carousel = ({image, len, id, speach}) => {

  const { speak, voices } = useSpeechSynthesis();
  const voice = voices[7];
  const rate = 0.9;
  const volume = 0.3;

  const sayCourse = () => {
    speak({text: `${speach}`, voice, rate, volume});
  }

  
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
        <div className="speach-button" onClick={sayCourse}>
          <strong><i class="fa fa-assistive-listening-systems" aria-hidden="true"></i></strong>
        </div>
      </div>
    </div>
  );
}

export default Carousel;