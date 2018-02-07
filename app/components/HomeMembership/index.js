/**
*
* HomeMembership
*
*/

import React from 'react';
import { Collapse } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';
import faMinus from '@fortawesome/fontawesome-free-solid/faMinus';


import '!file-loader?name=[name].[ext]&outputPath=home/!../../images/home/member1.jpg';
import '!file-loader?name=[name].[ext]&outputPath=home/!../../images/home/member2.jpg';

class HomeMembership extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { accordionVisible: 'attend' };
  }

  toggleSelect(tab) {
    if (this.state.accordionVisible === tab) {
      this.setState({ accordionVisible: 'none' });
    } else {
      this.setState({ accordionVisible: tab });
    }
  }

  isVisible(tab) {
    return this.state.accordionVisible === tab;
  }


  render() {
    return (
      <section className="pb_section" data-section="membership" id="section-membership">
        <div className="container">
          <div className="row justify-content-md-center text-center mb-5">
            <div className="col-lg-7">
              <h2 className="mt-0 heading-border-top">Membership</h2>
              <p>Becoming a DCSC member is by no means required but helps support the clubs and gives you some cool perks like being listed further down on this page. To officially join, you simply need to pay $5 and attend at least 3 events; membership is on a per quarter basis.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <div className="images right">
                {/* 600x450 ratio or so */}
                <img className="img1 img-fluid" src="home/member1.jpg" alt="" />
                {/* 800x500 ratio or so */}
                <img className="img2 img-fluid" src="home/member2.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-5 pl-md-5 pl-sm-0">
              <div className="pb_accordion">
                <div className="item">
                  <button onClick={() => this.toggleSelect('attend')} aria-expanded={this.isVisible('attend') ? 'true' : 'false'} aria-controls="attendAccordion" className="pb_font-18 btn btn-link anchor-button">
                    Can I attend events without becoming a member?
                    <FontAwesomeIcon icon={this.isVisible('attend') ? faMinus : faPlus} />
                  </button>
                  <Collapse isOpen={this.isVisible('attend')} id="attendAccordion" role="tabpanel">
                    <p><b>Yes!</b> Our events are always open to everyone regardless of membership status.</p>
                  </Collapse>
                </div>
                <div className="item">
                  <button onClick={() => this.toggleSelect('pay')} aria-expanded={this.isVisible('pay') ? 'true' : 'false'} aria-controls="payAccordion" className="pb_font-18 btn btn-link anchor-button">
                    Who/Where do I pay?
                    <FontAwesomeIcon icon={this.isVisible('pay') ? faMinus : faPlus} />
                  </button>
                  <Collapse isOpen={this.isVisible('pay')} id="payAccordion" role="tabpanel">
                    <p>Dues must be must be paid <b>in-person</b> during any of our weekly events.</p>
                  </Collapse>
                </div>
                <div className="item">
                  <button onClick={() => this.toggleSelect('financial')} aria-expanded={this.isVisible('financial') ? 'true' : 'false'} aria-controls="financialAccordion" className="pb_font-18 btn btn-link anchor-button">
                    I{'\''}m concerned about paying
                    <FontAwesomeIcon icon={this.isVisible('financial') ? faMinus : faPlus} />
                  </button>
                  <Collapse isOpen={this.isVisible('financial')} id="financialAccordion" role="tabpanel">
                    <p>Anyone, regardless of official membership, can attend our events.</p>
                    <p>If you have any financial burden, or feel like you cannot pay the due, please privately message Davis Computer Science Club on Facebook or come talk to us in-person!</p>
                  </Collapse>
                </div>
                <div className="item">
                  <button onClick={() => this.toggleSelect('benfit')} aria-expanded={this.isVisible('benfit') ? 'true' : 'false'} aria-controls="benfitAccordion" className="pb_font-18 btn btn-link anchor-button">
                    What do I get as a member?
                    <FontAwesomeIcon icon={this.isVisible('benfit') ? faMinus : faPlus} />
                  </button>
                  <Collapse isOpen={this.isVisible('benfit')} id="benfitAccordion" role="tabpanel">
                    <p>Members help support the club but more importantly, you get to be included further down on this page (optional) with links to your website/LinkedIn/etc. Additional perks include stickers and more are coming soon!</p>
                  </Collapse>
                </div>
                <div className="item">
                  <button onClick={() => this.toggleSelect('events')} aria-expanded={this.isVisible('events') ? 'true' : 'false'} aria-controls="eventsAccordion" className="pb_font-18 btn btn-link anchor-button">
                    What events count?
                    <FontAwesomeIcon icon={this.isVisible('events') ? faMinus : faPlus} />
                  </button>
                  <Collapse isOpen={this.isVisible('events')} id="eventsAccordion" role="tabpanel">
                    <p>All DCSC events count! Please note that this <b>excludes</b> review sessions and any other sub-clubs.</p>
                  </Collapse>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

HomeMembership.propTypes = {

};

export default HomeMembership;
