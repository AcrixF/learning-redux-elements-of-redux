import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createPost } from "./actionTypes";
import {postsReducers} from "./reducers";


/*
const createPost = {type: CREATE_POST, user:'Neoa', text:'Redux Elements'}
console.log(createPost);
*/

//console.log(createPost('AcrixF', 'Still learning Redux.'));

const initialState = [];

const action = createPost('Neoa', 'New Post');

const newState = postsReducers(initialState, action);

console.log(newState)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
