import React, { Component } from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Hero extends Component {
  render() {
    return (
      <section class="hero">
        <div class="background-image" />
        <h1>Voong's Bakery Newlands</h1>
        <h3>Baked fresh for you, every day.</h3>
      </section>
    );
  }
}
