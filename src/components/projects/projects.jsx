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
      <div className="col-xl-4 mt-5">
        <RecipieApp/>
      </div>
      <div className="col-xl-4 mt-5">
        <MovieApp/>
      </div>
      <div className="col-xl-4 mt-5">
        <BugApp/>
      </div>
    </React.Fragment>
  );
}

export default Projects;