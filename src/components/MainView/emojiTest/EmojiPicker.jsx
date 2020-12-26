import React, { useEffect, useState } from 'react';

import {emoji} from 'node-emoji';



const EmojiPicker = () => {

  const [newMessage, setNewMessage] = useState('');
  let message = [];

  const ALL_EMOJI_VALUES = Object.values(emoji).slice(1100, 1200);

  const ALL_EMOJI_KEYS = Object.keys(emoji);

  // const SEARCH_EMOJIS = emoji.search("face")


  useEffect(()=>{
    console.log('all emojis keys', ALL_EMOJI_KEYS)
    console.log('all emojis values', ALL_EMOJI_VALUES)
    // console.log('search all emojis', SEARCH_EMOJIS)
  })

  const sendMessage = (e) => {
    const input = document.getElementById('chatInput');
    console.log('??val', input.value, e)
    message.push(input.value);
    const result = `${newMessage} ${message}`;
    // console.log("??res", result);
    setNewMessage(result);
    input.value = '';
  };

  const addEmoji = (e) => {
    console.log("add emoji", e.target.value);
    const input = document.getElementById('chatInput');
    input.value = `${input.value} ${e.target.value} `;

  }

  const clearOutput = () => {
    setNewMessage('')
    message = [];
  };

  const [emojiPicker, setEmojiPicker] = useState(false);
  const openEmojiPicker = (e) => {
    console.log("open emoji", e)
    if(emojiPicker === false) {
      setEmojiPicker(true);
    } else {
      setEmojiPicker(false);
    }
  };

  return (
    <div id="emojiWrap" className="quote emoji-picker-wrap mt-5">

      <h4 className="my-1">hello cote emoji picker&nbsp;
        <i className="fa fa-trash trashit" onClick={clearOutput} aria-hidden="true"></i>
      </h4>

      <div id="output" className="output my-2">
        {newMessage}
      </div>

      <div className="cote-form mb-2">
        <input id="chatInput" type="text" className="chat-input"/>
        <i onClick={(e)=>sendMessage(e)} className="fa fa-paper-plane sendit" aria-hidden="true"></i>
        <button onClick={(e)=>openEmojiPicker(e)} className="emoji-button my-1">&#128540;</button>
      </div>

      {emojiPicker ?

      <div id="emojiPicker" className="row emoji-picker mt-2">

        {ALL_EMOJI_VALUES.map((emo, idx)=>
        <div className="col-1 emoji-item-wrap" key={idx}>
          <button value={emo} onClick={(e)=>addEmoji(e)} className="emoji-item-button">{emo}</button>
        </div>
        )}

          {/* EMOJI SEARCH HERE (input & button) as div.col-12 for full length bottom of row */}

      </div>

      :''}

    </div>

  );
}

export default EmojiPicker;