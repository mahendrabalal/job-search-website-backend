require('dotenv').config();
const jsonServer = require('json-server');
const morgan = require('morgan');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Use middlewares
server.use(middlewares);
server.use(morgan('dev'));

// Health check endpoint
server.get('/health', (req, res) => {
  res.send('Backend is up and running!');
});

// Use the router
server.use(router);

// Start the server without specifying a port
server.listen(3000, () => {
  console.log('JSON Server is running');
});
