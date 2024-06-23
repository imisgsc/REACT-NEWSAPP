import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import NewsBoard from './Components/NewsBoard';
import './app.css';

const API_KEY = '2c971674a16f433c8e0ae8dcc43bcb4e';
const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=${API_KEY}`;

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

    // Fetch news initially
    fetchNews();

    // Set up interval to fetch news every 30 seconds
    const intervalId = setInterval(fetchNews, 30000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      <Navbar />
      <NewsBoard news={news} />
    </div>
  );
};

export default App;
