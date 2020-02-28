const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCriation = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
