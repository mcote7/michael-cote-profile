import React, { useEffect } from 'react';

const GoHome = () => {
  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  },[]);
  return (
    <div className="dummy"></div>
  );
};
export default GoHome;