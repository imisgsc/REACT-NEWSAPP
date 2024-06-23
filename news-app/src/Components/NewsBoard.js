import React from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({ news }) => {
  return (
    <div className="container mx-auto grid gap-4 md:grid-cols-3">
      {news.map((item) => (
        <NewsItem key={item.url} news={item} />
      ))}
    </div>
  );
};

export default NewsBoard;
