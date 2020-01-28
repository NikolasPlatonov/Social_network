import React from 'react';
import s from './Post.module.css';

const Post = props => {
  return (
    <div className={s.item}>
      <img
        alt="avatar"
        src="data:image/jpeg;base64,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"
      />
      {props.message}
      <div>
        <span>Likes:</span>
        {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
