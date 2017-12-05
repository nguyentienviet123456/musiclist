import React from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  render() {
    return (
      <header classsName="wrapper">
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggleNavbar} />
          <NavbarBrand tag={Link} to="/">MusicList</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar />
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="accout/login">Login</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </header>
    );
  }
}
