import React from 'react';
import LinkedItem from './LinkedItem';
import './Components.css'


const newsData = [
  { icon: '📰', text: 'Первая новость', link: 'https://example.com/news/1' },
  { icon: '📰', text: 'Вторая новость', link: 'https://example.com/news/2' },
];

const NewsList: React.FC = () => {
  return (
    <div className='news-container'>
      <h2>Новости</h2>
      <div className='news-list'>
        {newsData.map((news, index) => (
          <LinkedItem key={index} {...news} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;