import React, { useEffect } from 'react';
import { onRoute } from './../utilities/onRoute';

const Home = () => {
  useEffect(() => {
    onRoute();
  },[])
  return (
    <h1>Technical Skills</h1>
  );
}

export default Home;