const createError = require('http-errors');

module.exports = (req, res, next) => {
  const error = createError(404, 'Not found', {
    properties: {
      path: req.path
    }
  });
  return next(error);
};
