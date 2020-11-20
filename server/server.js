const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookie = require("cookie-parser")

const user = require("../routes/signUp&signIn")
const guide = require('../routes/guideRouter')

//need to require routers, and authorization
const server = express()

server.use(helmet())
server.use(cors())
server.use(cookie())
server.use(express.json())

// add browser routes and router
server.use(`/user`, user)
server.use('/guide', guide)
//server.use(``)

module.exports = server;
