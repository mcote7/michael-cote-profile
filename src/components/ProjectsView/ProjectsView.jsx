import React, { useEffect, useState } from 'react';
import '../../SASS/projects-view.scss';
import {onRoute} from '../../utilities/onRoute';

import {PROJ} from '../../config/projects';
import ProjectCard from '../ProjectsView/ProjectCard';

import moment from 'moment';

//  TODO : get pinned repos = https://gh-pinned-repos-5l2i19um3.vercel.app/?username=mcote7;

//  TODO : when scrollintoview( git_repos ) showGitRepos( set time => {opacity = 1}, 10 * idx );


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

  return ( <React.Fragment>
    <div className="pro-row">
      <h2 className="col-sm-12 mb-5 featured-projects-title">featured_projects</h2>
      <div className="col-sm-12 pro-col">
        
        {/* featured projects in config/projects */}
        {PROJ && PROJ.map((proj, idx) => {
          return(
            <ProjectCard key={idx} title={proj.title} date={proj.date} url={proj.url} info={proj.info} tech={proj.tech} />
          );
        })}
        
      </div>
    </div>
    
    {/* more from git hub api */}
    <div className="my-5 git-row">
      <h2 className="col-sm-12 mb-5 git-repos-title">pinned_repos</h2>
      {/* map pinned here */}
      <div className="col-sm-12 my-5 git-col">
        <div className="in-dev">🚧 in dev... 🚧</div>
      </div>
      
      <h2 id="git_repos" className="col-sm-12 mb-5 git-repos-title">git_repos</h2>
      {GIT && GIT.map(( repo, idx ) => {
        
        return(
          <div key={idx} className="col-xl-3 col-lg-4 col-md-6 my-3 git-col">
            
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
                <span>{repo.html_url}<i class="fa fa-external-link" aria-hidden="true"></i></span>
              </div>
              
              <div className="mt-auto card-info">
                
                <div className="card-desc">
                  <small><i>{repo.description}</i></small>
                </div>
                
                <div className="repo-languages">
                  <strong><i class="fa fa-code" aria-hidden="true"></i> {repo.language}</strong>
                </div>
                
              </div>
              
              <div className="card-dates">
                <small>updated: {moment(repo.updated_at).format('MMMM Do YYYY')}</small>
                <small>created: {moment(repo.created_at).format('MMMM Do YYYY')}</small>
              </div>
            </a>
          </div>
          );
      })}
    </div>
  </React.Fragment>);
};

export default ProjectsView;
