import React from 'react';
import image from '../images/404image.jpg';

const NotFound = () => {
  return (
    <img style={{height: "100vh", width: "100vw"}} src={image} alt="404"/>
  );
}

export default NotFound;