import React, { useEffect } from 'react';
import RecipieApp from './recipieApp';
import MovieApp from './movieApp';
import BugApp from './bugApp';
import '../../css/projects.css';

const Projects = () => {
  useEffect(() => {
    // const height = document.body.scrollHeight;
    console.log("projectsHeight",document.body.scrollHeight)
    window.scrollTo({top: 0});
    setTimeout(()=> {
      window.scrollTo({top: 775, behavior: 'smooth'});
    }, 100);
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