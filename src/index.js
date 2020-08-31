import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import manageUsers from './reducers/manageUsers'

import {createStore} from 'redux'
import {Provider} from 'react-redux'


const store = createStore


ReactDOM.render(
  // add imports and code
  <App />
  // add imports and code
  ,
  document.getElementById('root')
);
