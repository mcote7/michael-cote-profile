import React, { useEffect } from 'react';
import { onRoute } from './../utilities/onRoute';

const Projects = () => {
  useEffect(() => {
    onRoute();
  },[])
  return (
    <h1>Personal Projects</h1>
  );
}

export default Projects;