require("dotenv").config();
const express = require('express')

const app = require('./server/server');

const server = express();

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`\n=== Server runnin http://localhost:${PORT} ===\n`);
});
