import React, { useEffect, useState } from 'react';
import '../../SASS/projects-view.scss';
import {onRoute} from '../../utilities/onRoute';
import {PROJ} from '../../config/projects';
import ProjectCard from '../ProjectsView/ProjectCard';
import moment from 'moment';

//  TODO : when scrollintoview( git_repos ) showGitRepos( set time => {opacity = 1}, 100 * idx );


const ProjectsView = () => {

  const [GIT, setGIT] = useState();
  const [PINNED, setPINNED] = useState();

  useEffect(()=> {
    onRoute();
    fetch('https://api.github.com/users/mcote7/repos?page=1&per_page=100', {method: 'GET'})
      .then(res => res.json())
      .then(data => {
        // console.log("data", data)
        setGIT(data);
      });
    fetch('https://gh-pinned-repos-5l2i19um3.vercel.app/?username=mcote7', {method: 'GET'})
      .then(res => res.json())
      .then(data => {
        console.log("pinned", data)
        setPINNED(data);
      });
  }, []);


  return ( <React.Fragment>
    
    <div className="pro-row">
      <div className="col-sm-12 mb-5">
        <h2 className="mx-auto featured-projects-title">👨‍💻 featured_projects</h2>
      </div>
      <div className="col-sm-12 pro-col">
        
        {/* 👨‍💻 featured projects in config/projects */}
        {PROJ && PROJ.map((proj, idx) => {
          return(
            <ProjectCard key={idx} title={proj.title} date={proj.date} url={proj.url} info={proj.info} tech={proj.tech} />
          );
        })}
        
      </div>
    </div>
    
    {/* more from git hub api */}
    <div className="my-5 git-row">
      
      {/* 📈 stats cards */}
      <div className="col-sm-12 mb-5 git-stats">
        <img src="https://github-readme-stats.vercel.app/api?username=mcote7&show_icons=true&theme=highcontrast" alt="stats"/>
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=mcote7&layout=compact&theme=highcontrast" alt="langs"/>
      </div>
      
      <div className="col-sm-12 mb-5">
        <h2 className="mx-auto git-repos-title">📌 pinned_repos</h2>
      </div>
      
      {/* 📌 pinned repos */}
      {PINNED && PINNED.map(( p_repo, index) => {
        return(
          <div key={index} className="col-xl-4 col-lg-4 col-md-6 my-3 git-pinned-col">
            {/* pinned repo card */}
            <a 
              id={`${index}p_card`}
              className="card git-pinned-card mb-5" 
              href={`${p_repo.link}`} 
              target="_blank" rel="noopener noreferrer">
              <div id={`octo${index}`} className="octo-cat"></div>
              <div className="text-wrap">
                <div className="sparkle">✨</div>
                <div className="card-title">
                  <div>
                    <span><i className="fa fa-github git-logo" aria-hidden="true"></i></span>&nbsp;
                    <strong>{p_repo.repo}</strong>
                  </div>
                </div>
                <div className="card-url">
                  <span>{p_repo.link}</span>&nbsp;<i className="fa fa-external-link" aria-hidden="true"></i>
                </div>
                <div className="mt-auto card-info">
                  <div className="card-desc">
                    <small><i>{p_repo.description}</i></small>
                  </div>
                  <div className="repo-languages">
                    <strong><i className="fa fa-code" aria-hidden="true"></i> {p_repo.language}</strong>
                  </div>
                </div>
              </div>
            </a>
          </div>
        );
      })}
      
      {/* all repos : order ❔ */}
      <div className="col-sm-12 my-5">
        <h2 id="git_repos" className="mx-auto git-repos-title">* git_repos</h2>
      </div>
      
      {GIT && GIT.map(( repo, idx ) => {
        
        return(
          <div key={idx} className="col-xl-3 col-lg-4 col-md-6 my-3 git-col">
            {/* repo card */}
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
                <span>{repo.html_url}<i className="fa fa-external-link" aria-hidden="true"></i></span>
              </div>
              <div className="mt-auto card-info">
                <div className="card-desc">
                  <small><i>{repo.description}</i></small>
                </div>
                <div className="repo-languages">
                  <strong><i className="fa fa-code" aria-hidden="true"></i> {repo.language}</strong>
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
