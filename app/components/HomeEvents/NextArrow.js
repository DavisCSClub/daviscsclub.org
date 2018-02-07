/**
*
* NextArrow
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAngleRight from '@fortawesome/fontawesome-free-solid/faAngleRight';

function NextArrow({ onClick }) {
  return (
    <span className="slick-arrow next" onClick={onClick} role="button" tabIndex={0}>
      <FontAwesomeIcon icon={faAngleRight} />
    </span>
  );
}

NextArrow.propTypes = {
  onClick: PropTypes.func,
};

export default NextArrow;
