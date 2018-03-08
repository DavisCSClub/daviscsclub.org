/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectMembersData } from 'containers/HomePage/selectors';
import ApparelNav from 'components/ApparelNav';
import ApparelHero from 'components/ApparelHero';
import ApparelForm from 'components/ApparelForm';
import HomeFooter from 'components/HomeFooter';


import { loadMemberCards } from './actions';

import './helpers.css';
import './style.css';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.loadMemberCards();
  }

  render() {
    return (
      <div>
        <ApparelNav showLogin={this.props.authHandler.showLogin} />
        <ApparelHero />
        <ApparelForm />
        <HomeFooter />
      </div>
    );
  }
}

HomePage.propTypes = {
  authHandler: PropTypes.object.isRequired,
  loadMemberCards: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  membersData: makeSelectMembersData(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadMemberCards: () => dispatch(loadMemberCards()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

// TODO: Figure out why I can't inject the reducer+saga without breaking the reducer and devtools

export default compose(
  withConnect,
)(HomePage);
