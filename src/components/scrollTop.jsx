import React, { useEffect } from 'react';

const ScrollTop = () => {
  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  },[]);
  return (
    <div className="dummy m-0 p-0">dum-dum</div>
  );
}
export default ScrollTop;