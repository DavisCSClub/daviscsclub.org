import React from 'react';

import PageLayout from '../components/shared/pageLayout';
import SigninNav from '../components/signin/signinNav';
import SigninHero from '../components/signin/signinHero';
import SigninAbout from '../components/signin/signinAbout';

import './template/helpers.css';
import './template/style.css';

export default () => (
  <PageLayout title='DCSC Sign in sheet' navigation={<SigninNav />}>
    <SigninHero />
    <SigninAbout />
  </PageLayout>
);
