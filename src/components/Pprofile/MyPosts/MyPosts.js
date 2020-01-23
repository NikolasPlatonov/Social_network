import React from 'react';
import s from './MyPosts.module.css';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div>
        <div className={s.item}>Post 1</div>
        <div>Post 2</div>
        <div>Post 3</div>
        <div>Post 4</div>
        <div>Post 5</div>
        <div>Post 6</div>
      </div>
    </div>
  );
};

export default MyPosts;
