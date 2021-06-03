import React, { useEffect } from 'react';
import '../../SASS/projects-view.scss';
import {onRoute} from '../../utilities/onRoute';

import {PROJ} from '../../config/projects';
import ProjectCard from '../ProjectsView/ProjectCard';


const ProjectsView = () => {

  useEffect(()=> {
    onRoute();
  }, []);


  return ( <React.Fragment>
    <div className="pro-row row">
      <div className="pro-col col-sm-12 mx-auto">
        
        {PROJ && PROJ.map((proj, idx) => {
          return(
            <ProjectCard key={idx} title={proj.title} date={proj.date} url={proj.url} info={proj.info} tech={proj.tech} />
          );
        })}
        
      </div>
    </div>
    
    <div className="row my-5" style={{height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <p>🚧 🏗 👷‍♂️</p>&nbsp;<p>in dev...</p>
    </div>
  </React.Fragment> );
};

export default ProjectsView;
