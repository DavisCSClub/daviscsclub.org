/**
*
* HomeOfficers
*
*/

import React from 'react';

function HomeOfficers() {
  // Background-image should be around 1900x1200 ratio
  return (
    <section className="pb_section bg-light bg-image with-overlay" id="section-officers" style={{ backgroundImage: 'url(static/images/board.jpg)', backgroundSize: 'cover' }}>
      <div className="container-fluid">
        <div className="row justify-content-md-center text-center mb-5">
          <div className="col-lg-7">
            <h2 className="mt-0 heading-border-top light font-weight-normal text-white">Meet the Team</h2>
            <p className="text-white">Our 2018-2019 Board</p>
          </div>
        </div>

        {/* TODO: load content from database */}
        <div className="row officers-list">
          <div className="col">
            <div className="card text-center pb_card_v1 mb-4">
              <img className="card-img-top rounded-circle w-50 mx-auto" src="static/images/generic.png" alt="Officer portrait" />
              <div className="card-body">
                <h4 className="card-title mt-0 mb-2">Bryan Ngo</h4>
                <h6 className="card-subtitle mb-2">President</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center pb_card_v1 mb-4">
              <img className="card-img-top rounded-circle w-50 mx-auto" src="static/images/generic.png" alt="Officer portrait" />
              <div className="card-body">
                <h4 className="card-title mt-0 mb-2">Jason Lee</h4>
                <h6 className="card-subtitle mb-2">Vice President</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center pb_card_v1 mb-4">
              <img className="card-img-top rounded-circle w-50 mx-auto" src="static/images/generic.png" alt="Officer portrait" />
              <div className="card-body">
                <h4 className="card-title mt-0 mb-2">Shivani Bhushan</h4>
                <h6 className="card-subtitle mb-2">Treasurer</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center pb_card_v1 mb-4">
              <img className="card-img-top rounded-circle w-50 mx-auto" src="static/images/generic.png" alt="Officer portrait" />
              <div className="card-body">
                <h4 className="card-title mt-0 mb-2">Ynna Lecitona</h4>
                <h6 className="card-subtitle mb-2">Secretary</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="row officers-list">
          <div className="col">
            <div className="card text-center pb_card_v1 mb-4">
              <img className="card-img-top rounded-circle w-50 mx-auto" src="static/images/generic.png" alt="Officer portrait" />
              <div className="card-body">
                <h4 className="card-title mt-0 mb-2">Shivam Desai</h4>
                <h6 className="card-subtitle mb-2">Co-Director of Technology</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center pb_card_v1 mb-4">
              <img className="card-img-top rounded-circle w-50 mx-auto" src="static/images/generic.png" alt="Officer portrait" />
              <div className="card-body">
                <h4 className="card-title mt-0 mb-2">Peter Kim</h4>
                <h6 className="card-subtitle mb-2">Co-Director of Technology</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center pb_card_v1 mb-4">
              <img className="card-img-top rounded-circle w-50 mx-auto" src="static/images/generic.png" alt="Officer portrait" />
              <div className="card-body">
                <h4 className="card-title mt-0 mb-2">Allison Tearjen</h4>
                <h6 className="card-subtitle mb-2">External Outreach Chair</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center pb_card_v1 mb-4">
              <img className="card-img-top rounded-circle w-50 mx-auto" src="static/images/generic.png" alt="Officer portrait" />
              <div className="card-body">
                <h4 className="card-title mt-0 mb-2">Sethmi (Mia) Dharmasiri</h4>
                <h6 className="card-subtitle mb-2">Events Chair</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center pb_card_v1 mb-4">
              <img className="card-img-top rounded-circle w-50 mx-auto" src="static/images/generic.png" alt="Officer portrait" />
              <div className="card-body">
                <h4 className="card-title mt-0 mb-2">Julie Deng</h4>
                <h6 className="card-subtitle mb-2">Public Relations/Design Chair</h6>
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
