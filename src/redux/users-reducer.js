const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SER-USERS';

let initialState = {
  users: [
    {
      id: 1,
      followed: false,
      firstName: 'Dmitry',
      status: 'I am a boss))',
      location: { country: 'Ukraine', city: 'Dnepr' },
    },
    {
      id: 2,
      followed: true,
      firstName: 'Nick',
      status: 'Bla-bla))',
      location: { country: 'Russia', city: 'Omsk' },
    },
    {
      id: 3,
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
