import React from 'react';

import PageLayout from '../components/shared/pageLayout';
import ApparelNav from '../components/apparel/ApparelNav';
import ApparelHero from '../components/apparel/ApparelHero';
import ApparelAbout from '../components/apparel/ApparelAbout';

import './template/helpers.css';
import './template/style.css';

export default () => (
  <PageLayout title='DCSC Apparel' navigation=<ApparelNav />>
    <ApparelHero />
    <ApparelAbout />
  </PageLayout>
);
