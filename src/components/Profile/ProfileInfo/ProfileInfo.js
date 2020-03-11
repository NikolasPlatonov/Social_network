import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../../common/preloader/Preloader';

const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={s.content}>
      <div className={s.propfile_info}>
        <div className={s.description}>
          <img alt="ava" src={props.profile.photos.large} />
          <div className={s.description_info}>
            <div className={s.name_text}> {props.profile.fullName}</div>
            <div className={s.jobdes_text}>
              {props.profile.lookingForAJobDescription}
            </div>
            <div className={s.about_text}>{props.profile.abouteMe}</div>
            <div className={s.job_text}>{props.profile.lookingForAJob}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
