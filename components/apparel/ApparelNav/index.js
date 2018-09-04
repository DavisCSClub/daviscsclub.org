/**
 *
 * ApparelNav
 *
 */

import React from 'react';
import { Collapse } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';

class ApparelNav extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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

  toggleNavbar() {
    this.setState((prevState) => ({ collapsed: !prevState.collapsed }));
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
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
              <li className="nav-item active"><a className="nav-link" href="/apparel">Apparel</a></li>
            </ul>
          </Collapse>
        </div>
      </nav>
    );
  }
}

ApparelNav.propTypes = {

};

export default ApparelNav;
