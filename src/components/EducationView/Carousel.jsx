import React from 'react';
import '../../SASS/carousel.scss';

import { useSpeechSynthesis } from 'react-speech-kit';


const Carousel = ({title, date, image, len, id, speach}) => {

  const { speak, voices } = useSpeechSynthesis();
  const voice = voices[7];
  const rate = 0.9;
  const volume = 0.8;

  const sayCourse = () => {
    speak({text: `${speach}`, voice, rate, volume});
  }

  
  return ( 
    <div className="my-carousel">
      
      <div className="cell-frame-title">
        {`${title.toUpperCase()}`}&nbsp;<small>_</small>&nbsp;<small>{`${date.toUpperCase()}`}</small>
      </div>
      
      <div className="cell-frame-len">
        (&nbsp;&nbsp;{`${id}`}&nbsp;OF&nbsp;{`${len}`}&nbsp;&nbsp;)
      </div>
      
      <div className={`my-cell ${image}`}></div>
      
      <div className="speach-wrap">
        <div className="speach-button" onClick={sayCourse}>
          <strong><i className="fa fa-assistive-listening-systems" aria-hidden="true"></i></strong>
        </div>
      </div>
    </div>
  );
}

export default Carousel;