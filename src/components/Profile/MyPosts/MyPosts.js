import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import InputElement from '../../InputElement/InputElement';

const MyPosts = props => {
  let postsElements = props.posts.map(p => (
    <Post id={p.id} message={p.message} likesCount={p.likesCount} key={p.id} />
  ));

  return (
    <div className={s.posts}>
      <div className={s.title}>
        <h2>My posts</h2>
      </div>
      <div>
        <InputElement
          addPost={props.addPost}
          newPostText={props.newPostText}
          updateNewPostText={props.updateNewPostText}
        />
      </div>
      <div className={s.posts}> {postsElements} </div>
    </div>
  );
};

export default MyPosts;
