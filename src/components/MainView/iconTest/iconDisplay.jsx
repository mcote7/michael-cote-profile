import React from 'react';

const ICONS_LIST = [
  <i className="test-icon fa fa-envelope-o" aria-hidden="true"></i>,
  <i className="test-icon fa fa-star-o" aria-hidden="true"></i>,
  <i className="test-icon fa fa-smile-o" aria-hidden="true"></i>,
  <i className="test-icon fa fa-pied-piper" aria-hidden="true"></i>
];

const IconDisplay = () => {
  return (
    <div className="icons-main-wrap">
      <div className="icon-row">
        {ICONS_LIST.map((icon, idx) => { 
          return <div className="mx-auto test-icon-span" key={idx}>{icon}</div>
        })}
      </div>
    </div>
  );
}

export default IconDisplay;