import React from 'react';
import './../App.css';

const Navbar = () => {
  return (
    <nav className="nav">
      <div>
        <a href="#1">Profile</a>
      </div>
      <div>
        <a href="#2">Messages</a>
      </div>
      <div>
        <a href="#3">News</a>
      </div>
      <div>
        <a href="#4">Music</a>
      </div>
    </nav>
  );
};
export default Navbar;
