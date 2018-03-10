const Express = require('express');
const app = Express();
const path = require('path');
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(Express.static('public'));

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
  // socket.on('midi', receiveMidi);
  socket.on('keydown', function (keyName) {
    socket.emit('responseToKey', `You just pressed ${keyName}`);
  })
});
