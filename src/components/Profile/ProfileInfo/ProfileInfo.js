import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          alt="big_logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH5y3Hh2zYe-5EsxLq0yGIL9UCH5Wfhrz4tLtNgqctoD9veaoZXw&s"
        />
      </div>
      <div className={s.description}>
        <div>Ava + Description</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
