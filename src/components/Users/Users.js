import React from 'react';
import s from './Users.module.css';
import userPhoto from './../../assets/images/photo_user.png';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/api';

let Users = props => {
  console.log('props', props);
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
              key={p.id}
              onClick={() => {
                props.onPageChanged(p);
              }}
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
          <div className={s.userItem} key={u.id}>
            <span>
              <NavLink to={'/profile/' + u.id}>
                <img
                  alt="user_photo"
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                />
              </NavLink>

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
                    usersAPI.unFollowUser(u.id).then(responce => {
                      if (responce.resultCode === 0) {
                        props.unfollow(u.id);
                      }
                    });
                  }}
                >
                  UNFOLLOW
                </button>
              ) : (
                <button
                  onClick={() => {
                    usersAPI.followUser(u.id).then(responce => {
                      if (responce.resultCode === 0) {
                        props.follow(u.id);
                      }
                    });
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
