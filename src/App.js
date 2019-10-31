import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import About from './About';
import Dog from "./Dog";
import Contact from "./Contact";
import "./App.css"


class App extends Component {
  render() {
    <div className='App'>
      <Route path="/dog" component={Dog} />
    </div>
  }
}
