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
import HomeNav from 'components/HomeNav';
import HomeHero from 'components/HomeHero';
import HomeAbout from 'components/HomeAbout';
import HomeMembership from 'components/HomeMembership';
import HomeEvents from 'components/HomeEvents';
import HomeOfficers from 'components/HomeOfficers';
import HomeContact from 'components/HomeContact';
import HomeMembers from 'components/HomeMembers';
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
        <HomeNav showLogin={this.props.authHandler.showLogin} />
        <HomeHero />
        <HomeAbout />
        <HomeMembership />
        <HomeEvents />
        <HomeOfficers />
        <HomeContact />
        <HomeMembers membersData={this.props.membersData} />
        <HomeFooter />
      </div>
    );
  }
}

HomePage.propTypes = {
  authHandler: PropTypes.object.isRequired,
  loadMemberCards: PropTypes.func.isRequired,
  membersData: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]).isRequired,
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
