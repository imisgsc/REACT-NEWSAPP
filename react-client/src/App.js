import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import NewsBoard from './Components/NewsBoard';
import './app.css';

const App = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');

    ws.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    ws.onmessage = (event) => {
      const newUpdate = JSON.parse(event.data);
      setNews((prevNews) => [newUpdate, ...prevNews]);
    };

    ws.onclose = () => {
      console.log('Disconnected from WebSocket server');
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      <Navbar />
      <NewsBoard news={news} />
    </div>
  );
};

export default App;
