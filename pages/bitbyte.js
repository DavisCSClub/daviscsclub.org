import React from 'react';

import PageLayout from '../components/shared/pageLayout';
import BitByteNav from '../components/bitByte/bitByteNav';
import BitByteHero from '../components/bitByte/bitByteHero';
import BitByteAbout from '../components/bitByte/bitByteAbout';

import './template/helpers.css';
import './template/style.css';

export default () => (
  <PageLayout title='BitByte Signup' navigation={<BitByteNav />}>
    <BitByteHero/>
    <BitByteAbout/>
  </PageLayout>
);
