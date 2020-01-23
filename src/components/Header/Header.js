import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <img
        alt="small_logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvs-qoiOd0iO8KO7vS5sacwvqs7qKiBy72QOkIRROQtaX-481n&s"
      />
    </header>
  );
};

export default Header;
