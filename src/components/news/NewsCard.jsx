import React from 'react';
import Image from 'next/image';

const NewsCard = ({ news }) => {
  return (
    <div className="card">
      <Image src={news.image} className="card-img-top" alt={news.title} width={500} height={500}/>
      <div className="card-body">
        <h5 className="card-title">{news.title}</h5>
        <p className="card-text">{news.description}</p>
        <p className="card-date">{news.date}</p>
      </div>
    </div>
  );
};

export default NewsCard;
