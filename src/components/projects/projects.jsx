import React, { useEffect } from 'react';
import { onRoute } from '../../utilities/onRoute';
import RecipieApp from './recipieApp';
import MovieApp from './movieApp';
import BugApp from './bugApp';
import '../../css/projects.css';

const Projects = () => {
  useEffect(() => {
    onRoute();
  },[])
  return (
    <React.Fragment>
    <div className="projectContainer container-fluid">
      <div className="col-xl-4 mt-5 projectLeft">
        <RecipieApp/>
      </div>
      <div className="col-xl-4 mt-5 projectCenter">
        <MovieApp/>
      </div>
      <div className="col-xl-4 mt-5 projectRight">
        <BugApp/>
      </div>
    </div>
    </React.Fragment>
  );
}

export default Projects;