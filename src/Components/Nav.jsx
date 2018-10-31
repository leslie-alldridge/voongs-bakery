import React, { Component } from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class MainNav extends Component {
  render() {
    return (
      <header>
        <h2 />
        <nav>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Food &amp; Drink</a>
          </li>
          <li>
            <a href="#">Prices</a>
          </li>
        </nav>
      </header>
    );
  }
}
