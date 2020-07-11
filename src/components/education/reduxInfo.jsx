import React from 'react';
import '../../css/education.css';

const ReduxInfo = () => {
  return (
    <React.Fragment>
      <h1 className="dojoTitle">ULTIMATE REDUX</h1>
      <p className="dojoSub">CODING WITH MOSH</p>
      <p className="dojoSub mb-1">07/2020</p>
      <br/>
      <ul className="dojoList px-5">
        <li>Online course on state management with Redux and integration with react</li>
        <br/>
        <li>Backend API created with Node.js and unit testing with Jest.</li>
        <br/>
        <li>action reducers used to perform all crud operations, handled asynchronous events with redux-thunk.</li>
        <br/>
      </ul>
    </React.Fragment>
  );
}

export default ReduxInfo;