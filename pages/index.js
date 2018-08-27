import React from 'react';

import PageLayout from '../components/shared/pageLayout';
import HomeNav from '../components/home/HomeNav';
import HomeHero from '../components/home/HomeHero';
import HomeAbout from '../components/home/HomeAbout';
import HomeMembership from '../components/home/HomeMembership';
import HomeEvents from '../components/home/HomeEvents';
import HomeOfficers from '../components/home/HomeOfficers';
import HomeContact from '../components/home/HomeContact';
import HomeMembers from '../components/home/HomeMembers';
// import Auth from '../utils/Auth';

import './template/helpers.css';
import './template/style.css';

// const authHandler = new Auth();

export default () => (
  <PageLayout title='Title' navigation={<HomeNav />}>
    <HomeHero />
    <HomeAbout />
    <HomeMembership />
    <HomeEvents />
    <HomeOfficers />
    <HomeContact />
  </PageLayout>
);
