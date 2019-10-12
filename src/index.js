import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import {Reducer} from "./Reducer";

let initialState = {
  text: '',
  posts: []
};

let store = createStore(Reducer, initialState);

function RenderApp(state) {
    ReactDOM.render(<App store={store} state={state}/>, document.getElementById('root'));
}

RenderApp(store.getState());

store.subscribe(() =>{
   let state = store.getState();
   RenderApp(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
