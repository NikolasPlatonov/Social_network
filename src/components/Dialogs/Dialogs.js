import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
// import DialogItem from './DialogItem/DialogItem';
// import MessageItem from './MessageItem/MessageItem';

let dialogsData = [
  { id: 1, name: 'Bob' },
  { id: 2, name: 'Nick' },
  { id: 3, name: 'Sher' },
  { id: 4, name: 'Edik' },
  { id: 5, name: 'Robby' },
  { id: 6, name: 'Jack' },
];

let messagesData = [
  { id: 1, message: 'Hi, how are you?' },
  { id: 2, message: 'Did you hear new treks JZ?' },
  { id: 3, message: 'Duuuuud! Whats up? )))))))' },
  { id: 4, message: 'How is your training going?' },
  { id: 5, message: 'Come to my page in FB. There are many interesting ;-)' },
  { id: 6, message: 'Сool page, Bro! ))' },
];

const DialogItem = props => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const MessageItem = props => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogsData.map(d => (
          <DialogItem name={d.name} id={d.id} key={d.id} />
        ))}
      </div>
      <div className={s.messageItems}>
        {messagesData.map(m => (
          <MessageItem message={m.message} id={m.id} key={m.id} />
        ))}
      </div>
    </div>
  );
};

export default Dialogs;
