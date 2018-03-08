/**
 *
 * HomeNav
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
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
              <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="/">About</a></li>
              <li className="nav-item"><a className="nav-link" href="/">Membership</a></li>
              <li className="nav-item"><a className="nav-link" href="/">Upcoming Events</a></li>
              <li className="nav-item"><a className="nav-link" href="/">Officers</a></li>
              <li className="nav-item"><a className="nav-link" href="/">Contact Us</a></li>
              <li className="nav-item"><a className="nav-link" href="/">Members</a></li>
              <li className="nav-item"><a className="nav-link" href="/apparel">Apparel</a></li>
              <li className="nav-item"><a className="nav-link" onClick={this.props.showLogin} href="#login">Login</a></li>
            </Scrollspy>
          </Collapse>
        </div>
      </nav>
    );
  }
}

HomeNav.propTypes = {
  showLogin: PropTypes.func.isRequired,
};

export default HomeNav;
