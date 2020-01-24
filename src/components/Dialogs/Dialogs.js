import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <div className={s.dialog}>
          <NavLink to="/dialogs/bob">Bob</NavLink>
        </div>
        <div className={s.dialog + ' ' + s.active}>
          <NavLink to="/dialogs/nick">Nick</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/sher">Sher</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/edik">Edik</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/robby">Robby</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/jack">Jack</NavLink>
        </div>
      </div>
      <div className={s.messageItems}>
        <div className={s.message}>awrarawerfwffareaefafaferfa</div>
        <div className={s.message}>25432452545afafewa</div>
        <div className={s.message}>asfdasfae353534</div>
        <div className={s.message}>affafafafaref</div>
        <div className={s.message}>54235425wefgwesfwerg25624523</div>
        <div className={s.message}>51feevfdsvsdfvs</div>
      </div>
    </div>
  );
};

export default Dialogs;
