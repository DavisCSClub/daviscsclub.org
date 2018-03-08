/**
 *
 * AccountPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectUserData } from 'containers/AccountPage/selectors';
import { makeSelectAuthAccessToken, makeSelectAuthExpiry } from 'containers/Auth/selectors';

import { loadUserData } from './actions';

export class AccountPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.loadUserData();
  }

  render() {
    console.log(this.props.userData);
    // TODO: how pass these along as they can be/are undef in willMount
    console.log(this.props.authAccessToken);
    console.log(this.props.authExpiry);
    return (
      <div>
        This is the AccountPage container !
      </div>
    );
  }
}

AccountPage.propTypes = {
  loadUserData: PropTypes.func.isRequired,
  authAccessToken: PropTypes.string.isRequired,
  authExpiry: PropTypes.string.isRequired,
  userData: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]).isRequired,
};

const mapStateToProps = createStructuredSelector({
  authAccessToken: makeSelectAuthAccessToken(),
  authExpiry: makeSelectAuthExpiry(),
  userData: makeSelectUserData(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadUserData: () => dispatch(loadUserData()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

// TODO: Figure out why I can't inject the reducer+saga without breaking the reducer and devtools

export default compose(
  withConnect,
)(AccountPage);
