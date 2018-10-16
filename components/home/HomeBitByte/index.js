/**
 *
 * HomeBitByte
 *
 */

import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faGraduationCap from '@fortawesome/fontawesome-free-solid/faGraduationCap';
import faHandshake from '@fortawesome/fontawesome-free-regular/faHandshake';
import faUsers from '@fortawesome/fontawesome-free-solid/faUsers';

function HomeBitByte() {
  return (
    <div id="section-bitbyte">
      <section className="pb_section pb_section_v1">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 pr-md-5 pr-sm-0">
              <h2 className="mt-0 heading-border-top mb-3">BitByte</h2>
              <p>The Davis Computer Science Club is proud to announce the start of our Bit Byte mentorship program! If you’re looking for guidance on your career, looking to pass down knowledge, or just looking for a sense of community, this program is perfect for you!</p>
              <p>As a Bit (Mentee), you would have the chance to receive help and guidance from a more experienced student, whether it be with internships, career, or classes! As a Byte (Mentor), you would be able to spread your wisdom and pass down your knowledge from over the years. You have a chance to lead new students and act as a valuable source of information on college life. Don't miss out!</p>
            </div>
            <div className="col-lg-7">
              <div className="images">
                {/* 600x450 ratio or so */}
                <img className="img-fluid" style={img} src="static/images/bitbyte.jpg" alt="" />
                {/* 800x500 ratio or so */}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

HomeBitByte.propTypes = {

};

const img = {
  marginTop: '125px',
  height: '325px',
  width: '1000px',
  marginLeft: '25px'
};

export default HomeBitByte;
