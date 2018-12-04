const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');


require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

server.express.use(cookieParser());

server.express.use((req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const { userId } = jwt.verify(tokem, process.env.APP_SECRET);
    req.userId = userId;
  }

  next();
})

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  deets => {
    console.log(`The magic happens on port http://localhost:${deets.port}`);
  }
);
