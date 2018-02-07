/**
*
* PrevArrow
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAngleLeft from '@fortawesome/fontawesome-free-solid/faAngleLeft';


function PrevArrow({ onClick }) {
  return (
    <span className="slick-arrow prev" onClick={onClick} role="button" tabIndex={0}>
      <FontAwesomeIcon icon={faAngleLeft} />
    </span>
  );
}

PrevArrow.propTypes = {
  onClick: PropTypes.func,
};

export default PrevArrow;
