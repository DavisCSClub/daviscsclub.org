const axios = require('axios');
const logger = require('../logger');

class Auth0UserManagement {
  constructor() {
    this.managementToken = '';
    this.expiresAt = 0;
    this.checkGetToken();
  }

  // Check if current token is valid, get new one if not
  async checkGetToken() {
    if (this.expiresAt < new Date().getTime()) {
      axios.post(`https://${process.env.AUTH0_DOMAIN}/oauth/token`, {
        grant_type: 'client_credentials',
        client_id: process.env.AUTH0_NON_CLIENT_ID,
        client_secret: process.env.AUTH0_NON_CLIENT_SECRET,
        audience: `https://${process.env.AUTH0_DOMAIN}/api/v2/`,
      }, {
        headers: { 'content-type': 'application/json' },
      })
      .then((res) => {
        this.managementToken = res.data.access_token;
        this.expiresAt = JSON.stringify((res.data.expires_in * 1000) + new Date().getTime());
      })
      .catch((err) => logger.error(`Auth0UserManagement Error: Failed to get new user management token status ${err.response.statusText}`));
    }
  }

  async getUser(userId) {
    await this.checkGetToken();
    return axios.get(`https://${process.env.AUTH0_DOMAIN}/api/v2/users/${userId}`, {
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${this.managementToken}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => logger.error(`Auth0UserManagement Error: Failed to getUser status ${err.response.statusText}`));
  }

  async updateUser(userId, patchObj) {
    await this.checkGetToken();
    return axios.patch(`https://${process.env.AUTH0_DOMAIN}/api/v2/users/${userId}`, {
      ...patchObj,
    }, {
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${this.managementToken}`,
      },
    })
    .catch((err) => logger.error(`Auth0UserManagement Error: Failed to updateUser status ${err.response.statusText}`));
  }
}


module.exports = Auth0UserManagement;
