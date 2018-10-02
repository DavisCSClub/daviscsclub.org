/**
 *
 * signinHero
 *
 */

import React from 'react';
import smoothScroll from 'smoothscroll';

class signinHero extends React.PureComponent {
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
              <h2 className="heading mb-3">DCSC Sign in Form</h2>
              <div className="sub-heading"><p className="mb-5">Sign in to DCSC Events here!</p>
                <p><a onClick={(event) => this.handleScrollClick(event, '#sigin-form')} href="#signin-form" role="button" className="btn smoothscroll pb_outline-light btn-xl pb_font-13 p-4 rounded-0 pb_letter-spacing-2">Sign in</a></p>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

signinHero.propTypes = {

};

export default signinHero;
