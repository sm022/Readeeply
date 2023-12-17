import React, { useState } from 'react';
import './QuickReplies.css';

type Reply = {
  text: string;
  bgColor: string;
  textColor: string;
};

const QuickReplies = () => {
  // 컴포넌트 내부에서 답변 상태를 관리합니다.
  const [replies] = useState<Reply[]>([
    { text: '로맨스', bgColor: '#FDBF0F', textColor: 'black' },
    { text: '추리', bgColor: '#3AB8EB', textColor: 'white' },
    // 추가 답변...
  ]);

  return (
    <div className="quick-replies-container">
      {replies.map((reply, index) => (
        <button
          key={index}
          className="quick-reply-button"
          style={{
            backgroundColor: reply.bgColor,
            color: reply.textColor,
          }}
        >
          {reply.text}
        </button>
      ))}
    </div>
  );
};

export default QuickReplies;
