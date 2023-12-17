import React from 'react';
import './App.css';
import UserInput from './components/UserInput';
import BookSuggestions from './components/BookSuggestions';
import Chatbot from './components/Chatbot';
import QuickReplies from './components/QuickReplies';

function App() {
  return (
    <div className="app-container">
      <div className="left-container">
        <UserInput />
        <BookSuggestions />
      </div>
      <div className="right-container">
        <Chatbot />
        <QuickReplies />
      </div>
    </div>
  );
}

export default App;
