import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = props => {
  console.log('TCL: props', this.props.dialogs);
  let path = '/dialogs/' + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path}>{props.data[0].name}</NavLink>
    </div>
  );
};

export default DialogItem;
