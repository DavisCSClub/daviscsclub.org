/**
*
* ProfileBlock
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faLinkedIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faGlobe from '@fortawesome/fontawesome-free-solid/faGlobe';

import './style.css';

function ProfileBlock({ name, bio, photoUrl, linkedInUrl, gitHubUrl, websiteUrl }) {
  return (
    <div className="profile-block">
      <div className="hovereffect">
        <img src={photoUrl} alt="Member profile" />
        <div className="overlay">
          <h2>{name}</h2>
          <p>
            {linkedInUrl && <a href={linkedInUrl}><FontAwesomeIcon icon={faLinkedIn} /></a>}
            {gitHubUrl && <a href={gitHubUrl}><FontAwesomeIcon icon={faGithub} /></a>}
            {websiteUrl && <a href={websiteUrl}><FontAwesomeIcon icon={faGlobe} /></a>}
            <br />
            <p>{bio}</p>
          </p>
        </div>
      </div>
    </div>
  );
}

ProfileBlock.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  linkedInUrl: PropTypes.string.isRequired,
  gitHubUrl: PropTypes.string.isRequired,
  websiteUrl: PropTypes.string.isRequired,
};

export default ProfileBlock;
