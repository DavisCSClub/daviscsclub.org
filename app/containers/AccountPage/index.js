/**
 *
 * AccountPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';

export class AccountPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        This is the AccountPage container !
      </div>
    );
  }
}

AccountPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    accountPage: state.accountPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'accountPage', reducer });
const withSaga = injectSaga({ key: 'accountPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AccountPage);
