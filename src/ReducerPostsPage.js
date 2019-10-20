let actionSetTextPost = {
    type: 'TEXT_POST',
    msg: ''
};

let actionAddPost = {
    type: 'ADD_POST'
};

let ReducerPostsPage = (state, action) => {

    switch (action.type) {
        case actionSetTextPost.type:
            return {
                ...state,
                postsPage: { ...state.postsPage, text: action.msg }
            };
        case actionAddPost.type:
            let msgPost = state.postsPage.text;
            return {
                ...state,
                postsPage: { ...state.postsPage, text: '', posts: [...state.postsPage.posts, { msg: msgPost}] }
            };
        default:
            return state;
    }
};
export default ReducerPostsPage;