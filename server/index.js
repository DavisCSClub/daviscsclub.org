/* eslint consistent-return:0 */

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logger = require('./logger');
const apiRoutes = require('./api');

const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;
const app = express();

// Check for missing required env variables
const REQUIRED_ENV = 'MONGODB_URI AUTH0_DOMAIN AUTH0_DCSC_API_AUDIENCE AUTH0_NON_CLIENT_ID AUTH0_NON_CLIENT_SECRET'.split(' ');
let MISSING_ENV = '';
REQUIRED_ENV.forEach((env) => {
  if (!process.env[env]) {
    MISSING_ENV += `${env}, `;
  }
});
if (MISSING_ENV) {
  throw new Error(`Missing required env var ${MISSING_ENV} in your .env file`);
}

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// Parse application/json
app.use(bodyParser.json());
// API routes
app.use('/api', apiRoutes);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// Start your app.
app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, prettyHost, url);
    });
  } else {
    logger.appStarted(port, prettyHost);
  }
});
