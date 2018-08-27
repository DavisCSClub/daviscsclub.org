/**
*
* HomeEvents
*
*/

import React from 'react';
import Slider from 'react-slick';
import Head from 'next/head';

import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

const sliderSettings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 2000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  arrows: true,
  draggable: false,
  adaptiveHeight: true,
};

function HomeEvents() {
  return (
    <section className="pb_section pb_bg-half" id="section-upcoming-events">
      <Head>
        {/* Modified slick css */}
        <link href="static/slick/slick.css" rel="stylesheet" type="text/css" />
        <link href="static/slick/slick-theme.css" rel="stylesheet" type="text/css" />
      </Head>
      <div className="container">
        <div className="row justify-content-md-center text-center mb-5">
          <div className="col-lg-7">
            <h2 className="mt-0 heading-border-top">Upcoming Events</h2>
            <p>We host events every week! Check out some of our upcoming events below.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <Slider className="pb_slide_v2" {...sliderSettings}>

              {/* TODO: load content from facebook */}
              <div>
                <div className="d-lg-flex d-md-block slide_content">
                  <div className="vertical-center pb_content-media">
                    <img className="img-fluid" src="static/images/event.jpg" alt="Facebook event" />
                  </div>
                  <div className="slide_content-text">
                    <h3 className="font-weight-normal mt-0 mb-4">Coding Conundrum</h3>
                    <p>DCSC will be holding {'"'}Coding Conundrum{'"'} this Thursday (1/25/18) from 7 PM - 8 PM in Kemper 1131. At this event, participants will be given a pre-made, sample game that can be tweaked or altered into a unique program -- be it changing the design or adding different levels.</p>
                    <p>You{'\''}ll be challenged to think outside the box, but also be given the oppurtunity to practice technical skills for debugging, adding new functions, or simply, make your ideas work into code.</p>
                    <p>At the end of the event, each altered program will be judged, and the participant who{'\''}s program is deemed best will receive a prize!</p>
                    <p>**Students of any skill level is encouraged to come out to our event!**</p>
                  </div>
                </div>
              </div>

            </Slider>
          </div>
        </div>
      </div>
    </section>

  );
}

HomeEvents.propTypes = {

};

export default HomeEvents;
