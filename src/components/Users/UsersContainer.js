import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import * as axios from 'axios';
import {
  followActionCreator,
  unFollowActionCreator,
  setUsersActionCreator,
  setCurrentPageActionCreator,
  setTotalUsersCountActionCreator,
} from '../../redux/users-reducer';

class UsersContainer extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(responce => {
        this.props.setUsers(responce.data.items);
        this.props.setTotalUsersCount(responce.data.totalCount);
      });
  }

  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then(responce => {
        this.props.setUsers(responce.data.items);
      });
  };

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        onPageChanged={this.onPageChanged}
        currentPage={this.props.currentPage}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
      />
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
