import React, { Component } from 'react';
import reactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

reactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
  document.getElementById("root")
);

serviceWorker.unregister();