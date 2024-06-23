import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import NewsBoard from './components/NewsBoard';
import './App.css';

const API_KEY = '2c971674a16f433c8e0ae8dcc43bcb4e';
const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

const App = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(NEWS_API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error.message);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <Navbar />
      <NewsBoard news={news} />
    </div>
  );
};

export default App;
