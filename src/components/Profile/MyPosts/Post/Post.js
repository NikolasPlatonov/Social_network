import React from 'react';
import s from './Post.module.css';

const Post = props => {
  console.log('POST: props', props);
  return (
    <div className={s.item}>
      <img alt="avatar" src={props.avatar} />
      {props.message}
      <div>
        <span>Likes:</span>
        {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
