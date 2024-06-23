import React from 'react';

const NewsItem = ({ news }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-bold mb-2">{news.title}</h2>
      <p className="text-gray-700">{news.description}</p>
      <a
        href={news.url}
        className="text-blue-500 mt-2 block"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read more
      </a>
    </div>
  );
};

export default NewsItem;
