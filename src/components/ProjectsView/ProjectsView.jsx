import React, { useEffect } from 'react';
import '../../SASS/projects-view.scss';
import {onRoute} from '../../utilities/onRoute';


const ProjectsView = () => {

  useEffect(()=> {
    onRoute();
  }, []);


  return ( <React.Fragment>
    <div className="pro-row row">
      <div className="pro-col col-sm-12 mx-auto">
        
        {/* comp... */}
        <div className="pro-card mx-auto">
          
          <div className="pro-title">
            <h5>O-SHOP&nbsp;<sup><small>5/21</small></sup></h5>
            <a href="https://o-shop-c0e98.web.app/" target="_blank" rel="noopener noreferrer">https://o-shop-c0e98.web.app/</a>
          </div>
          
          <div className="i-wrap">
            <iframe src="https://o-shop-c0e98.web.app/" title="o-shop"/>
          </div>
          
          <div className="pro-info mt-1">
            <p>A mock produce storefront, e-commerce functionality.</p>
          </div>
        </div>
        {/* comp ^ */}
        
      </div>
    </div>
    {/*  */}
    <div className="row my-5" style={{height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <p>🚧 🏗 👷‍♂️</p>&nbsp;<p>in dev...</p>
    </div>
  </React.Fragment> );
};

export default ProjectsView;
