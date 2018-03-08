/**
 *
 * ApparelAbout
 *
 */

import React from 'react';


function ApparelAbout() {
  return (
    <div id="apparel-form">
      <section className="pb_section pb_section_v1">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 pr-md-5 pr-sm-0">
              <h2 className="mt-0 heading-border-top mb-3">A Couple Notes on Ordering</h2>
              <ul>
                <li>Placing an order on this form is the first step in guaranteeing your awesome CS apparel! Be sure to make your payments in cash to one of the officers, or venmo @daviscsclub.</li>
                <li>Once you pay, whether it is in cash or venmo, be sure to mention your email! This is how we verify purchases.</li>
                <li>If you plan on purchasing two or more of the same product (e.g. two CS Department Hoodies), please fill out a second form. We realize this is a bit inconvenient, sorry!</li>
              </ul>
            </div>
            <div className="col-lg-7">
              <iframe title="Apparel Order Form" src="https://docs.google.com/forms/d/e/1FAIpQLSdtwgzDaQcg-nuznNfV9KMcyf_7xWnCEY_qfu94ESNp96Tj4w/viewform?embedded=true" width="760" height="900" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

ApparelAbout.propTypes = {

};

export default ApparelAbout;
