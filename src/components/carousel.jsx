import React from 'react';
import img1 from '../images/DojoCert.png';
import img2 from '../images/MasterReactCert.png';
import img3 from '../images/ReduxCert.png';


const Certificates = () => {
  return (
    <React.Fragment>
    <img src={img2} className="myCert m-2" alt="img"/>
    <img src={img1} className="myCert m-2" alt="img"/>
    <img src={img3} className="myCert m-2" alt="img"/>
    </React.Fragment>
  );
}

export default Certificates;