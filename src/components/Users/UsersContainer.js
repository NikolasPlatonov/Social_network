import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import {
  followActionCreator,
  unFollowActionCreator,
  setUsersActionCreator,
} from '../../redux/users-reducer';

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    follow: userId => {
      dispatch(followActionCreator(userId));
    },
    unfollow: userId => {
      dispatch(unFollowActionCreator(userId));
    },
    setUsers: users => {
      dispatch(setUsersActionCreator(users));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
