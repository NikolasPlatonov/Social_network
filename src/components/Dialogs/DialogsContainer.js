import React from 'react';
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCriation,
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateNewMessageText: message => {
      dispatch(updateNewMessageTextActionCriation(message));
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
