const app = require('./app');
const http = require('http');
const port = 3000;

app.set('port', port);

const server = http.createServer(app);

server.listen(port, 'localhost', () => {
  console.log('Server running');
});