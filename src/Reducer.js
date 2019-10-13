let actionTextPost = {
    type: 'TEXT_POST',
    msg: ''
};

let actionAddPost = {
    type: 'ADD_POST'
};

export const Reducer = (state, action) => {
    let newState = {...state};

    switch (action.type) {
        case actionAddPost.type:
            newState.posts = [...state.posts];
            newState.posts.push({msg: state.text});
            newState.text = '';
            return newState;
        case actionTextPost.type:
            newState.text = action.msg;
            return newState;
        default:
            return state;
    }
};