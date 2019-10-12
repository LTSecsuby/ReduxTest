import React from 'react';
import Posts from "./Posts";
import './App.css';

let actionTextPost = {
  type: 'TEXT_POST',
  msg: ''
};

let actionAddPost = {
  type: 'ADD_POST'
};

function App(props) {

  function onSetTextPost(e) {
    actionTextPost.msg = e.target.value;
    props.store.dispatch(actionTextPost);
  }

  function onAddPost() {
    props.store.dispatch(actionAddPost)
  }

  return (
    <div className="App">
        <Posts state={props.state} onSetTextPost={onSetTextPost} onAddPost={onAddPost}/>
    </div>
  );
}

export default App;
