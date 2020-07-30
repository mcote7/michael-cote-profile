import React, { useEffect } from 'react';
import '../css/education.css';

const ScrollTop = () => {
  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  },[]);
  return (
    <div className="hidden dummy">
    </div>
  );
}
export default ScrollTop;