import React from 'react';

import PageLayout from '../components/shared/pageLayout';
import BitByteNav from '../components/bitbyte/bitByteNav';
import BitByteHero from '../components/bitbyte/bitByteHero';
import BitByteAbout from '../components/bitbyte/bitByteAbout';

import './template/helpers.css';
import './template/style.css';

export default () => (
  <PageLayout title='BitByte Signup' navigation={<BitByteNav />}>
    <BitByteHero/>
    <BitByteAbout/>
  </PageLayout>
);
