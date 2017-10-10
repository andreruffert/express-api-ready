const http = require('http');
const app = require('./app');
const config = require('./config');
const logger = require('./lib/logger');

const server = http.createServer(app);

server.listen(config.server.port, config.server.hostname, () => {
  logger.log('info', `http://${config.server.hostname}:${config.server.port}`, {
    env: config.env,
    logLevel: config.logLevel
  });
});
