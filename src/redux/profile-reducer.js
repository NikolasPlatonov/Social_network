const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
  posts: [
    {
      id: 1,
      message: 'Hello, dude!',
      likesCount: 15,
    },
    {
      id: 2,
      message: 'Go to the ride today?',
      likesCount: 10,
    },
    {
      id: 3,
      message: 'Duuuuud! Whats up? )))))))',
      likesCount: 13,
    },
  ],
  newPostText: '',
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state, //create copy state for changes
        newPostText: action.newText,
      };

    case ADD_POST:
      return {
        ...state,
        newPostText: '',
        posts: [
          ...state.posts,
          {
            id: 10,
            message: state.newPostText,
            likesCount: 0,
          },
        ],
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });

export default profileReducer;
