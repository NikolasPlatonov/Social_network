import React from 'react';
import s from './Post.module.css';

const Post = props => {
  return (
    <div className={s.container}>
      <div className={s.info}>
        <img
          alt="avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy8Dzr5ful4rdu5spG9XbBsoTgEAZ7ECy-tfCZmPtGR2Fw4BrF&s"
        />
        Likes:
        {props.likesCount}
      </div>
      <div className={s.message}>{props.message}</div>
    </div>
  );
};

export default Post;
