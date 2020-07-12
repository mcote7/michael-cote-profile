import React from 'react';
import img1 from '../../images/movieImg1.jpg';
import img2 from '../../images/movieImg2.jpg';
import '../../css/projects.css';

const MovieApp = () => {
  return (
    <React.Fragment>
      <h1 className="projTitle pb-4">Movie's Database</h1>
      <span className="projectIcon"><i className="fa fa-film fa-3x m-0 p-0" aria-hidden="true"></i></span>
      <br/>
      <h3 className="my-4">Movie app where users can view, update, delete and add new movies to the database.</h3>
      <br/>
      <img src={img1} className="movieImg mx-2 my-5" alt="img"/>
      <br/>
      <h4 className="mt-5">•	Login and registration features client and server-side validations on input fields, authorization with JSON web token.</h4>
      <br/>
      <h4>•	Data table includes categories, filtering, search bar, and pagination all made with re-usable React components and Bootstrap.</h4>
      <br/>
      <img src={img2} className="movieImg mx-2 my-5" alt="img"/>
      <br/>
      <h4>•	Navigation with scroll to top feature and protected routes using react-router.</h4>
      <br/>
      <h4>•	Deployed via Heroku: <a className="movieAtag" target="_blank" rel="noopener noreferrer" href="https://desolate-springs-64141.herokuapp.com/">SEE FULL APP *</a></h4>
      <br/>
      <h4>•	GitHub: <a className="movieAtag" target="_blank" rel="noopener noreferrer" href="https://github.com/mcote7/React-movie-app">SEE THE CODE *</a></h4>
      <div className="moreBtm"></div>
    </React.Fragment>
  );
}
export default MovieApp;