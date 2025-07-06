import React, { useState } from 'react';
import './Notepad.css';

const Notepad = ({ defaultText = '', style }) => {
  const [text, setText] = useState(defaultText);

  return (
    <div className="notepad-container">
      <div className="notepad-thumbtack">📌</div>
        <textarea
        readOnly
          className="notepad-textarea"
          style={style}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your notes here..."
        />
    </div>
  );
};


export default Notepad;
