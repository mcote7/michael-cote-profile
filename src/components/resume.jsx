import React, { useEffect } from 'react';
import { onRoute } from './../utilities/onRoute';

const Resume = () => {
  useEffect(() => {
    onRoute();
  },[])
  return (
    <h1>Resume</h1>
  );
}

export default Resume;