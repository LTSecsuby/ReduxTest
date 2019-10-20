import React from 'react';

const Post = (props) => {

    let posts = props.postsPage.posts.map(m => <div>{m.msg}</div>
    );

    return (
        <div>
            {posts}
            <textarea value={props.postsPage.text} onChange={props.onSetPostText}></textarea>
            <button onClick={props.onAddPost}>Push post</button>
        </div>
    )
};
export default Post;
