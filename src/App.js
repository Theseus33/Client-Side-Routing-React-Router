import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Dog from "./Dog";
import Contact from "./Contact";
import "./App.css"

const Hater = () => <h1>I ABSOLUTELY HATE DOGS!</h1>

class App extends Component {
  render() {
    return (
      <div className='App'>
        <nav className='App-nav'>
          <a href="/dog">Dog</a>
          <a href="/contact">Contact</a>
          <a href="/">Aout</a>
        </nav>
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/dog" component={Dog} />
          <Route path="/dog/hater" component={Hater} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    )
  }
}

export default App;