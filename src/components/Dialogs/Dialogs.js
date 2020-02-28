import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = props => {
  let dialogsElements = props.dialogsPage.dialogs.map(d => (
    <div className={s.ava_item}>
      <div>
        <img alt="avatar" src={d.avatar} />
        <DialogItem name={d.name} id={d.id} key={d.id} />
      </div>
    </div>
  ));

  let messagesElements = props.dialogsPage.messages.map(m => (
    <MessageItem message={m.message} id={m.id} key={m.id} />
  ));

  let sendMessage = () => {
    props.sendMessage();
  };

  let onMessageChange = e => {
    let message = e.target.value;
    props.updateNewMessageText(message);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElements}</div>
      <div className={s.messageItems}>{messagesElements}</div>
      <div className={s.inputArea}>
        <div>
          <textarea
            placeholder="Enter your message"
            onChange={onMessageChange}
            value={props.newMessageText}
          />
        </div>
        <div>
          <button onClick={sendMessage}>SENT</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
