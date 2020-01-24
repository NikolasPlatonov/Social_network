import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message="Hello, dude!" likesCount="15" />
        <Post message="Howe are you?" likesCount="20" />
        <Post message="Go to the ride today?" likesCount="8" />
        <Post message="Cool post, man!" likesCount="30" />
      </div>
    </div>
  );
};

export default MyPosts;
