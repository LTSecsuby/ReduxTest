import './App.css';
import {connect} from "react-redux";
import Post from "./Post";

let actionSetTextPost = {
  type: 'TEXT_POST',
  msg: ''
};

let actionAddPost = {
  type: 'ADD_POST'
};


let mapStateToProps = (state) => {
  return {
      postsPage: state.postsPage
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    onSetPostText: (e) => {
      actionSetTextPost.msg = e.target.value;
      dispatch(actionSetTextPost);
    },
    onAddPost: () => {
      dispatch(actionAddPost);
    }
  }
};

const App = connect(mapStateToProps, mapDispatchToProps)(Post);

export default App;
