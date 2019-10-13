import Posts from "./Posts";
import './App.css';
import {connect} from "react-redux";

let actionTextPost = {
    type: 'TEXT_POST',
    msg: ''
};

let actionAddPost = {
    type: 'ADD_POST'
};


let mapStateToProps = (state) => {
    return {
        state: state
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onSetTextPost: (e) => {
            actionTextPost.msg = e.target.value;
            dispatch(actionTextPost);
        },
        onAddPost: () => {
            dispatch(actionAddPost)
        }
    }

};

const App = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default App;
