const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Client connected');

  // Send a message to the client every 5 seconds
  const sendLiveUpdate = () => {
    const message = JSON.stringify({ title: 'Breaking News', description: `Update at ${new Date().toLocaleTimeString()}` });
    ws.send(message);
  };

  const intervalId = setInterval(sendLiveUpdate, 5000);

  ws.on('close', () => {
    clearInterval(intervalId);
    console.log('Client disconnected');
  });
});

console.log('WebSocket server is running on ws://localhost:8080');
