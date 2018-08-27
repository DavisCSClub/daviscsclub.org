/**
*
* Footer
*
*/

import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faFacebookF from '@fortawesome/fontawesome-free-brands/faFacebookF';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';

function Footer() {
  return (
    <footer className="pb_footer bg-light" role="contentinfo">
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <ul className="list-inline">
              <li className="list-inline-item"><a href="https://www.facebook.com/daviscsclub/" className="p-2"><FontAwesomeIcon icon={faFacebookF} /></a></li>
              <li className="list-inline-item"><a href="https://www.instagram.com/daviscsclub/" className="p-2"><FontAwesomeIcon icon={faInstagram} /></a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <p className="pb_font-14">&copy; 2018 Davis Computer Science Club</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {

};

export default Footer;
