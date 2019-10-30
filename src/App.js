import React, { Component } from 'react';
import About from './About';
import Contact from './Contact';
import Dog from './Dog';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 'about' }
  }

  render() {
    return (
      <div className='App' >

      </div>
    );
  }
}

export default App;
