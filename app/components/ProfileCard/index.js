/**
*
* ProfileCard
*
*/

import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faLinkedIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faGlobe from '@fortawesome/fontawesome-free-solid/faGlobe';

import './style.css';

// TODO: Use this for officer cards?
function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="card-header">
        <a href="http://victory-design.ru/">
          <img src="http://victory-design.ru/sandbox/codepen/profile_card/avatar.svg" alt="test" />
        </a>
        <h1>David Jones</h1>
        <h2>Web Developer</h2>
      </div>

      {/* <div className="profile-bio">
        <p>Even when everything is perfect, you can always make it better. Break barriers in your head, create something crazy and don{'\''}t forget Code is Poetry...</p>
      </div> */}

      <ul className="profile-social-links">
        <li>
          <a href="https://www.facebook.com/v1ctory"><FontAwesomeIcon icon={faLinkedIn} /></a>
        </li>
        <li>
          <a href="http://themeforest.net/user/Victory-Design"><FontAwesomeIcon icon={faGithub} /></a>
        </li>
        <li>
          <a href="https://codepen.io/VictoryDesign/"><FontAwesomeIcon icon={faGlobe} /></a>
        </li>
      </ul>
    </div>
  );
}

ProfileCard.propTypes = {

};

export default ProfileCard;
