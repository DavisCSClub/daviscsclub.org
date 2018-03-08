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
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  // format like membersData: makeSelectMembersData(),
});

function mapDispatchToProps(/* dispatch */) {
  return {
    // format like loadMemberCards: () => dispatch(loadMemberCards()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

// TODO: Figure out why I can't inject the reducer+saga without breaking the reducer and devtools

export default compose(
  withConnect,
)(AccountPage);
