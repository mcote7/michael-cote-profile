import React from 'react';

import DotLoader from "react-spinners/DotLoader";

const Loading = ({loading}) => {
  return (
    <div className="loaderWrapper">
      <DotLoader size={250} color={"#ffffff8c"} loading={loading}/>
      <p className="mt-5" style={{color : '#ffffff8c'}}>for best expierience,</p>
      <h5 className="mb-3" style={{color : '#ffffff8c'}}>please view on Chrome.</h5>
      <a className="chromeLink" href="https://www.google.com/chrome/?brand=YTUH&gclid=CjwKCAiA8Jf-BRB-EiwAWDtEGrxA8CgrCuP58wlF1STYV9XGEU13gCRB4iteFO-TppqoY3WLtlPdQRoCEvUQAvD_BwE&gclsrc=aw.ds" target="_blank" rel="noopener noreferrer">
        <span><i className="fa fa-chrome fa-5x chromeIcon" aria-hidden="true"></i></span>
      </a>
    </div>
  );
};
export default Loading;