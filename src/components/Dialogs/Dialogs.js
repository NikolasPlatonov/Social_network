import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

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
        <DialogItem name="Bob" id="bob" />
        <DialogItem name="Nick" id="nick" />
        <DialogItem name="Sher" id="sher" />
        <DialogItem name="Edik" id="edik" />
        <DialogItem name="Robby" id="robby" />
        <DialogItem name="Jack" id="jack" />
      </div>
      <div className={s.messageItems}>
        <MessageItem message="Bla-bla-bla-bla, Bob!" />
        <MessageItem message="Bla-bla-bla-bla, Nick!" />
        <MessageItem message="Bla-bla-bla-bla, Sher!" />
        <MessageItem message="Bla-bla-bla-bla, Edik!" />
        <MessageItem message="Bla-bla-bla-bla, Robby!" />
        <MessageItem message="Bla-bla-bla-bla, Jack!" />
      </div>
    </div>
  );
};

export default Dialogs;
