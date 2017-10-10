const errorHandler = require('./error-handler');
const notFound = require('./not-found');

// Add custom middleware here.
module.exports = {
  errorHandler,
  notFound
};
