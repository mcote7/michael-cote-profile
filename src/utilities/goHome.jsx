import React, { useEffect } from 'react';

import { navBarCollapseTransition } from './navBarCollapseTransition';

const GoHome = () => {

  useEffect(() => {

    window.scrollTo({top: 0, behavior: 'smooth'});

    navBarCollapseTransition();

  },[]);
  
  return (
    <div className="dummy"></div>
  );
};
export default GoHome;