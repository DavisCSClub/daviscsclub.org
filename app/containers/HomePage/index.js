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

import HomeNav from 'components/HomeNav';
import HomeHero from 'components/HomeHero';
import HomeAbout from 'components/HomeAbout';
import HomeMembership from 'components/HomeMembership';
import HomeEvents from 'components/HomeEvents';
import HomeOfficers from 'components/HomeOfficers';
import HomeContact from 'components/HomeContact';
import HomeFooter from 'components/HomeFooter';

import './helpers.css';
import './style.css';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
};
