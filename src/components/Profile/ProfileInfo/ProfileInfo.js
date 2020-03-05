import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../../common/preloader/Preloader';

const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={s.content}>
      <div>
        <img
          alt="big_logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH5y3Hh2zYe-5EsxLq0yGIL9UCH5Wfhrz4tLtNgqctoD9veaoZXw&s"
        />
      </div>
      <div className={s.description}>
        <img alt="ava" src={props.profile.photos.large} />
        <div>{props.profile.abouteMe}</div>
        <div> {props.profile.fullName}</div>
        <div>{props.profile.lookingForAJob}</div>
        <div>{props.profile.lookingForAJobDescription}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
