import React, { Component } from 'react';
import './App.css';
import MainNav from './Components/Nav';
import Hero from './Components/Hero';
import About from './Components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNav />
        <Hero />
        <About />
      </div>
    );
  }
}

export default App;
