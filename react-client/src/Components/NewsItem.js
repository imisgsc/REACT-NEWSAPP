import React from 'react';

const NewsItem = ({ news }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-bold mb-2">{news.title}</h2>
      <p className="text-gray-700">{news.description}</p>
    </div>
  );
};

export default NewsItem;
