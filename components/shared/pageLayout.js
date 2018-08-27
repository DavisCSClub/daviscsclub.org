import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Footer from './footer';

// Import Bootstrap css
import 'bootstrap/dist/css/bootstrap.css';

export default function PageLayout({ children, title, navigation, footer = <Footer /> }) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="apple-touch-icon-precomposed" sizes="57x57" href="static/icons/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="static/icons/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="static/icons/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="static/icons/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon-precomposed" sizes="60x60" href="static/icons/apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon-precomposed" sizes="120x120" href="static/icons/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon-precomposed" sizes="76x76" href="static/icons/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon-precomposed" sizes="152x152" href="static/icons/apple-touch-icon-152x152.png" />
        <link rel="icon" type="image/png" href="static/icons/favicon-196x196.png" sizes="196x196" />
        <link rel="icon" type="image/png" href="static/icons/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="static/icons/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="static/icons/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="static/icons/favicon-128.png" sizes="128x128" />

        <meta name="application-name" content="Davis CS Club" />
        <meta name="msapplication-TileColor" content="#65C2B2" />
        <meta name="msapplication-TileImage" content="static/icons/mstile-144x144.png" />
        <meta name="msapplication-square70x70logo" content="static/icons/mstile-70x70.png" />
        <meta name="msapplication-square150x150logo" content="static/icons/mstile-150x150.png" />
        <meta name="msapplication-wide310x150logo" content="static/icons/mstile-310x150.png" />
        <meta name="msapplication-square310x310logo" content="static/icons/mstile-310x310.png" />

        <title>{ title }</title>
        <meta name="description" content="The Computer Science Club at UC Davis" />
        <meta name="keywords" content="dcsc, davis, ucd, computer science, club" />

        <link href="https://fonts.googleapis.com/css?family=Crimson+Text:400,400i,600|Montserrat:200,300,400" rel="stylesheet" />
      </Head>

      { navigation }
      { children }
      { footer }
    </div>
  );
}

PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  navigation: PropTypes.element.isRequired,
  footer: PropTypes.element,
};
