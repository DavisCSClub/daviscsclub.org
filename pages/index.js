import React from 'react';
import PropTypes from 'prop-types';

import PageLayout from '../components/shared/pageLayout';
import HomeNav from '../components/home/HomeNav';
import HomeHero from '../components/home/HomeHero';
import HomeAbout from '../components/home/HomeAbout';
import HomeBitByte from '../components/home/HomeBitByte';
import HomeMembership from '../components/home/HomeMembership';
// import HomeEvents from '../components/home/HomeEvents';
// import HomeOfficers from '../components/home/HomeOfficers';
import HomeContact from '../components/home/HomeContact';
import HomeMembers from '../components/home/HomeMembers';

import './template/helpers.css';
import './template/style.css';

export default class HomePage extends React.Component {
  static async getInitialProps() {
    // This data may be moved online at a future date
    const membersData = require('../members.json') || false; // eslint-disable-line global-require
    membersData.sort((a, b) => a.name < b.name ? -1 : 1);
    return { membersData };
  }

  render() {
    return (
      <PageLayout title='DCSC' navigation={<HomeNav />}>
        <HomeHero />
        <HomeAbout />
        <HomeBitByte />
        {/*<HomeMembership />*/}
        {/* <HomeEvents />
        <HomeOfficers /> */}
        <HomeContact />
        {/*<HomeMembers membersData={this.props.membersData} />*/}
      </PageLayout>
    );
  }
}

HomePage.propTypes = {
  membersData: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]).isRequired,
};
