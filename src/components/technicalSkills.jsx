import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const height = document.body.scrollHeight;
    window.scrollTo({top: height, behavior: 'smooth'});
  },[])
  return (
    <h1>Technical Skills</h1>
  );
}

export default Home;