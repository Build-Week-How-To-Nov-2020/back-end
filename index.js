const server = require('./server/server');

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`\n=== Server runnin http://localhost:${PORT} ===\n`);
});
