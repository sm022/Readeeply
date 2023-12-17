import React from 'react';
import './UserInput.css';

const UserInput = () => {
  return (
    <div className="user-input-container">
      <div className="user-input-wrapper">
        <input type="text" className="user-input" placeholder="책봇아, 나에게 맞는 책을 알려줘" />
        <button className="user-input-submit">→</button>
      </div>
    </div>
  );
};

export default UserInput;
