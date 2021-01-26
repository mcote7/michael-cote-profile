import React, { useEffect, useState } from 'react';
import { onRoute } from '../../utilities/onRoute';
import '../../SASS/technicalSkills-view.scss';

import {LANGUAGES_LIST} from '../../config/techSkillsLists.js';
import {FRAMEWORKS_LIST} from '../../config/techSkillsLists.js';
import {DATABASE_LIST} from '../../config/techSkillsLists.js';
import {TOOLS_LIST} from '../../config/techSkillsLists.js';

const TechnicalSkillsView = () => {

  const [languages, setLanguages] = useState([]);
  const [frameworks, setFrameworks] = useState([]);
  const [database, setDatabase] = useState([]);
  const [tools, setTools] = useState([]);

  useEffect(()=>{
    onRoute();
    
    setTimeout(() => {
      setLanguages(LANGUAGES_LIST);
    }, 1750);
    setTimeout(() => {
      setFrameworks(FRAMEWORKS_LIST);
    }, 2750);
    setTimeout(() => {
      setDatabase(DATABASE_LIST);
    }, 3750);
    setTimeout(() => {
      setTools(TOOLS_LIST);
    }, 4750);
    
  }, []);

  useEffect(()=>{
    presentList(languages, 'languages-list-item', 'languages-toggle');
  }, [languages]);
  useEffect(()=>{
    presentList(frameworks, 'frameworks-list-item', 'frameworks-toggle');
  }, [frameworks]);
  useEffect(()=>{
    presentList(database, 'database-list-item', 'database-toggle');
  }, [database]);
  useEffect(()=>{
    presentList(tools, 'tools-list-item', 'tools-toggle');
  }, [tools]);

  // present also destroys onClick <--------------------------------------<<<<< {|
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
  // <------------------------------------------------<<<<< {| 
  return (
    <div className="tech-main-wrap container-fluid">
      <div className="row">
        <div className="col">
          <div className="dos-title-wrap">
            <div className="dos-title">
              <span className="dos-title-icon">
                <i className="fa fa-object-group" aria-hidden="true"></i>
              </span>_TECHNICAL_SKILLS_MS-DOS_version_1.25_1981,82_C:/</div>
          </div>
        </div>
      </div>
      
      <div className="row mt-5 no-gutters tech-list-wrap">
        
        <div className="col-lg-3 col-md-6 col-sm-6">
          {languages.length > 0 ?
            <div className="tech-list-title">
              <span className="ml-1">
                <i className="fa fa-object-ungroup" aria-hidden="true"></i>
              </span>LANGUAGES
              <span id="languages-toggle"
                onClick={()=>{presentList(languages, 'languages-list-item', 'languages-toggle')}}
                className="list-toggle">+
              </span>
            </div>:""}
            
            {languages.length > 0 ? languages.map((item, idx) => {
              return<div key={idx} className="tech-list-item-wrap" style={{top: `${idx*24}px`}}>
                      <div className="tech-list-item languages-list-item">&#8718;{item}</div>
                    </div>
            }): <div className="tech-list-title list-loader">Initializing list</div>}
        </div>
        
        <div className="col-lg-3 col-md-6 col-sm-6 col-frameworks">
          {frameworks.length > 0 ?
            <div className="tech-list-title">
              <span className="ml-1">
                <i className="fa fa-object-ungroup" aria-hidden="true"></i>
              </span>FRAMEWORKS
              <span id="frameworks-toggle"
                onClick={()=>{presentList(frameworks, 'frameworks-list-item', 'frameworks-toggle')}}
                className="list-toggle">+
              </span>
            </div>:""}
            
            {frameworks.length > 0 ? frameworks.map((item, idx) => {
              return<div key={idx} className="tech-list-item-wrap" style={{top: `${idx*24}px`}}>
                      <div className="tech-list-item frameworks-list-item">&#8718;{item}</div>
                    </div>
            }): <div className="tech-list-title list-loader">Initializing list</div>}
        </div>
        
        <div className="col-lg-3 col-md-6 col-sm-6 col-database">
          {database.length > 0 ?
            <div className="tech-list-title">
              <span className="ml-1">
                <i className="fa fa-object-ungroup" aria-hidden="true"></i>
              </span>DATABASE
              <span id="database-toggle"
                onClick={()=>{presentList(database, 'database-list-item', 'database-toggle')}}
                className="list-toggle">+
              </span>
            </div>:""}
            
            {database.length > 0 ? database.map((item, idx) => {
              return<div key={idx} className="tech-list-item-wrap" style={{top: `${idx*24}px`}}>
                      <div className="tech-list-item database-list-item">&#8718;{item}</div>
                    </div>
            }): <div className="tech-list-title list-loader">Initializing list</div>}
        </div>
        
        <div className="col-lg-3 col-md-6 col-sm-6 col-tools">
          {tools.length > 0 ?
            <div className="tech-list-title">
              <span className="ml-1">
                <i className="fa fa-object-ungroup" aria-hidden="true"></i>
              </span>TOOLS
              <span id="tools-toggle"
                onClick={()=>{presentList(tools, 'tools-list-item', 'tools-toggle')}}
                className="list-toggle">+
              </span>
            </div>:""}
            
            {tools.length > 0 ? tools.map((item, idx) => {
              return<div key={idx} className="tech-list-item-wrap" style={{top: `${idx*24}px`}}>
                      <div className="tech-list-item tools-list-item">&#8718;{item}</div>
                    </div>
            }): <div className="tech-list-title list-loader">Initializing list</div>}
        </div>
        
      </div>
      <div className="row">
        <div className="col">
          more soon...
        </div>
      </div>
    </div>
  );
};
export default TechnicalSkillsView;
// 