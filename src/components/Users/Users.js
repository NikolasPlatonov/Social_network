import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from './../../assets/images/photo_user.png';

class UsersC extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(responce => {
        this.props.setUsers(responce.data.items);
        this.props.setTotalUsersCount(responce.data.totalCount);
      });
  }

  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then(responce => {
        this.props.setUsers(responce.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

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
                  this.onPageChanged(p);
                }}
                key={p.id}
                className={
                  this.props.currentPage === p
                    ? s.selectedPage
                    : s.notSelectedPage
                }
              >
                {p}
              </span>
            );
          })}
        </div>
        {this.props.users.map(u => {
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
                      this.props.unfollow(u.id);
                    }}
                  >
                    UNFOLLOW
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
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
  }
}

export default UsersC;
