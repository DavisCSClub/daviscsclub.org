/**
*
* ProfileCard
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faLinkedIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faGlobe from '@fortawesome/fontawesome-free-solid/faGlobe';

import './style.css';

// TODO: Use this for officer cards?
function ProfileCard({ name, bio, linkedInUrl, gitHubUrl, websiteUrl }) {
  return (
    <div className="profile-card">
      <div className="card-header">
        {/* <a href="http://website.com/">
          <img src="http://website.com/image.png" alt="test" />
        </a> */}
        <h1>{name}</h1>
        <h2>{bio}</h2>
      </div>

      {/* <div className="profile-bio">
        <p>Even when everything is perfect, you can always make it better. Break barriers in your head, create something crazy and don{'\''}t forget Code is Poetry...</p>
      </div> */}

      <ul className="profile-social-links">
        <li>
          <a className={linkedInUrl === '#' ? 'nolink' : ''} href={linkedInUrl}><FontAwesomeIcon icon={faLinkedIn} /></a>
        </li>
        <li>
          <a className={gitHubUrl === '#' ? 'nolink' : ''} href={gitHubUrl}><FontAwesomeIcon icon={faGithub} /></a>
        </li>
        <li>
          <a className={websiteUrl === '#' ? 'nolink' : ''} href={websiteUrl}><FontAwesomeIcon icon={faGlobe} /></a>
        </li>
      </ul>
    </div>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  linkedInUrl: PropTypes.string.isRequired,
  gitHubUrl: PropTypes.string.isRequired,
  websiteUrl: PropTypes.string.isRequired,
};

export default ProfileCard;
