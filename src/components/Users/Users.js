import React from 'react';
import s from './Users.module.css';

const Users = props => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe0v9jLAkJimIHE-IPGIY0W-i1o1XIEVB3ZatRTUc5rqQks7GS&s',
        followed: false,
        firstName: 'Dmitry',
        status: 'I am a boss))',
        location: { country: 'Ukraine', city: 'Dnepr' },
      },
      {
        id: 2,
        photoUrl:
          'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png',
        followed: true,
        firstName: 'Nick',
        status: 'Bla-bla))',
        location: { country: 'Russia', city: 'Omsk' },
      },
      {
        id: 3,
        photoUrl:
          'https://cdn.iconscout.com/icon/free/png-256/avatar-367-456319.png',
        followed: true,
        firstName: 'Den',
        status: 'How are you?',
        location: { country: 'Germany', city: 'Berlin' },
      },
      {
        id: 4,
        photoUrl:
          'http://icons.iconarchive.com/icons/aha-soft/free-large-boss/128/Admin-icon.png',
        followed: false,
        firstName: 'Boby',
        status: 'Qwertyuiop?',
        location: { country: 'Dfgyrgh', city: 'Fwerthejf' },
      },
    ]);
  }

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
