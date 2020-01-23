import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          alt="big_logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH5y3Hh2zYe-5EsxLq0yGIL9UCH5Wfhrz4tLtNgqctoD9veaoZXw&s"
        />
      </div>
      <div>ava + description</div>
      <div>
        <MyPosts />
      </div>
    </div>
  );
};

export default Profile;
