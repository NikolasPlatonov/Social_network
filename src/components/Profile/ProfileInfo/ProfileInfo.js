import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../../common/preloader/Preloader';
// import profile_background from './../../../assets/images/profile_background.jpg';

const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={s.content}>
      {/* <div>
        <img alt="big_logo" src={profile_background} />
      </div> */}
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
