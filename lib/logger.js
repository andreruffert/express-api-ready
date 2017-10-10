const winston = require('winston');
const config = require('../config');

const logger = winston.createLogger({
  level: config.logLevel,
  transports: [
    new winston.transports.Console({
      handleExceptions: true,
      format: winston.format.combine(
        winston.format.colorize({ all: true }),
        winston.format.simple()
      )
    })
  ]
});

module.exports = logger;
