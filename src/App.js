import React from 'react';
import './App.css';
import Certificates from './components/carousel';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="m-5">Hello there</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <Certificates/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
