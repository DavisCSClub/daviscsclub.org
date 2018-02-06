/**
*
* HomeAbout
*
*/

import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faGraduationCap from '@fortawesome/fontawesome-free-solid/faGraduationCap';
import faHandshake from '@fortawesome/fontawesome-free-regular/faHandshake';
import faUsers from '@fortawesome/fontawesome-free-solid/faUsers';

import '!file-loader?name=[name].[ext]&outputPath=home/!../../images/home/who1.jpg';
import '!file-loader?name=[name].[ext]&outputPath=home/!../../images/home/who2.jpg';

function HomeAbout() {
  return (
    <div>
      <section className="pb_section pb_section_v1" data-section="about" id="section-about">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 pr-md-5 pr-sm-0">
              <h2 className="mt-0 heading-border-top mb-3">Who We Are</h2>
              <p>The Davis Computer Science Club (DCSC) organizes and connects UC Davis students interested in the field of computer science. We cultivate the professional development of our members and augment their education with practical skills and projects.</p>
              <p>We strive to provide a fun and supportive community through our weekly events; some of our past events have been Hack-A-Website, Courses Preview, Land That Internship, and Intro to Deep Learning.</p>
            </div>
            <div className="col-lg-7">
              <div className="images">
                {/* 600x450 ratio or so */}
                <img className="img1 img-fluid" src="/home/who1.jpg" alt="" />
                {/* 800x500 ratio or so */}
                <img className="img2 img-fluid" src="/home/who2.jpg" alt="" />
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="pb_section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md">
              <div className="media pb_media_v2 d-block text-center mb-3">
                <div className="icon border border-icon rounded-circle d-block mr-3 display-4 mx-auto mb-4"><i className="flaticon text-icon"><FontAwesomeIcon icon={faGraduationCap} /></i></div>
                <div className="media-body">
                  <h3 className="mt-0 pb_font-20">Workshops</h3>
                  <p>Our club hosts a variety workshops each quarter ranging from interview preparation to ios development.</p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="media pb_media_v2 d-block text-center  mb-3">
                <div className="icon border border-icon rounded-circle d-flex mr-3 display-4 mx-auto mb-4"><i className="flaticon text-icon"><FontAwesomeIcon icon={faHandshake} /></i></div>
                <div className="media-body">
                  <h3 className="mt-0 pb_font-20">Socials</h3>
                  <p>Come to socials for fun and conversation. Past events include De-Stressers, Byte/Bit, and the Demo Day showcase.</p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="media pb_media_v2 d-block text-center  mb-3">
                <div className="icon border border-icon rounded-circle d-flex mr-3 display-4 mx-auto mb-4"><i className="flaticon text-icon"><FontAwesomeIcon icon={faUsers} /></i></div>
                <div className="media-body">
                  <h3 className="mt-0 pb_font-20">Open to All</h3>
                  <p>You don{'\''}t have to be computer sicence major; we invite everyone who is interested in technology!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

HomeAbout.propTypes = {

};

export default HomeAbout;
