import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import Settings from '../Settings/Settings';

const Dialogs = props => {
  console.log('TCL: props', props);
  let dialogsElements = props.dialogs.map(d => (
    <div className={s.item}>
      <img
        alt="avatar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy8Dzr5ful4rdu5spG9XbBsoTgEAZ7ECy-tfCZmPtGR2Fw4BrF&s"
      />
      <DialogItem name={d.name} id={d.id} key={d.id} avatar={d.avatar} />
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
