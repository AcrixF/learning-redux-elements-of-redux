import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from "redux";

import { createPost, editPost, setFilter } from "./actions";
import appReducer from "./reducers";


/*
const createPost = {type: CREATE_POST, user:'Neoa', text:'Redux Elements'}

console.log(createPost);

console.log(createPost('AcrixF', 'Still learning Redux.'));

const initialState = [];

const action = createPost('Neoa', 'New Post');

const newState = postsReducers(initialState, action);

console.log(newState)

const editAction = editPost(0, 'Post updated');

const newStateEdit = postsReducers(newState, editAction);

console.log(newStateEdit);
 */

/*   Combining Reducers

let state = appReducer(undefined, { type:'INIT_ACTION' });

console.log('Initial state', state);

state = appReducer(state, createPost('Neoa', 'Combine reducers'));

console.log('State after create Post:', state);

state = appReducer(state, editPost(0, 'Text edited - Combine reducers'));

console.log('State after edit a Post', state);

state = appReducer(state, setFilter('none'));

console.log('State after setting filter', state);

*/


/*
console.log(store.getState());

*/

let store = createStore(appReducer);

const root = document.getElementById('root');

const render = () => {
    root.innerHTML = '';

    const { posts } = store.getState();

    posts.forEach((post, index) => {
       const item = document.createElement('li');

       item.addEventListener('click', () => store.dispatch(editPost(index, post.text + '!')))

       const text = document.createTextNode(post.user + ' - ' + post.text);
       item.appendChild(text);
       root.appendChild(item);
    });
}

const unsubscribe = store.subscribe(() => {
    console.log('State changed:', store.getState())
});

const stopRender = store.subscribe(render);

store.dispatch(createPost('Neoa', 'Store Object State'));

store.dispatch(createPost('Neoa', 'Second change to State Object'));

store.dispatch(editPost(1, 'Edited - Second change to State Object'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
