import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toogleIsFetching,
} from '../../redux/users-reducer';
import Preloader from '../../common/preloader/Preloader';
import { usersAPI } from '../../api/api';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toogleIsFetching(true);

    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then(responce => {
        this.props.toogleIsFetching(false);
        this.props.setUsers(responce.items);
        this.props.setTotalUsersCount(responce.totalCount);
      });
  }

  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    this.props.toogleIsFetching(true);

    usersAPI.getUsers(pageNumber, this.props.pageSize).then(responce => {
      this.props.toogleIsFetching(false);

      this.props.setUsers(responce.items);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          onPageChanged={this.onPageChanged}
          currentPage={this.props.currentPage}
          users={this.props.users}
          unfollow={this.props.unFollow}
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

export default connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toogleIsFetching,
})(UsersContainer);
