import React from 'react';
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCriation,
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        let dialogsPage = store.getState().dialogsPage;

        let sendMessage = () => {
          store.dispatch(sendMessageActionCreator());
        };

        let onMessageChange = message => {
          store.dispatch(updateNewMessageTextActionCriation(message));
        };

        return (
          <Dialogs
            dialogsPage={dialogsPage}
            updateNewMessageText={onMessageChange}
            sendMessage={sendMessage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
