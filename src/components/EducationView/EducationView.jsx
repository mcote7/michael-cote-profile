import React, { useEffect, useState } from 'react';

import { onRoute } from '../../utilities/onRoute';

import '../../SASS/education-view.scss';
import '../../SASS/carousel.scss';

import {EDU} from '../../config/education';

import Carousel from './Carousel';
import Info from './Info';

import { useSpeechSynthesis } from 'react-speech-kit';


const EducationView = () => {

  const [isDesktop, setIsDesktop] = useState();

  useEffect( () => {
    onRoute();
    screenCheck();
    window.addEventListener('resize', screenCheck);
    return () => window.removeEventListener('resize', screenCheck);
  },[]);

  const screenCheck = () => {
    if(window.matchMedia("(max-width: 750px)").matches) {
      console.log("☎ is phone")
      setIsDesktop(false);
    } else {
      console.log("🖥 is desktop")
      setIsDesktop(true);
    }
  };

  const [index, setIndex] = useState(0);
  const len = EDU.length;
  const next = document.getElementById("next");
  const prev = document.getElementById("prev");

  const nextImage = () => {
    setIndex((index + 1) % len);
    next.animate([
      {color: '#ffcb66', transform: 'translateY(0rem) scale(1.2)', opacity: 1},
      {color: '#ffdd99', transform: 'translateY(-1.25rem) scale(1)', opacity: 0.1}
    ], {
      duration: 444,
      easing: 'ease-in'
    });
  };
  
  const prevImage = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(len - 1);
    } else {
      setIndex(nextIndex);
    }
    prev.animate([
      {color: '#ffcb66', transform: 'translateY(0rem) scale(1.2)', opacity: 1},
      {color: '#ffdd99', transform: 'translateY(1.25rem) scale(1)', opacity: 0.1}
    ], {
      duration: 444,
      easing: 'ease-in'
    });
  };
  
  const { speak, voices } = useSpeechSynthesis();
  const voice = voices[7];
  const rate = 0.9;
  const volume = 0.8;
  
  const sayTitle = (title) => {
    speak({text: `${title}`, voice, rate, volume});
  }; 
  
  const sayInfo = (info) => {
    speak({text: `${info}`, voice, rate, volume});
  };
  
  if(isDesktop) return (
    <div className="lcars-cont">
      {/* Lcars left bar frame */}
      <div className="lcars-left-col">
        
        <div className="lcars-left-top-elbow"></div>
          <div className="lcars-left-elbow-extender-top">
            <div className="star-trak MTauto MLauto"></div>
          </div>
            <div className="lcars-left-side-fill-top"><span className="digits MBauto MLauto">00-028519</span></div>
            
              <div className="lcars-left-controls-frame-top">
                <span className="lcars-title-control">CONTROLLER</span>
              </div>
              
              <div className="lcars-control-wrap">
                <div className="cusp-top"><div className="top-cusp"></div></div>
                <div className="lcars-control-outer">
                  {/* outer tab arrows */}
                </div>
                <div className="cusp-btm"><div className="btm-cusp"></div></div>
                <div className="lcars-control-inner">
                  <div className="lcars-control-btn" onClick={nextImage}>
                    <span className="digits MTauto MLauto">NEXT</span>
                    <div id="next" className="next-arr"><i className="fa fa-caret-up" aria-hidden="true"></i></div>
                  </div>
                  <div className="lcars-control-btn" onClick={prevImage}>
                    <span className="digits MBauto MLauto">PREV</span>
                    <div id="prev" className="prev-arr"><i className="fa fa-caret-down" aria-hidden="true"></i></div>
                  </div>
                </div>
              </div>
              
              <div className="lcars-left-controls-frame-bottom"><span className="digits MTauto MLauto">00-098701</span></div>
            
            <div className="lcars-left-side-fill-bottom"><span className="digits MTauto MLauto">00-013799</span></div>
          <div className="lcars-left-elbow-extender-bottom"><span className="digits MBauto MLauto">00-044702</span></div>
        <div className="lcars-left-bottom-elbow"></div>
        
      </div>
      {/* END SIDEBAR */}
      
      {/* Lcars main container top frame */}
      <div className="lcars-main-col">
        <div className="lcars-top-frame">
          <div className="lcars-top-bar">
            <div className="lcars-title">EDUCATION</div>
          </div>
          <div className="lcars-top-buffer">
            <div className="lcars-top-elbow-buffer"></div>
          </div>
        </div>
        {/* display row */}
        <div className="lcars-display-main row">
          <div className="col-xl-6 lcars-display-col">
            <Carousel 
              title={EDU[index].title} 
              date={EDU[index].date} 
              image={EDU[index].image} 
              len={len} id={EDU[index].id} 
              speach={EDU[index].speach}/>
          </div>
          <div className="col-xl-6 lcars-display-col">
            <Info info={EDU[index].info} logo={EDU[index].logo}/>
          </div>
        </div>
        {/* bottom frame */}
        <div className="lcars-bottom-frame">
          <div className="lcars-bottom-buffer">
            <div className="lcars-bottom-elbow-buffer"></div>
          </div>
          <div className="lcars-bottom-bar">
            <div className="lcars-sub-title">
              <div className="sub-title">LCARS-2021</div>
              <div className="lcars-sub-title-btm MTauto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // ☎ view 
  if(!isDesktop) return (
    <div className="good-job-cote">
      <div className="the-certs">
        
        {EDU && EDU.map( ( ed, idx ) => {
          return ( 
            <div key={idx} className="my-cert-wrap">
              
              <div className="cell-frame-title">
                {`${ed.title.toUpperCase()}`}<small>&nbsp;_&nbsp;{`${ed.date.toUpperCase()}`}</small><strong className="ml-auto">{`${idx}`}</strong>
              </div>
              
              <div className={`my-cert ${ed.image}`}></div>
              
              <div onClick={()=> sayTitle(ed.speach)} className="speak-title">
                <i style={{position: 'absolute'}} class="fa fa-volume-up fa-rotate-180" aria-hidden="true"></i>
              </div>
              
              <div onClick={()=> sayInfo(ed.info)} className="speak-info">
                <i style={{position: 'absolute'}} class="fa fa-volume-up" aria-hidden="true"></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default EducationView;
