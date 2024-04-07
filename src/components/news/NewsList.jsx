import React from 'react';
import NewsCard from './NewsCard';


const NewsList = ({ newsData }) => {
  return (
    <div className='pageTitle'>
        <h1>News</h1>
        <div className="news-list">
        {newsData.map(news => (
            <NewsCard key={news.id} news={news} />
        ))}
        </div>
    </div>
  );
};

export default NewsList;
