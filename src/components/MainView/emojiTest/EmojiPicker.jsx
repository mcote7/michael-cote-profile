import React, { useState } from 'react';

import {emoji} from 'node-emoji';

const EmojiPicker = () => {

  const [emojiPicker, setEmojiPicker] = useState(false);
  const [newMessage, setNewMessage] = useState('');

  const allEmojis = Object.values(emoji);

  let message = [];

  const sendMessage = (e) => {
    // console.log('??val', e.target.value)
    message.push(e.target.value);
    const result = `${newMessage} ${message}`;
    // console.log("??res", result);
    setNewMessage(result);
    e.target.value = '';
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

  const openEmojiPicker = () => {
    setEmojiPicker(!emojiPicker);
  };

  return (
    <div className="quote emoji-picker-wrap mt-5">
      <h4 className="my-1">hello cote emoji picker&nbsp;
        <i className="fa fa-trash trashit" onClick={clearOutput} aria-hidden="true"></i>
      </h4>
      <div id="output" className="output my-2">
        {newMessage}
      </div>
      <div className="cote-form mb-2">
        <input id="chatInput" type="text" className="input" onClick={(e)=>sendMessage(e)}/>
        <i className="fa fa-paper-plane sendit" aria-hidden="true"></i>
      </div>
      <button onClick={openEmojiPicker} className="emoji-button my-1">&#128540;</button>
      <br></br>

      {emojiPicker ?

      <div id="emojiPicker" className="row emoji-picker mt-2">

        {allEmojis.map((emo, idx)=>
        <div className="col-1 emoji-item-wrap" key={idx}>
          <button value={emo} onClick={(e)=>addEmoji(e)} className="emoji-item-button">{emo}</button>
        </div>
        )}

      </div>

      :''}
    </div>
  );
}

export default EmojiPicker;