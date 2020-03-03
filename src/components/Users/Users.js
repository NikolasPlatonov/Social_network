import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from './../../assets/images/photo_user.png';

class UsersC extends React.Component {
  getUsers = () => {
    if (this.props.users.length === 0) {
      axios
        .get('https://social-network.samuraijs.com/api/1.0/users')
        .then(responce => {
          this.props.setUsers(responce.data.items);
        });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.getUsers}>GET USERS!!!</button>
        <div>
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
      </div>
    );
  }
}

export default UsersC;
