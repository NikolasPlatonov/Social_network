import React from 'react';
import s from './Users.module.css';
import userPhoto from './../../assets/images/photo_user.png';

let Users = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map(p => {
          return (
            <span
              onClick={() => {
                props.onPageChanged(p);
              }}
              key={p.id}
              className={
                props.currentPage === p ? s.selectedPage : s.notSelectedPage
              }
            >
              {p}
            </span>
          );
        })}
      </div>
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
