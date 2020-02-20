const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
  _state: {
    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: 'Bob',
          avatar:
            'http://icons.iconarchive.com/icons/icons-land/vista-people/128/Office-Customer-Male-Light-icon.png',
        },
        {
          id: 2,
          name: 'Nick',
          avatar:
            'http://icons.iconarchive.com/icons/aha-soft/free-large-boss/128/Admin-icon.png',
        },
        {
          id: 3,
          name: 'Sher',
          avatar:
            'http://icons.iconarchive.com/icons/dapino/teenage-girl/128/girl-swear-icon.png',
        },
        {
          id: 4,
          name: 'Edik',
          avatar:
            'http://icons.iconarchive.com/icons/icons-land/medical/128/People-Doctor-Male-icon.png',
        },
        {
          id: 5,
          name: 'Robby',
          avatar:
            'http://icons.iconarchive.com/icons/icons-land/vista-people/128/Office-Customer-Female-Light-icon.png',
        },
        {
          id: 6,
          name: 'Jack',
          avatar:
            'http://icons.iconarchive.com/icons/martin-berube/character/128/Man-icon.png',
        },
      ],
      messages: [
        { id: 1, message: 'Hi, how are you?' },
        { id: 2, message: 'Did you hear new treks JZ?' },
        { id: 3, message: 'Duuuuud! Whats up? )))))))' },
        { id: 4, message: 'How is your training going?' },
        {
          id: 5,
          message: 'Come to my page in FB ;-)',
        },
        { id: 6, message: 'Сool page, Bro! ))' },
      ],
    },
    profilePage: {
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
    },
    sitebar: {
      friends: [
        {
          id: 1,
          name: 'Bill',
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe0v9jLAkJimIHE-IPGIY0W-i1o1XIEVB3ZatRTUc5rqQks7GS&s',
        },
        {
          id: 2,
          name: 'Ted',
          avatar:
            'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png',
        },
        {
          id: 3,
          name: 'Ken',
          avatar:
            'https://cdn.iconscout.com/icon/free/png-256/avatar-367-456319.png',
        },
      ],
    },
  },

  _callSubscriber() {
    console.log('State changed!!!');
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 10,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCriation = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default store;
window.store = store;
