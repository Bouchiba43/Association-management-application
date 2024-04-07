import React from 'react';
import NewsCard from './NewsCard';


const NewsList = ({ newsData }) => {
  return (
    <div className="news-list">
      {newsData.map(news => (
        <NewsCard key={news.id} news={news} />
      ))}
    </div>
  );
};

export default NewsList;
