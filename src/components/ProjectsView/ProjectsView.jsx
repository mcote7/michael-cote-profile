import React, { useEffect, useState } from 'react';
import '../../SASS/projects-view.scss';
import {onRoute} from '../../utilities/onRoute';

import {PROJ} from '../../config/projects';
import ProjectCard from '../ProjectsView/ProjectCard';

import moment from 'moment';

//  TODO : get pinned repos = https://gh-pinned-repos-5l2i19um3.vercel.app/?username=mcote7;

//  TODO : when scrollintoview( git_repos ) showGitRepos( set time => {opacity = 1}, 10 * idx )


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
    <div className="pro-row row">
      <h1 className="col-12 mx-auto mb-5 featured-projects-title">featured_projects</h1>
      <div className="pro-col col-12 mx-auto">
        
        {/* featured projects in config/projects */}
        {PROJ && PROJ.map((proj, idx) => {
          return(
            <ProjectCard key={idx} title={proj.title} date={proj.date} url={proj.url} info={proj.info} tech={proj.tech} />
          );
        })}
        
      </div>
    </div>
    
    {/* more from git hub api */}
    <div className="git-row my-5">
      <h1 className="col-12 mx-auto mb-5 git-repos-title">pinned_repos</h1>
      {/* map pinned here */}
      <div className="col-12 git-col my-5">
        <div className="in-dev">🚧 in dev... 🚧</div>
      </div>
      
      <h1 id="git_repos" className="col-12 mx-auto mb-5 git-repos-title">git_repos</h1>
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
                <span>{repo.html_url}<i class="fa fa-external-link" aria-hidden="true"></i></span>
              </div>
              
              <div className="card-info mt-auto">
                
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
