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

import HomeNav from 'components/HomeNav';
import HomeHero from 'components/HomeHero';
import HomeAbout from 'components/HomeAbout';
import HomeMembership from 'components/HomeMembership';
import HomeEvents from 'components/HomeEvents';
import HomeOfficers from 'components/HomeOfficers';
import HomeContact from 'components/HomeContact';
import HomeFooter from 'components/HomeFooter';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { loadMemberCards } from './actions';
import reducer from './reducer';
import saga from './saga';

import './helpers.css';
import './style.css';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.props.loadMemberCards();
  }

  render() {
    return (
      <div>
        <HomeNav showLogin={this.props.auth.showLogin} />
        <HomeHero />
        <HomeAbout />
        <HomeMembership />
        <HomeEvents />
        <HomeOfficers />
        <HomeContact />
        <HomeFooter />
      </div>
    );
  }
}

HomePage.propTypes = {
  auth: PropTypes.object.isRequired,
  loadMemberCards: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    homePage: state.homePage,
  };
}

const mapDispatchToProps = {
  loadMemberCards,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
