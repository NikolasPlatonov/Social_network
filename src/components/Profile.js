import React from 'react';
import './../App.css';

const Profile = () => {
  return (
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
  );
};

export default Profile;
