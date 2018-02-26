/**
 *
 * Auth
 *
 */

import Auth0Lock from 'auth0-lock';
import { userLoad, signupSubmit, lockShow, lockHide, loginSubmit, loginSuccess, loginFail } from 'containers/Auth/actions';

const AUTH_CONFIG = {
  domain: 'dcsc.auth0.com',
  audience: 'https://daviscsclub.org/api',
  clientId: '0v9ZHz0G7GE2IZ2huQo628Po161BgDYa',
};

export default class Auth {
  constructor(store) {
    // Bind functions, setup Lock, and create listeners
    this.showLogin = this.showLogin.bind(this);
    this.lock = new Auth0Lock(AUTH_CONFIG.clientId, AUTH_CONFIG.domain, {
      autoclose: true,
      auth: {
        responseType: 'token id_token',
        audience: AUTH_CONFIG.audience,
      },
      theme: {
        // logo: '' // Recommended max height of 58px
        primaryColor: '#65C2B2',
      },
    });
    this.handleEvents(store);
    store.dispatch(userLoad());
  }

  handleEvents(store) {
    // Dispatch actions when Lock events happen
    const callback = {
      lockShow: () => store.dispatch(lockShow()),
      lockHide: () => store.dispatch(lockHide()),
      signupSubmit: () => store.dispatch(signupSubmit()),
      loginSubmit: () => store.dispatch(loginSubmit()),
      authSuccess: (authResult) => store.dispatch(loginSuccess(authResult)),
      authFail: (authResult) => store.dispatch(loginFail(authResult)),
    };
    this.lock.on('show', callback.lockShow);
    this.lock.on('hide', callback.lockHide);
    this.lock.on('signup submit', callback.signupSubmit);
    this.lock.on('signin submit', callback.loginSubmit);
    this.lock.on('authenticated', callback.authSuccess);
    this.lock.on('authorization_error', callback.authFail);
  }

  showLogin() {
    // Show the Lock modal
    this.lock.show();
  }

  /* isAuthenticated() {
    // Check if we are still logged in based on stored token expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  } */
}
