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

  const [info, setInfo] = useState(false);

  useEffect(()=>{
    onRoute();
    
    setTimeout(() => {
      setLanguages(LANGUAGES_LIST);
    }, 1750);
    setTimeout(() => {
      setFrameworks(FRAMEWORKS_LIST);
      setInfo(true);
    }, 2750);
    setTimeout(() => {
      setDatabase(DATABASE_LIST);
    }, 3750);
    setTimeout(() => {
      setTools(TOOLS_LIST);
    }, 4750);
    setTimeout(() => {
      const infoCol = document.getElementById('infoCol');
      infoCol.classList.remove('intro-info');
    }, 7750);
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
  };

  // <------------------------------------------------<<<<< {| 
  return (
    <div className="tech-main-wrap container-fluid">
      <div className="row">
        <div className="col">
          <div className="dos-title-wrap">
            <div className="dos-title">
              <span className="dos-title-icon">
                <i className="fa fa-object-group" aria-hidden="true"></i>
              </span>_TECHNICAL_SKILLS_C:/</div>
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
      <div className="row mt-2">
        <div className="col">
          <div className="dos-title-wrap">
            <div className="dos-title">
              &diams;_MS-DOS_version_1.25_1981,82_&#9638;
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {info?
        <div>
          <p id="infoCol" className="intro-info info-col">
            <span><i style={{backgroundColor:'rgba(49, 245, 0, 0.25)',color:'hsl(108, 100%, 48%)',padding: '0rem 0.5rem',textAlign: 'center'}} className="mr-2 fa fa-info fa-2x" aria-hidden="true"></i></span> 
            MS-DOS was a renamed form of 86-DOS – owned by Seattle Computer Products, written by Tim Paterson. Development of 86-DOS took only six weeks, as it was basically a clone of Digital Research's CP/M (for 8080/Z80 processors), ported to run on 8086 processors and with two notable differences compared to CP/M: an improved disk sector buffering logic, and the introduction of FAT12 instead of the CP/M filesystem. This first version was shipped in August 1980. Microsoft, which needed an operating system for the IBM Personal Computer, hired Tim Paterson in May 1981 and bought 86-DOS 1.10 for US$75,000 in July of the same year. Microsoft kept the version number, but renamed it MS-DOS. They also licensed MS-DOS 1.10/1.14 to IBM, which, in August 1981, offered it as PC DOS 1.0 as one of three operating systems for the IBM 5150, or the IBM PC.
          </p>
        </div>:<div style={{height: '100vh'}}></div>}
      </div>
    </div>
  );
};
export default TechnicalSkillsView;
// 