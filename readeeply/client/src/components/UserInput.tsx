import React, { useState } from 'react';
import './UserInput.css';

const UserInput = () => {
  const [input, setInput] = useState('');

  const sendToBackend = () => {
    fetch('http://localhost:5000/api/clova', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: input })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // 여기에서 추가적인 처리를 할 수 있습니다.
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <div className="user-input-container">
      <div className="user-input-wrapper">
        <input
          type="text"
          className="user-input"
          placeholder="책봇아, 나에게 잘 맞는 책을 알려줘"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button className="user-input-submit" onClick={sendToBackend}>→</button>
      </div>
    </div>
  );
};

export default UserInput;
