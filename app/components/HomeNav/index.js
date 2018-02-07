/**
*
* HomeNav
*
*/

import React from 'react';
import { Collapse } from 'reactstrap';
import Scrollspy from 'react-scrollspy';
import smoothScroll from 'smoothscroll';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';

const scrollSpySettings = {
  items: ['section-home', 'section-about', 'section-membership', 'section-upcoming-events', 'section-officers', 'section-contact', 'section-members'],
  currentClassName: 'active',
  offset: -200,
};

class HomeNav extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
      scrollClass: '',
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const scrollY = window.scrollY;
    const oldScrollClass = this.state.scrollClass;
    let newScrollClass = '';

    if (scrollY >= 150) {
      newScrollClass += ' scrolled';
      if (scrollY >= 350) {
        newScrollClass += ' awake';
      } else if (oldScrollClass.includes('awake') || oldScrollClass.includes('sleep')) {
        newScrollClass += ' sleep';
      }
    }

    this.setState({
      scrollClass: newScrollClass,
    });
  }

  handleScrollClick(event, scrollId) {
    const scrollElement = document.querySelector(scrollId);
    smoothScroll(scrollElement);
    event.preventDefault();
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <nav className={`navbar navbar-expand-lg navbar-dark pb_navbar pb_scrolled-light ${this.state.scrollClass}`} id="pb-navbar">
        <div className="container">
          <a className="navbar-brand" href="/">DCSC</a>
          <button onClick={this.toggleNavbar} className="navbar-toggler" type="button" aria-controls="boot-navbar" aria-expanded={this.state.collapsed ? 'false' : 'true'} aria-label="Toggle navigation">
            <span><FontAwesomeIcon icon={faBars} /></span>
          </button>
          <Collapse isOpen={!this.state.collapsed} navbar id="boot-navbar">
            <Scrollspy {...scrollSpySettings} className="navbar-nav ml-auto">
              <li className="nav-item"><a className="nav-link" onClick={(event) => this.handleScrollClick(event, '#section-home')} href="#section-home">Home</a></li>
              <li className="nav-item"><a className="nav-link" onClick={(event) => this.handleScrollClick(event, '#section-about')} href="#section-about">About</a></li>
              <li className="nav-item"><a className="nav-link" onClick={(event) => this.handleScrollClick(event, '#section-membership')} href="#section-membership">Membership</a></li>
              <li className="nav-item"><a className="nav-link" onClick={(event) => this.handleScrollClick(event, '#section-upcoming-events')} href="#section-upcoming-events">Upcoming Events</a></li>
              <li className="nav-item"><a className="nav-link" onClick={(event) => this.handleScrollClick(event, '#section-officers')} href="#section-officers">Officers</a></li>
              <li className="nav-item"><a className="nav-link" onClick={(event) => this.handleScrollClick(event, '#section-contact')} href="#section-contact">Contact Us</a></li>
              <li className="nav-item"><a className="nav-link" onClick={(event) => this.handleScrollClick(event, '#section-members')} href="#section-members">Members</a></li>
            </Scrollspy>
          </Collapse>
        </div>
      </nav>
    );
  }
}

HomeNav.propTypes = {

};

export default HomeNav;
