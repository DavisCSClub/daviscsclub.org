/**
 *
 * ApparelPage
 *
 */

import React from 'react';

import ApparelNav from 'components/ApparelNav';
import ApparelHero from 'components/ApparelHero';
import ApparelAbout from 'components/ApparelAbout';
import HomeFooter from 'components/HomeFooter';


import '../HomePage/helpers.css';
import '../HomePage/style.css';

export class ApparelPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <ApparelNav />
        <ApparelHero />
        <ApparelAbout />
        <HomeFooter />
      </div>
    );
  }
}

ApparelPage.propTypes = {

};

// TODO: Figure out why I can't inject the reducer+saga without breaking the reducer and devtools

export default ApparelPage;
