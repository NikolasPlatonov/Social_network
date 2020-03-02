import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from './../../assets/images/photo_user.png';

const Users = props => {
  if (props.users.length === 0) {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then(responce => {
        props.setUsers(responce.data.items);
      });
  }

  return (
    <div>
      {props.users.map(u => {
        return (
          <div className={s.userItem}>
            <span key={u.id}>
              <img
                alt="user_photo"
                src={u.photos.small != null ? u.photos.small : userPhoto}
              />
              {u.name}
              <div>
                {'u.status'}
                {'u.location.country'}
                {'u.location.city'}
              </div>
            </span>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  UNFOLLOW
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  FOLLOW
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
