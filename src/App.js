import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          alt="small_logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvs-qoiOd0iO8KO7vS5sacwvqs7qKiBy72QOkIRROQtaX-481n&s"
        />
      </header>
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
      <div className="content">
        <div>
          <img
            alt="big_logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxx7aRo7H8w68TK5atLxyzQ7_eCLv6DdYCIHP96DxLrjOPOYtVAw&s"
          />
        </div>
        <div>ava + description</div>
        <div>
          My posrs
          <div>New post</div>
          <div>
            <div>Post 1</div>
            <div>Post 2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
