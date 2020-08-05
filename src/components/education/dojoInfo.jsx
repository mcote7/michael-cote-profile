import React from 'react';
import '../../css/education.css';

const DojoInfo = () => {
  return (
    <React.Fragment>
      <h1 className="dojoTitle">CODING DOJO FULL-TIME BOOTCAMP</h1>
      <p className="dojoSub"><span><i class="fa fa-university" aria-hidden="true"></i></span>&nbsp;SEATTLE WA</p>
      <p className="dojoSub mb-1">02/2020 – 05/2020</p>
      <br/>
      <ul className="dojoList">
        <li>&bull;&nbsp;Completed intensive software development course. Developed multiple full stack projects with Python, C# and MERN.</li>
        <br/>
        <li>&bull;&nbsp;Designed and developed many RESTful API projects. I have implemented full functional API based software using Node, ASP.Net, and Python.</li>
        <br/>
        <li>&bull;&nbsp;Created multiple robust login and registration applications. These included many different types of validation including client side and server side. I have completed these applications using Django and ASP.Net.</li>
        <br/>
        <li>&bull;&nbsp;Developed and implemented multiple messaging and blogging applications. These included public and private systems, administration, and user options and control. These included full database creation. These projects were created using the full MERN stack, .Net Core/ASP, and Python/Django, among others.</li>
        <br/>
        <li>&bull;&nbsp;Developed many activity and event organizing web applications. These have varied in complexity and functionality. The majority of these applications involved front end, a server, and full database support.</li>
      </ul>
    </React.Fragment>
  );
}

export default DojoInfo;