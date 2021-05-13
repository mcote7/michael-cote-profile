import React from 'react';
import img2 from '../../images/projects/bugImg2.jpg';
import '../../css/projects.css';


const BugApp = () => {
  return (
    <React.Fragment>
      <h1 className="projTitle pb-4">Redux Bug Tracker</h1>
      <span className="projectIcon"><i className="fa fa-bug fa-3x m-0 p-0" aria-hidden="true"></i></span>
      <br/>
      <h3 className="my-4">Bug-tracking app focused on the use of Redux store for state management.</h3>
      <br/>
      <h4 className="mt-5">• Users can log, track and resolve bugs, action reducers used to perform all crud operations, handled asynchronous events with redux-thunk.</h4>
      <br/>
      <img src={img2} className="movieImg mx-2 my-5" alt="img"/>
      <br/>
      <h4>• Integrated with React UI, backend API made with Node.js and unit testing with Jest.</h4>
      <br/>
      <h4>•	GitHub: <a className="movieAtag" target="_blank" rel="noopener noreferrer" href="https://github.com/mcote7/Redux-bug-tracker">SEE THE CODE
      <span><i className="fa fa-external-link fa-sm ml-2" aria-hidden="true"></i></span></a></h4>
      <div className="moreBtm2"></div>
    </React.Fragment>
  );
}

export default BugApp;