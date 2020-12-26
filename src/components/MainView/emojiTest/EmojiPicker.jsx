import React, { useEffect, useState } from 'react';

// import _ from 'lodash';

// import {emoji} from 'node-emoji';

import { myEmojis } from '../emojiTest/myEmojis.json';

const EmojiPicker = () => {

  const [newMessage, setNewMessage] = useState('');
  let message = [];

  const [emojiPicker, setEmojiPicker] = useState(false);
  
  const ANIMALS_EMOJIS = Object.values(myEmojis.animals);
  const FACES_EMOJIS = Object.values(myEmojis.faces);
  const FOOD_EMOJIS = Object.values(myEmojis.food);
  const MISC_EMOJIS = Object.values(myEmojis.misc);

  const keys = Object.keys(myEmojis.animals).concat(Object.keys(myEmojis.faces)).concat(Object.keys(myEmojis.food)).concat(Object.keys(myEmojis.misc));
  
  const result = ANIMALS_EMOJIS.concat(FACES_EMOJIS).concat(FOOD_EMOJIS).concat(MISC_EMOJIS);
  const ALL_EMOJIS = result;

  const [currentEmojis, setCurrentEmojis] = useState(ALL_EMOJIS);

  const [searchEmojis, setSearchEmojis] = useState(false);


  useEffect(()=>{
    console.log('all emojis VALUES', ALL_EMOJIS)
    // console.log('aNIMAL emojis values', ANIMALS_EMOJIS)
    // console.log("search???", searchEmojis)
    // console.log('search all emojis', SEARCH_EMOJIS)
  });

  // ----------------------------------------------------
  const sendMessage = (e) => {
    const input = document.getElementById('chatInput');
    console.log('??val', input.value, e)
    message.push(input.value);
    const result = `${newMessage} ${message}`;
    // console.log("??res", result);
    setNewMessage(result);
    input.value = '';
  };
// 
  const addEmoji = (e) => {
    console.log("add emoji", e.target.value);
    const input = document.getElementById('chatInput');
    input.value = `${input.value} ${e.target.value} `;
  }

  const clearOutput = () => {
    setNewMessage('')
    message = [];
  };

  const openEmojiPicker = (e) => {
    console.log("open emoji", e)
    if(emojiPicker === false) {
      setEmojiPicker(true);
    } else {
      setEmojiPicker(false);
    }
  };

  const activeEmojiSearch = (e) => {
    console.log("search...", e.target.value);
    console.log("???", Object.keys(myEmojis.faces));
    if(Object.keys(myEmojis.faces).includes(e.target.value)) {
      console.log("match");
      const res = myEmojis.faces[e.target.value];
      console.log("res", res)
      setCurrentEmojis([res]);
    }
    if(Object.keys(myEmojis.animals).includes(e.target.value)) {
      console.log("match");
      const res = myEmojis.animals[e.target.value];
      console.log("res", res)
      setCurrentEmojis([res]);
    }
    if(Object.keys(myEmojis.food).includes(e.target.value)) {
      console.log("match");
      const res = myEmojis.food[e.target.value];
      console.log("res", res)
      setCurrentEmojis([res]);
    }
    if(Object.keys(myEmojis.misc).includes(e.target.value)) {
      console.log("match");
      const res = myEmojis.misc[e.target.value];
      console.log("res", res)
      setCurrentEmojis([res]);
    }
  };


  return (
    <div id="emojiWrap" className="quote emoji-chat-wrap mt-5">

      <h4 className="my-1">hello cote emoji picker&nbsp;
        <i className="fa fa-trash trashit" onClick={clearOutput} aria-hidden="true"></i>
      </h4>

      <div id="output" className="output my-2">
        {newMessage}
      </div>

      <div className="cote-form mb-2">
        <input id="chatInput" type="text" className="chat-input"/>
        <i onClick={(e)=>sendMessage(e)} className="fa fa-paper-plane sendit" aria-hidden="true"></i>
        <button onClick={(e)=>openEmojiPicker(e)} className="emoji-button-open my-1">&#128540;</button>
      </div>

      {emojiPicker ?

      <div id="emojiPicker" className="row emoji-picker-main-wrap mt-2">

        <div className="col-12 emoji-display">
          <div className="row">
            {currentEmojis.map((emo, idx)=>
            <div className="col-1 emoji-item-wrap" key={idx}>
              <button value={emo} onClick={(e)=>addEmoji(e)} className="emoji-item-button">{emo}</button>
            </div>
            )}
          </div>
        </div>

          {/* EMOJI SEARCH HERE (input & button) as div.col-12 for full length bottom of row */}
        <div className="col-12">
          <div className="row emoji-cats-row">
            {searchEmojis?
            <div className="search-emojis">
              <input onChange={(e)=>activeEmojiSearch(e)} type="text"  placeholder="search emojis . . ."/>&nbsp;
              <span onClick={()=>setSearchEmojis(false)}><i style={{color: 'black', cursor: 'pointer'}} className="fa fa-undo" aria-hidden="true"></i></span>
            </div>
            :<>
            <button autoFocus="true" id="all" className="col emoji-cats-button" onClick={()=>setCurrentEmojis(ALL_EMOJIS)}>all</button>
            <button className="col emoji-cats-button" onClick={()=>setCurrentEmojis(ANIMALS_EMOJIS)}>farm</button>
            <button className="col emoji-cats-button" onClick={()=>setCurrentEmojis(FOOD_EMOJIS)}>food</button>
            <button className="col emoji-cats-button" onClick={()=>setCurrentEmojis(FACES_EMOJIS)}>faces</button>
            <button className="col emoji-cats-button" onClick={()=>setCurrentEmojis(MISC_EMOJIS)}>misc</button>
            <button className="col emoji-cats-button" onClick={()=>setSearchEmojis(true)}>search</button></>}
          </div>
        </div>
      </div>

      :''}

    </div>

  );
}

export default EmojiPicker;