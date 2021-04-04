import React, { useEffect } from 'react';
import { onRoute } from '../../utilities/onRoute';

import '../../SASS/education-view.scss';

const EducationView = () => {

  useEffect(()=> {
    onRoute();
  },[]);

  return (
    <div className="lcars-cont">
      {/* Lcars left bar frame */}
      <div className="lcars-left-col">
        
        <div className="lcars-left-top-elbow"></div>
          <div className="lcars-left-elbow-extender-top"><span className="digits MTauto MLauto">00-065786</span></div>
            <div className="lcars-left-side-fill-top"><span className="digits MBauto MLauto">00-028519</span></div>
            
              <div className="lcars-left-controls-frame-top MBauto MTauto">
                <span className="lcars-title-control">CONTROLLER</span>
              </div>
              
                <div className="lcars-left-side-button-top">
                  <div className="lcars-button">
                    <span className="lcars-button-text MLauto MTauto" style={{marginBottom: '-0.1rem'}}>PREV</span>
                  </div>
                    <div className="lcars-button-cap" style={{paddingTop: '1.6rem'}}>
                      <span>&#x25B2;</span>
                    </div>
                </div>
                
                <div className="lcars-left-side-button-bottom">
                  <div className="lcars-button">
                    <span className="lcars-button-text MLauto MBauto">NEXT</span>
                  </div>
                    <div className="lcars-button-cap">
                      <span>&#x25BC;</span>
                    </div>
                </div>
              
              <div className="lcars-left-controls-frame-bottom MTauto MBauto"></div>
            
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
          {/* TODO CONTENT CAROUSEL / INFO DISPLAY */}
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