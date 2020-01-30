import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = props => {
  console.log('DIALOGS: props', props);
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

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElements}</div>
      <div className={s.messageItems}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
