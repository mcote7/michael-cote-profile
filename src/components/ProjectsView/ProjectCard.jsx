import React from 'react';
import '../../SASS/projects-view.scss';

const ProjectCard = ({title, date, url, info, tech}) => {
  return ( 
    <div className="pro-card mx-auto">
      
      <div className="pro-title">
        <h5>{title}&nbsp;<sup><small>{date}</small></sup></h5>
        <a href={`${url}`} target="_blank" rel="noopener noreferrer">{url}</a>
      </div>
      
      <div className="i-wrap">
        <iframe src={`${url}`} title={`${title}`}/>
      </div>
      
      <div className="pro-info mt-1">
        <p>{info}</p>
        <p>Tech used: {tech.map((t)=> ` |${t}| `)}</p>
      </div>
    </div>
  );
};
export default ProjectCard;
