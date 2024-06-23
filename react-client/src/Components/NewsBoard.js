import React from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({ news }) => {
  return (
    <div className="container mx-auto grid gap-4 md:grid-cols-3 p-4">
      {news.map((item, index) => (
        <NewsItem key={index} news={item} />
      ))}
    </div>
  );
};

export default NewsBoard;
