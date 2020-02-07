import { rerenderEntireTree } from '../render';

let state = {
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
      {
        id: 4,
        message: 'Cool post, man!',
        likesCount: 20,
      },
      {
        id: 5,
        message: 'Come to my page in FB, pls! ',
        likesCount: 17,
      },
      {
        id: 6,
        message: 'There are many interesting ;-)',
        likesCount: 7,
      },
    ],
    newPostText: 'qwerty',
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
};

export let addPost = postMessage => {
  let newPost = {
    id: 10,
    message: postMessage,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export let updateNewPostText = newText => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;
