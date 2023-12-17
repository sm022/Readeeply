import React from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const messages = [
    {
      text: "안녕하세요! 대화를 시작하고 싶으시면 '책봇아, 나에게 맞는 책을 알려줘'라고 써보세요!",
      type: 'bot'
    },
    {
      text: "책봇아, 나에게 맞는 책을 알려줘",
      type: 'user'
    },
    {
      text: "어떤 장르를 좋아하시나요?",
      type: 'bot'
    },
    // ... 추가 메시지
  ];

  return (
    <div className="chatbot-container">
      {messages.map((message, index) => (
        <div key={index} className={`chat-message ${message.type}`} style={{ top: `${index * 128}px` }}>
          <div className="message-text">{message.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Chatbot;
