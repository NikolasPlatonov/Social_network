import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = props => {
  let postsElements = props.posts.map(p => (
    <Post
      id={p.id}
      avatar={p.avatar}
      message={p.message}
      likesCount={p.likesCount}
      key={p.id}
    />
  ));

  return (
    <div className={s.posts}>
      <h2>My posts</h2>

      <div>
        <div>
          <textarea></textarea>
        </div>
        <div className={s.postsAddBtn}>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}> {postsElements} </div>
    </div>
  );
};

export default MyPosts;
