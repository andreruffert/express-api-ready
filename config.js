const { name, version } = require('./package.json');

// Source environment variables from .env file
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// Define required environment variables e.g. 'DATABASE_URL' etc.
[].forEach(name => {
  if (!process.env[name]) {
    throw new Error(`Environment variable "${name}" is missing`);
  }
});

const config = {
  name: name,
  version: version,
  env: process.env.NODE_ENV || 'development',
  logLevel: process.env.LOG_LEVEL,
  server: {
    port: process.env.PORT || 8080,
    hostname: process.env.HOST || 'localhost',

    // Maximum request body size (Content-Type: application/json)
    bodyLimit: '100kb'
  }
};

module.exports = config;
