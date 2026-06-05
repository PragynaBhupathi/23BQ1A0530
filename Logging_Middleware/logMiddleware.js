const { log } = require('./logger');

function logMiddleware(req, res, next) {
  const { stack, level, package: packageName, message } = req.body || {};

  try {
    const entry = log(stack, level, packageName, message);
    req.logEntry = entry;
    next();
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

module.exports = logMiddleware;
