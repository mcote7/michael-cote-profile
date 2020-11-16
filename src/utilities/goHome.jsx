import React, { useEffect } from 'react';

const GoHome = () => {
  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    const navbar = document.getElementById("navbarText");
    setTimeout(() => {
      if(navbar !== null && navbar.classList.contains("show")) {
        navbar.classList.remove("show");
      }
    }, 1000);
  },[]);
  return (
    <div className="dummy"></div>
  );
};
export default GoHome;