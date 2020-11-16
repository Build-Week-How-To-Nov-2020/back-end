const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookie = require("cookie-parser")


//need to require routers, and authorization
const server = express()

server.use(helmet())
server.use(cors())
server.use(cookie())
server.use(express.json())

// add browser routes and router
//server.use(``)
//server.use(``)

server.get('/', (req, res) => {
    res.status(200).json({
      status: 200,
      message: 'Welcome'
    });
  });
  
  server.get('*', (req, res) => {
    res.status(404).json({
      message: 'Invalid routes'
    });
  });
  
module.exports = server;
