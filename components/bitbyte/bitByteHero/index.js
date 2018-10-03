/**
 *
 * bitByteHero
 *
 */

import React from 'react';
import smoothScroll from 'smoothscroll';

class bitByteHero extends React.PureComponent {
  handleScrollClick(event, scrollId) {
    const scrollElement = document.querySelector(scrollId);
    smoothScroll(scrollElement);
    event.preventDefault();
  }

  render() {
    // Background-image should be around 1900x1200 ratio
    return (
      <section className="pb_cover_v1 text-left cover-bg-black cover-bg-opacity-4" style={{ backgroundImage: 'url(static/images/who2.jpg)' }} id="section-home">
        <div className="container">
          <div className="row align-items-center justify-content-end">
            <div className="col-md-6  order-md-1">
              <h2 className="heading mb-3">BitByte</h2>
              <div className="sub-heading"><p className="mb-5">Sign up for the BitByte mentorship here!</p>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

bitByteHero.propTypes = {

};

export default bitByteHero;
