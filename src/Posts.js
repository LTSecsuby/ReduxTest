import React from "react";

const Post = (props) => {
    return <div>{props.msg}</div>
};

const Posts = (props) => {

    let posts = props.state.posts.map( m => <Post msg={m.msg}/>);

  return(
      <div>
          {posts}
          <textarea value={props.state.text} onChange={props.onSetTextPost}></textarea>
          <button onClick={props.onAddPost}>PUSH</button>
  </div>
  );
};

export default Posts;