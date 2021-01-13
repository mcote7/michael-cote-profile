import React, { useEffect, useState } from 'react';

import { onRoute } from '../../utilities/onRoute';

import '../../SASS/technicalSkills-view.scss';

import {LANGUAGES_LIST} from '../../config/techSkillsLists.js';

const TechnicalSkillsView = () => {

  const [languages, setLanguages] = useState([]);

  useEffect(()=>{
    onRoute();
    setLanguages(LANGUAGES_LIST);
    // console.log("hey:", LANGUAGES_LIST)
    // console.log("!!!!", languages)
  }, []);

  useEffect(()=>{
    setTimeout(() => {
      for(let i = 0; i < languages.length; i++) {
        let target = document.getElementsByClassName('tech-list-item')[i];
        setTimeout(() => {
          target.style.display = 'flex';
        }, i * 1000);
      }
    }, 2000);
  }, [languages]);

  return (
    <div className="tech-main-wrap container-fluid code">
      <div className="row">
        <div className="col">
          <div>HELLO_TECH_SKILLS_DOS_MODE</div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-3 mx-auto">
          <div>LANGUAGES</div>
          <hr/>
            {languages && languages.map((item, idx) => {
                return <div className="tech-list-item" key={idx}>{item}</div>
            })}
        </div>
      </div>
    </div>
  );
};
export default TechnicalSkillsView;