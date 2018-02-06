/**
*
* HomeHero
*
*/

import React from 'react';

import '!file-loader?name=[name].[ext]&outputPath=home/!../../images/home/hero.jpg';

function HomeHero() {
  // Background-image should be around 1900x1200 ratio
  return (
    <section className="pb_cover_v1 text-left cover-bg-black cover-bg-opacity-4" style={{ backgroundImage: 'url(/home/hero.jpg)' }} id="section-home">
      <div className="container">
        <div className="row align-items-center justify-content-end">
          <div className="col-md-6  order-md-1">

            <h2 className="heading mb-3">The Davis Computer Science Club</h2>
            <div className="sub-heading"><p className="mb-5">We cultivate the professional development of our members and connect them with other passionate peers</p>
              <p><a href="#section-contact" role="button" className="btn smoothscroll pb_outline-light btn-xl pb_font-13 p-4 rounded-0 pb_letter-spacing-2">Learn More</a></p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

HomeHero.propTypes = {

};

export default HomeHero;
