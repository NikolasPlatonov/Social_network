import React from 'react';
import s from './Header.module.css';
import login_icon from './../../assets/images/icon_on_off.png';
import menu_icon from './../../assets/images/icon_sandvich.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <img alt="menu_icon" src={menu_icon} />
      </div>

      <div>
        <input
          placeholder={'Search here people or page...'}
          className={s.search}
          background-image={menu_icon}
        />
      </div>

      <div className={s.login}>
        <NavLink to="/login">
          <img alt="on/off_icon" src={login_icon} />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
