import React from 'react';
import s from './Sitebar.module.css';

const Sitebar = props => {
  console.log('SITEBAR: props', props.friends);
  return (
    <div>
      <div className={s.group}>Sitebar</div>
      <div className={s.main}>
        <div className={s.group}>
          {props.friends.map(f => (
            <div>
              <img alt src={f.avatar} />
              <span className={s.item} key={f.id}>
                {f.id}
                {f.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sitebar;
