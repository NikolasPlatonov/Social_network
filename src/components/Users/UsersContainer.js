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
  toogleIsFetchingActionCreator,
} from '../../redux/users-reducer';
import preloader from './../../assets/images/preloader.gif';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toogleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(responce => {
        this.props.toogleIsFetching(false);
        this.props.setUsers(responce.data.items);
        this.props.setTotalUsersCount(responce.data.totalCount);
      });
  }

  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    this.props.toogleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then(responce => {
        this.props.toogleIsFetching(false);
        this.props.setUsers(responce.data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <div style={{ backgroundColor: 'white' }}>
            <img alt="preloader" src={preloader} />
          </div>
        ) : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          onPageChanged={this.onPageChanged}
          currentPage={this.props.currentPage}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
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
    toogleIsFetching: isFetching => {
      dispatch(toogleIsFetchingActionCreator(isFetching));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
