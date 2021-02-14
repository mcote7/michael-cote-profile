import React, { useEffect } from 'react';
import { onRoute } from '../../utilities/onRoute';

import '../../SASS/education-view.scss';

const EducationView = () => {

  useEffect(()=> {
    onRoute();
  },[]);

  return (
    <div className="lcars-cont">
      {/* Lcars side bar frame */}
      <div className="lcars-side-col">
        <div className="lcars-top-left-elbow"></div>
          <div className="lcars-left-side-base-fill-top"></div>
            <div className="lcars-left-side-decor-fill"></div>
              <div className="lcars-left-side-base-fill-sm"></div>
                <div style={{paddingTop: '1.25rem'}} className="lcars-left-side-buttons">&#x25B2;</div>
                <div style={{marginTop: '0.5rem'}} className="lcars-left-side-buttons">&#x25BC;</div>
              <div className="lcars-left-side-base-fill-sm"></div>
            <div className="lcars-left-side-decor-fill"></div>
          <div className="lcars-left-side-base-fill-bottom"></div>
        <div className="lcars-bottom-left-elbow"></div>
      </div>
      {/* Lcars main container frame */}
      <div className="lcars-main-col">
        <div className="lcars-main-row-top">
          <div className="lcars-top-bar">
            <div className="lcars-top-title-wrap">
              <div className="lcars-top-title">
                LCARS
              </div>
            </div>
            <div className="lcars-end-cap"></div>
          </div>
        </div>
        {/* Lcars main display */}
        <div className="lcars-display-row">
          <div className="col-md-6 lcars-display-col">
            <div className="lcars-carousel">
              carousel
            </div>
          </div>
          <div className="col-md-6 lcars-display-col">
            <div className="lcars-display-text">
              text
            </div>
          </div>
        </div>
        {/* end main display */}
        <div className="lcars-main-row-bottom">
          <div className="lcars-bottom-bar">
            <div className="lcars-end-cap"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationView;