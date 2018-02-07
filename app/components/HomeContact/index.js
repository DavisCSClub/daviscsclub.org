/**
*
* HomeContact
*
*/

import React from 'react';

function HomeContact() {
  return (
    <section className="pb_section" data-section="contact" id="section-contact">
      <div className="container">

        <div className="row justify-content-md-center text-center mb-5">
          <div className="col-lg-7">
            <h2 className="mt-0 heading-border-top">Get In Touch</h2>
            <p>The easiest way to contact us is directly through this form or the email listed below! You can also reach us through Facebook and of course, at our weekly meetings. Please do not contact individual officers directly without good reason.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8 pr-md-5 pr-sm-0 mb-4">
            <form method="POST" action="https://formspree.io/officers@daviscsclub.org">
              <div className="row">
                <div className="col-md">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control p-3 rounded-0" id="name" name="name" />
                  </div>
                </div>
                <div className="col-md">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control p-3 rounded-0" id="email" name="_replyto" />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea cols="30" rows="10" className="form-control p-3 rounded-0" id="message" name="message"></textarea>
              </div>
              <div className="form-group">
                <input type="submit" className="btn pb_outline-dark pb_font-13 pb_letter-spacing-2 p-3 rounded-0" value="Send Message" />
              </div>
            </form>
          </div>
          <div className="col-md-4">
            <ul className="pb_contact_details_v1">
              <li>
                <span className="text-uppercase">Email</span>
                officers@daviscsclub.org
              </li>
              <li>
                <span className="text-uppercase">Facebook Page</span>
                <a href="https://www.facebook.com/daviscsclub/">facebook.com/daviscsclub/</a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

HomeContact.propTypes = {

};

export default HomeContact;
