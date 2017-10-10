const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');
const middleware = require('./middleware');
const routes = require('./routes');
const config = require('./config');
const db = require('./lib/db');

const app = express();

// Prettify JSON response
app.set('json spaces', 2);

// 3rd party middleware
app.use([
  // HTTP request logging
  morgan('dev'),

  // Set security-related HTTP headers
  helmet(),

  // Enable CORS
  cors(),

  // Compress response bodies
  compression(),

  // Parse incoming request bodies
  bodyParser.json({
    limit: config.server.bodyLimit
  })
]);

// API routes
app.use('/', routes({ config, db }));

// Error handling
app.use([
  // Catch 404's and forward them to the `error-handler`
  middleware.notFound,

  // Expose errors
  middleware.errorHandler
]);

module.exports = app;
