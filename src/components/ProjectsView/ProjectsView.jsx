import React, { useEffect } from 'react';
import '../../SASS/projects-view.scss';
import {onRoute} from '../../utilities/onRoute';


const ProjectsView = () => {

  useEffect(()=> {
    onRoute();
  }, []);


  return ( 
    <div className="pro-row row">
      <div className="pro-col col-sm-12 mx-auto">
        
        {/* comp... */}
        <div className="pro-card mx-auto">
          
          <div className="pro-title">
            <h5>o-shop</h5>
            <a href="https://o-shop-c0e98.web.app/" target="_blank" rel="noopener noreferrer">https://o-shop-c0e98.web.app/</a>
          </div>
          
          <div className="i-wrap">
            <iframe src="https://o-shop-c0e98.web.app/" title="o-shop"/>
          </div>
          
          <div className="pro-info">
            <p>ℹ laurwem ipsum del sur dati lottes follorg minrty powelsrdf.</p>
          </div>
        </div>
        {/* comp ^ */}
        
      </div>
    </div>
  );
};

export default ProjectsView;