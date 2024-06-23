const WebSocket = require('ws');
const fetch = require('node-fetch');

const wss = new WebSocket.Server({ port: 8080 });

const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines';
const API_KEY = '2c971674a16f433c8e0ae8dcc43bcb4e'; // Replace with your Google News API key

wss.on('connection', async (ws) => {
  console.log('Client connected');

  const sendLiveUpdate = async () => {
    try {
      const response = await fetch(`${NEWS_API_URL}?sources=google-news&apiKey=${API_KEY}`);
      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }
      const data = await response.json();

      if (data.articles && data.articles.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.articles.length);
        const { title, description } = data.articles[randomIndex];
        const message = JSON.stringify({ title, description });
        ws.send(message);
      }
    } catch (error) {
      console.error('Error fetching news:', error.message);
    }
  };

  // Send initial update immediately upon connection
  sendLiveUpdate();

  // Set up interval to send updates every 5 seconds
  const intervalId = setInterval(sendLiveUpdate, 5000);

  ws.on('close', () => {
    clearInterval(intervalId);
    console.log('Client disconnected');
  });
});

console.log('WebSocket server is running on ws://localhost:8080');
