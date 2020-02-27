import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = props => {
  let postsElements = props.posts.map(p => (
    <Post id={p.id} message={p.message} likesCount={p.likesCount} key={p.id} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.posts}>
      <div className={s.title}>
        <h2>My posts</h2>
      </div>
      <div className={s.inputArea}>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
        <div>
          <button onClick={onAddPost}>ADD POST</button>
        </div>
      </div>
      <div className={s.posts}> {postsElements} </div>
    </div>
  );
};

export default MyPosts;
