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
          <div className="lcars-left-elbow-extender"><span className="digits MTauto MLauto">00-065786</span></div>
            <div className="lcars-left-side-fill"><span className="digits MBauto MLauto">00-028519</span></div>

              <div className="lcars-left-controls">
                <div className="lcars-left-controls-frame-top"></div>
                  <div className="lcars-left-side-button-top">&#x25B2;</div>
                  <div className="lcars-left-side-button-bottom">&#x25BC;</div>
                <div className="lcars-left-controls-frame-bottom"></div>
              </div>

            <div className="lcars-left-side-fill"><span className="digits MTauto MLauto">00-013799</span></div>
          <div className="lcars-left-elbow-extender"><span className="digits MBauto MLauto">00-044702</span></div>
        <div className="lcars-left-bottom-elbow"></div>
      </div>
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
          {/*  */}
        </div>
        {/* bottom frame */}
        <div className="lcars-bottom-frame">
          <div className="lcars-bottom-buffer">
            <div className="lcars-bottom-elbow-buffer"></div>
          </div>
          <div className="lcars-bottom-bar">
            <div className="lcars-sub-title-decor"></div>
            <div className="lcars-sub-title"><span className="digits Mauto">LCARS-2021</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationView;