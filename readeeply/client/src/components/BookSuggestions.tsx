import React from 'react';
import './BookSuggestions.css';
import book1Image from '../assets/images/book_1.jpg'; // 수정된 경로
import book2Image from '../assets/images/book_2.jpg';
import book3Image from '../assets/images/book_3.jpg';


const BookSuggestions = () => {
  const books = [
    { image: book1Image, id: 'book1', title: '책 제목 1' },
    { image: book2Image, id: 'book2', title: '책 제목 2' },
    { image: book3Image, id: 'book3', title: '책 제목 3' }
    // ... 추가 책 데이터
  ];
  
  return (
    <div className="book-suggestions-container">
      {books.map((book) => (
        <div key={book.id} className="book-suggestion">
          <img className="book-image" src={book.image} alt={book.title} /> {/* alt 속성 수정 */}
          {/* 여기에 추가적인 책 정보가 들어갈 수 있습니다 */}
        </div>
      ))}
      <div className="book-suggestions-title">책봇이 알려주는 나랑 잘 맞는 책</div>
    </div>
  );
};

export default BookSuggestions;
