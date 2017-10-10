const { Router } = require('express');
const logger = require('../lib/logger');

module.exports = ({ config, db }) => {
  const api = Router();

  // Expose some API metadata at the root
  api.get('/', (req, res) => {
    res.json({
      name: config.name,
      version: config.version,
      env: config.env,
      status: 'good'
    });

    logger.log('debug', 'Root endpoint requested', { path: req.path });
  });

  // Mount other resources here

  return api;
};
