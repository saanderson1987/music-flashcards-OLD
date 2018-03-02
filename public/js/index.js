document.addEventListener('DOMContentLoaded', () => {
  // const socket = io.connect('http://localhost');
  const socket = io();
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });
});
