import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

import {
  addPostActionCreator,
  updateNewPostTextActionCriation,
} from './../../../redux/state';

const MyPosts = props => {
  let postsElements = props.posts.map(p => (
    <Post id={p.id} message={p.message} likesCount={p.likesCount} key={p.id} />
  ));

  let newPostElement = React.createRef();
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCriation(text));
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
          <button onClick={addPost}>ADD POST</button>
        </div>
      </div>
      <div className={s.posts}> {postsElements} </div>
    </div>
  );
};

export default MyPosts;
