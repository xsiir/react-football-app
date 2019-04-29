import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Router} from './Router'; 
import { BrowserRouter } from "react-router-dom"
import * as serviceWorker from './serviceWorker';

const routing = (
    <BrowserRouter basename="/">
        <Router/>
    </BrowserRouter>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
