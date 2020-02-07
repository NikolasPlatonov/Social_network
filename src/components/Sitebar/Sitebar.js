import React from 'react';
import s from './Sitebar.module.css';

const Sitebar = props => {
  return (
    <div>
      <div className={s.group}>Sitebar</div>
      <div className={s.main}>
        {props.friends.map(f => (
          <div className={s.item} key={f.id}>
            <img alt="avatar" src={f.avatar} />
            <div className={s.item}>{f.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sitebar;
