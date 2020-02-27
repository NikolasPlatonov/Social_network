import React from 'react';
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCriation,
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = props => {
  let dialogsPage = props.store.getState().dialogsPage;

  let sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  let onMessageChange = message => {
    props.store.dispatch(updateNewMessageTextActionCriation(message));
  };

  return (
    <Dialogs
      dialogsPage={dialogsPage}
      updateNewMessageText={onMessageChange}
      sendMessage={sendMessage}
    />
  );
};

export default DialogsContainer;
