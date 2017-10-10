const logger = require('../lib/logger');

module.exports = (err, req, res, next) => {
  err.status = err.status || 500;

  res.status(err.status);
  res.json({
    statusCode: err.status,
    error: err.message
  });

  logger.log('error', err.message, {
    statusCode: err.status,
    properties: err.properties
  });
};
