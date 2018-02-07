/**
*
* HomeOfficers
*
*/

import React from 'react';

import '!file-loader?name=[name].[ext]&outputPath=home/!../../images/home/board.jpg';
import '!file-loader?name=[name].[ext]&outputPath=home/!../../images/home/generic.png';

function HomeOfficers() {
  // Background-image should be around 1900x1200 ratio
  return (
    <section className="pb_section bg-light bg-image with-overlay" id="section-officers" style={{ backgroundImage: 'url(home/board.jpg)', backgroundSize: 'cover' }}>
      <div className="container-fluid">
        <div className="row justify-content-md-center text-center mb-5">
          <div className="col-lg-7">
            <h2 className="mt-0 heading-border-top light font-weight-normal text-white">DCSC Officers</h2>
            <p className="text-white">Our 2017-2018 Board</p>
          </div>
        </div>

        {/* TODO: load content from database */}
        <div className="row officers-list">
          <div className="col">
            <div className="card text-center pb_card_v1 mb-4">
              <img className="card-img-top rounded-circle w-50 mx-auto" src="home/generic.png" alt="Officer portrait" />
              <div className="card-body">
                <h4 className="card-title mt-0 mb-2">Sam Tsoi</h4>
                <h6 className="card-subtitle mb-2">President</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center pb_card_v1 mb-4">
              <img className="card-img-top rounded-circle w-50 mx-auto" src="home/generic.png" alt="Officer portrait" />
              <div className="card-body">
                <h4 className="card-title mt-0 mb-2">Andrew Cope</h4>
                <h6 className="card-subtitle mb-2">Vice President</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center pb_card_v1 mb-4">
              <img className="card-img-top rounded-circle w-50 mx-auto" src="home/generic.png" alt="Officer portrait" />
              <div className="card-body">
                <h4 className="card-title mt-0 mb-2">Bryan Ngo</h4>
                <h6 className="card-subtitle mb-2">Treasurer</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center pb_card_v1 mb-4">
              <img className="card-img-top rounded-circle w-50 mx-auto" src="home/generic.png" alt="Officer portrait" />
              <div className="card-body">
                <h4 className="card-title mt-0 mb-2">Nikita Andrikanis</h4>
                <h6 className="card-subtitle mb-2">Secretary</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="row officers-list">
          <div className="col">
            <div className="card text-center pb_card_v1 mb-4">
              <img className="card-img-top rounded-circle w-50 mx-auto" src="home/generic.png" alt="Officer portrait" />
              <div className="card-body">
                <h4 className="card-title mt-0 mb-2">Corey Mason</h4>
                <h6 className="card-subtitle mb-2">Director of Technology</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center pb_card_v1 mb-4">
              <img className="card-img-top rounded-circle w-50 mx-auto" src="home/generic.png" alt="Officer portrait" />
              <div className="card-body">
                <h4 className="card-title mt-0 mb-2">Prajakta Surve</h4>
                <h6 className="card-subtitle mb-2">Director of Design</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center pb_card_v1 mb-4">
              <img className="card-img-top rounded-circle w-50 mx-auto" src="home/generic.png" alt="Officer portrait" />
              <div className="card-body">
                <h4 className="card-title mt-0 mb-2">Peter Kim</h4>
                <h6 className="card-subtitle mb-2">Director of Public Relations</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center pb_card_v1 mb-4">
              <img className="card-img-top rounded-circle w-50 mx-auto" src="home/generic.png" alt="Officer portrait" />
              <div className="card-body">
                <h4 className="card-title mt-0 mb-2">Alisha Nanda</h4>
                <h6 className="card-subtitle mb-2">Pragmatic Programming Chair</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center pb_card_v1 mb-4">
              <img className="card-img-top rounded-circle w-50 mx-auto" src="home/generic.png" alt="Officer portrait" />
              <div className="card-body">
                <h4 className="card-title mt-0 mb-2">Jeffrey Warner</h4>
                <h6 className="card-subtitle mb-2">Professional Development Chair</h6>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

HomeOfficers.propTypes = {

};

export default HomeOfficers;
