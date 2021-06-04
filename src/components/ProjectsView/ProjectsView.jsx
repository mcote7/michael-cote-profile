import React, { useEffect, useState } from 'react';
import '../../SASS/projects-view.scss';
import {onRoute} from '../../utilities/onRoute';

import {PROJ} from '../../config/projects';
import ProjectCard from '../ProjectsView/ProjectCard';

import moment from 'moment';


const ProjectsView = () => {

  const [GIT, setGIT] = useState();

  useEffect(()=> {
    onRoute();
    fetch('https://api.github.com/users/mcote7/repos?page=1&per_page=100', {method: 'GET'})
      .then(res => res.json())
      .then(data => {
        console.log("data", data)
        setGIT(data);
      });
  }, []);

  async function getLanguages(e, languages_url, id) {
    e.preventDefault();
    let el = document.getElementById(id); 
    await fetch(`${languages_url}`, {method: 'GET'})
      .then(res => res.json())
      .then(data => {
        console.log("data", data) // works!!!
        el.innerHTML = data;
      });
  }

  return ( <React.Fragment>
    <div className="pro-row row">
      <div className="pro-col col-sm-12 mx-auto">
        
        {/* featured projects */}
        {PROJ && PROJ.map((proj, idx) => {
          return(
            <ProjectCard key={idx} title={proj.title} date={proj.date} url={proj.url} info={proj.info} tech={proj.tech} />
          );
        })}
        
      </div>
    </div>
    
    {/* more from git hub api */}
    <div className="git-row my-5">
      {GIT && GIT.map(( repo, idx ) => {
        return(
          <div key={idx} className="col-xl-3 col-lg-4 col-md-6 git-col my-3">
            <a 
              id={`${idx}card`}
              className="card git-card" 
              href={`${repo.html_url}`} 
              target="_blank" rel="noopener noreferrer">
              
              <div className="card-title">
                <i className="fa fa-github git-logo" aria-hidden="true"></i>
                <div><small>({idx})</small> <strong>{repo.name}</strong></div>
              </div>
              <div className="card-url">
                <p>{repo.html_url}</p>
              </div>
              <div className="card-dates">
                <small>updated: {moment(repo.updated_at).format('MMMM Do YYYY')}</small>
                <small>created: {moment(repo.created_at).format('MMMM Do YYYY')}</small>
              </div>
              <div className="repo-languages">
                <button 
                  onClick={(e) => getLanguages(e, repo.languages_url, `${idx}lang`)} 
                  className="btn btn-secondary">
                  &lt;Languages/&gt;
                </button>
                <p id={`${idx}lang`}></p>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  </React.Fragment> );
};

export default ProjectsView;
