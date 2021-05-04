import React, { useEffect, useState } from 'react';

import { onRoute } from '../../utilities/onRoute';

import '../../SASS/education-view.scss';

import {EDU} from './education';

import Carousel from './Carousel';


const EducationView = () => {

  useEffect(()=> {
    onRoute();
  },[]);

  const [index, setIndex] = useState(0);

  const next = document.getElementById("next");
  const prev = document.getElementById("prev");


  const nextImage = () => {
    setIndex((index + 1) % EDU.length);
    // console.log("next", index, '🎠', EDU[index].image)
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
      setIndex(EDU.length - 1);
    } else {
      setIndex(nextIndex);
    }
    // console.log("prev", index, '🎠', EDU[index].image)
    prev.animate([
      {color: '#ffcb66', transform: 'translateY(0rem) scale(1.2)', opacity: 1},
      {color: '#ffdd99', transform: 'translateY(1.25rem) scale(1)', opacity: 0.1}
    ], {
      duration: 444,
      easing: 'ease-in'
    });
  };

  return (
    <div className="lcars-cont">
      {/* Lcars left bar frame */}
      <div className="lcars-left-col">
        
        <div className="lcars-left-top-elbow"></div>
          <div className="lcars-left-elbow-extender-top"><span className="digits MTauto MLauto">00-065786</span></div>
            <div className="lcars-left-side-fill-top"><span className="digits MBauto MLauto">00-028519</span></div>
            
              <div className="lcars-left-controls-frame-top">
                <span className="lcars-title-control">CONTROLLER</span>
              </div>
              
              <div className="lcars-control-wrap">
                <div className="cusp-top"><div className="top-cusp"></div></div>
                <div className="lcars-control-outer">
                  {/* tab */}
                </div>
                <div className="cusp-btm"><div className="btm-cusp"></div></div>
                <div className="lcars-control-inner">
                  <div className="lcars-control-btn" onClick={nextImage}>
                    <span className="digits MTauto MLauto">NEXT</span>
                    <div id="next" className="next-arr"><i class="fa fa-caret-up" aria-hidden="true"></i></div>
                  </div>
                  <div className="lcars-control-btn" onClick={prevImage}>
                    <span className="digits MBauto MLauto">PREV</span>
                    <div id="prev" className="prev-arr"><i class="fa fa-caret-down" aria-hidden="true"></i></div>
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
        <div className="lcars-display-main">
          {/* TODO CONTENT CAROUSEL && INFO DISPLAY */}
          <Carousel image={EDU[index].image}/>
        </div>
        
        {/* bottom frame */}
        <div className="lcars-bottom-frame">
          <div className="lcars-bottom-buffer">
            <div className="lcars-bottom-elbow-buffer"></div>
          </div>
          <div className="lcars-bottom-bar">
            <div className="lcars-sub-title-decor"></div>
              <div className="lcars-sub-title">
                <div className="sub-title">LCARS-2021</div>
                <div className="lcars-sub-title-btm MTauto"></div>
              </div>
            <div className="lcars-sub-title-decor-sm">
              <div className="lcars-sub-title-decor-bit"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationView;