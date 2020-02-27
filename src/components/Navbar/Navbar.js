import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Sitebar from '../Sitebar/Sitebar';
import StoreContext from '../../StoreContext';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.active}>
          Profile
        </NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/dialogs" activeClassName={s.active}>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.active}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.active}>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <div className={s.item_set}>
          <NavLink to="/settings" activeClassName={s.active}>
            Settings
          </NavLink>
        </div>
      </div>

      <StoreContext.Consumer>
        {store => {
          let friends = store.getState().sitebar.friends;

          return (
            <div className={s.sitebar}>
              <Sitebar friends={friends} />
            </div>
          );
        }}
      </StoreContext.Consumer>
    </nav>
  );
};

export default Navbar;
