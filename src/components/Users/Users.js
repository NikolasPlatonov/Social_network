import React from 'react';
import s from './Users.module.css';

const Users = props => {
  console.log('props', props);
  return (
    <div>
      {props.users.map(u => {
        return (
          <div className={s.userItem}>
            <div key={u.id}>
              <img alt="user_photo" src={u.photoUrl} />
            </div>
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
