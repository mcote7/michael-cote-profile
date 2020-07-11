import React from 'react';
import '../../css/education.css';

const ReactInfo = () => {
  return (
    <React.Fragment>
      <h1 className="dojoTitle">MASTERING REACT</h1>
      <p className="dojoSub">CODING WITH MOSH</p>
      <p className="dojoSub mb-1">06/2020</p>
      <br/>
      <ul className="dojoList px-5">
        <li>Advanced online course using modern JavaScript and the latest React features to build reusable components, tables and lists with pagination, sorting and searching.</li>
        <br/>
        <li>Full login and registration with reusable forms including client and server-side validations, implementing authentication and authorization.</li>
        <br/>
        <li>Utilized backend technologies like Node, Express and MongoDb to call HTTP services with Axios and store information to local/cloud database systems.</li>
        <br/>
        <li>Implemented routing with React Router, handled and logged errors effectively with toast notifications.</li>
        <br/>
        <li>Deployment with AWS, Heroku and Mongo Atlas.</li>
        <br/>
      </ul>
    </React.Fragment>
  );
}

export default ReactInfo;