const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SER-USERS';

let initialState = {
  users: [
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
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };

    default:
      return state;
  }
};

export const setUsersActionCreator = users => ({ type: SET_USERS, users });
export const followActionCreator = userId => ({ type: FOLLOW, userId });
export const unFollowActionCreator = userId => ({ type: UNFOLLOW, userId });

export default usersReducer;
