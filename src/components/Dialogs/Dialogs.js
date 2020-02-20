import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import {
  addMessageActionCreator,
  updateNewMessageTextActionCriation,
} from './../../redux/state';

const Dialogs = props => {
  console.log('QQQQQQQQQQQQQQQQQQQQQQQQQQQTCL: props', props);
  let dialogsElements = props.dialogs.map(d => (
    <div className={s.ava_item}>
      <div>
        <img alt="avatar" src={d.avatar} />
        <DialogItem name={d.name} id={d.id} key={d.id} />
      </div>
    </div>
  ));

  let messagesElements = props.messages.map(m => (
    <MessageItem message={m.message} id={m.id} key={m.id} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  let onMessageChange = () => {
    let message = newMessageElement.current.value;
    props.dispatch(updateNewMessageTextActionCriation(message));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElements}</div>
      <div className={s.messageItems}>{messagesElements}</div>
      <div className={s.inputArea}>
        <div>
          <textarea
            onChange={onMessageChange}
            value={props.newMessageText}
            ref={newMessageElement}
          ></textarea>
        </div>
        <div>
          <button onClick={addMessage}>SENT</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
