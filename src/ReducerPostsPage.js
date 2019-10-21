let actionSetTextPost = {
    type: 'TEXT_POST',
    msg: ''
};

let actionAddPost = {
    type: 'ADD_POST'
};

let initialState = {
    postsPage: {
        text: '',
        posts: [],
        idPostCurrent: 0
    }
};

let ReducerPostsPage = (state = initialState, action) => {

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
                postsPage: { ...state.postsPage,
                    text: '',
                    idPostCurrent: state.postsPage.idPostCurrent + 1,
                    posts: [...state.postsPage.posts, { id: state.postsPage.idPostCurrent, msg: msgPost}] }
            };
        default:
            return state;
    }
};
export default ReducerPostsPage;