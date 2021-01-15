import React, { useEffect, useState } from 'react';
import { onRoute } from '../../utilities/onRoute';
import '../../SASS/technicalSkills-view.scss';

import {LANGUAGES_LIST} from '../../config/techSkillsLists.js';

const TechnicalSkillsView = () => {

  const [languages, setLanguages] = useState([]);

  useEffect(()=>{
    onRoute();
    
    setTimeout(() => {
      setLanguages(LANGUAGES_LIST);
    }, 1750);
    
  }, []);

  useEffect(()=>{
    presentList(languages, 'languages-list-item', 'languages-toggle');
  }, [languages]);

  // present also destroys onClick <---<< {|
  const presentList = (list, className, id) => {
    for(let i = 0; i < list.length; i++) {
      let target = document.getElementsByClassName(className)[i];
      let toggle = document.getElementById(id);
      setTimeout(() => {
        if(target.style.display !== 'flex') {
          target.style.display = 'flex';
          toggle.innerHTML = 'x';
        } else {
          let originalText = target.innerHTML;
          target.innerHTML = '********';
          target.animate([
            {opacity: 1},
            {opacity: 0}
          ], {
            duration: 1000,
            easing: 'steps(20, end)'
          });
          setTimeout(() => {
            target.innerHTML = originalText;
            target.style.display = 'none';
            toggle.innerHTML = '+';
          }, 1000);
        }
      }, i * 1000);
    }
  }
  
  return (
    <div className="tech-main-wrap container-fluid">
      <div className="row">
        <div className="col">
          <div className="dos-title-wrap">
            <div className="dos-title">&#8718;WELCOME_TO_MICHAEL'S_TECH_SKILLS_DOS_MODE_C:/&#8883;</div>
          </div>
        </div>
      </div>
      
      <div className="row mt-3">
        
        <div className="col-lg-3 col-md-6 col-sm-6">
          
          {languages.length > 0 ?
            <div className="tech-list-title">&#8718;LANGUAGES
              <span id="languages-toggle"
                onClick={()=>{presentList(languages, 'languages-list-item', 'languages-toggle')}}
                className="list-toggle">+
              </span>
            </div>:""}
            
            {languages.length > 0 ? languages.map((item, idx) => {
              return<div key={idx} className="tech-list-item-wrap" style={{top: `${idx*24}px`}}>
                      <div className="tech-list-item languages-list-item">{item}</div>
                    </div>
            }): <div className="tech-list-title">Initializing list...</div>}
            
        </div>
        
      </div>
    </div>
  );
};
export default TechnicalSkillsView;
