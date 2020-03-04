const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE-IS-FETCHING';

let initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
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
      return { ...state, users: [...action.users] };

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };

    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalCount };

    case TOOGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };

    default:
      return state;
  }
};

export const setUsersActionCreator = users => ({ type: SET_USERS, users });
export const followActionCreator = userId => ({ type: FOLLOW, userId });
export const unFollowActionCreator = userId => ({ type: UNFOLLOW, userId });
export const setCurrentPageActionCreator = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCountActionCreator = totalCount => ({
  type: SET_TOTAL_USERS_COUNT,
  totalCount,
});
export const toogleIsFetchingActionCreator = isFetching => ({
  type: TOOGLE_IS_FETCHING,
  isFetching,
});

export default usersReducer;
