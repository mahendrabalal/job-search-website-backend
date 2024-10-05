require('dotenv').config();
const jsonServer = require('json-server');
const morgan = require('morgan');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();


server.use(middlewares);
server.use(morgan('dev'));

// Improved CORS handling
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

// Health check endpoint
server.get('/health', (req, res) => {
  res.send('Backend is up and running!');
});

server.use(router);

server.listen(3000, () => {
  console.log(`JSON Server is running at port ${PORT}`);
});
