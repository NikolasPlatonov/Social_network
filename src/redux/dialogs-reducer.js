const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
  ],
  messages: [
    { id: 1, message: 'Hi, how are you?' },
    { id: 2, message: 'Did you hear new treks JZ?' },
    { id: 3, message: 'Duuuuud! Whats up? )))))))' },
    { id: 4, message: 'How is your training going?' },
  ],
  newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state, //create copy state for changes
        newMessageText: action.newText,
      };

    case SEND_MESSAGE:
      return {
        ...state,
        newMessageText: '',
        messages: [
          ...state.messages,
          {
            id: 111,
            message: state.newMessageText,
          },
        ],
      };

    default:
      return state;
  }
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageTextActionCriation = text => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export default dialogsReducer;
