const express = require('express');
const jwt = require('express-jwt');
const jwksClient = require('jwks-rsa');

const restrictedRoutes = require('./restrictedRoutes');
const publicRoutes = require('./publicRoutes');
const router = express.Router();

if (!process.env.AUTH0_DOMAIN || !process.env.AUTH0_AUDIENCE) {
  throw new Error('Make sure you have AUTH0_DOMAIN, and AUTH0_AUDIENCE in your .env file');
}

const checkJWT = jwt({
  // Dynamically provide a signing key based on the kid in the header and the singing keys provided by the JWKS endpoint.
  secret: jwksClient.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),

  // Validate the audience and the issuer.
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ['RS256'],
});

// JWT access token validation
router.use('/authed', checkJWT, (err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Invalid access token');
  } else {
    next();
  }
});

// Load restricted api routes
router.use('/authed', restrictedRoutes);
// Load public api routes
router.use(publicRoutes);

module.exports = router;
