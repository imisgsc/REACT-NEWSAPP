const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Client connected');

  const sendLiveUpdate = () => {
    // Generate random news content for demonstration
    const news = [
      { title: 'Breaking News 1', description: 'Update at 12:25:19 pm' },
      { title: 'Breaking News 2', description: 'Update at 12:30:00 pm' },
      { title: 'Breaking News 3', description: 'Update at 12:35:30 pm' }
    ];

    // Randomly select a news item to send
    const randomIndex = Math.floor(Math.random() * news.length);
    const message = JSON.stringify(news[randomIndex]);

    ws.send(message);
  };

  // Send updates every 5 seconds
  const intervalId = setInterval(sendLiveUpdate, 5000);

  ws.on('close', () => {
    clearInterval(intervalId);
    console.log('Client disconnected');
  });
});

console.log('WebSocket server is running on ws://localhost:8080');
