const jwt = require('jsonwebtoken');
const requestHelper = require('../helpers/requestHelper'); //Melissa's set up. Can totally be changed
require('dotenv').config();

const AuthenticateToken = (req, res, next) => {
  const token =
    req.body.token ||
    req.query.token ||
    req.headers['x-access-token'] || // can be changed
    req.headers.authorization;
  // decode token
  if (token) {
    // verifies token and checks if expired or invalid
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        requestHelper.error(res, 401, 'Authentication failed');
      }
      req.decoded = decoded;
      next();
    });
  } else {
    requestHelper.error(res, 403, 'Access denied. You are not logged in');
  }
};

module.exports = AuthenticateToken;