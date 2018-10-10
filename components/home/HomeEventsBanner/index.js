/**
 *
 * HomeEventsBanner
 *
 */

import React from 'react';

function HomeEventsBanner() {
  return (
    <section className="pb_section" id="section-events">
      <div className="container">

        <div className="row justify-content-md-center text-center mb-5">
          <div className="col-lg-9">
            <h2 className="mt-0 heading-border-top">Upcoming Events</h2>
            <img style={style} src="static/images/events.jpg" />
          </div>

        </div>


      </div>
    </section>
  );
}

HomeEventsBanner.propTypes = {
};

const style = {
  marginTop: '30px',
  width: '100%'
};
export default HomeEventsBanner;
