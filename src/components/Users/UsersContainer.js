import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import {
  followActionCreator,
  unFollowActionCreator,
  setUsersActionCreator,
  setCurrentPageActionCreator,
  setTotalUsersCountActionCreator,
} from '../../redux/users-reducer';

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
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
    setCurrentPage: pageNumber => {
      dispatch(setCurrentPageActionCreator(pageNumber));
    },
    setTotalUsersCount: totalCaunt => {
      dispatch(setTotalUsersCountActionCreator(totalCaunt));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
