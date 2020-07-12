import React from 'react';
import '../../css/projects.css';
import img1 from '../../images/fridgeImg.jpg';
import img2 from '../../images/fridgeImg2.jpg';

const RecipieApp = () => {
  return (
    <React.Fragment>
      <h1 className="projTitle pb-4">Recipie Search App</h1>
      <span className="projectIcon"><i className="fa fa-search fa-3x m-0 p-0" aria-hidden="true"></i></span>
      <br/>
      <h3 className="my-4">App where a user can search for recipes that include ingredients they have in their fridge.</h3>
      <br/>
      <img src={img1} className="movieImg mx-2 my-5" alt="img"/>
      <br/>
      <h4 className="mt-5">• Custom UI designed to look like a vintage refrigerator made with CSS, includes server-side input validations with MongoDb.   </h4>
      <br/>
      <img src={img2} className="movieImg mx-2 my-5" alt="img"/>
      <br/>
      <h4>•	Search results displayed on custom Bootstrap table with pagination and active links to full recipes, api call to recipe database with Axios.</h4>
      <br/>
      <h4>•	GitHub: <a className="movieAtag" target="_blank" rel="noopener noreferrer" href="https://github.com/mcote7/Recipe-App-react">SEE THE CODE
      <span><i className="fa fa-external-link fa-sm ml-2" aria-hidden="true"></i></span></a></h4>
    </React.Fragment>
  );
}

export default RecipieApp;