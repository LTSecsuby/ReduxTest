let actionTextPost = {
    type: 'TEXT_POST',
    msg: ''
};

let actionAddPost = {
    type: 'ADD_POST'
};

export const Reducer = (state, action) => {

    switch (action.type) {
        case actionAddPost.type:
            console.log("sds");
            state.posts.push({msg: state.text});
            return state;
        case actionTextPost.type:
            state.text = action.msg;
            return state;
        default:
            return state;
    }
};