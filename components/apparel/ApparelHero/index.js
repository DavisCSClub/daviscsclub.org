/**
 *
 * ApparelHero
 *
 */

import React from 'react';
import smoothScroll from 'smoothscroll';

class ApparelHero extends React.PureComponent {
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

              <h2 className="heading mb-3">DCSC Apparel Order Form</h2>
              <div className="sub-heading"><p className="mb-5">Get your department hoodies and club T-shirts here!</p>
                <p><a onClick={(event) => this.handleScrollClick(event, '#apparel-form')} href="#apparel-form" role="button" className="btn smoothscroll pb_outline-light btn-xl pb_font-13 p-4 rounded-0 pb_letter-spacing-2">Order</a></p>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

ApparelHero.propTypes = {

};

export default ApparelHero;
