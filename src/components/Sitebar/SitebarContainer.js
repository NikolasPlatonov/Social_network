import React from 'react';
import Sitebar from './Sitebar';
import { connect } from 'react-redux';
import { addFriendsActionCreator } from './../../redux/sitebar-reducer';

const mapStateToProps = state => {
  return {
    sitebar: state.sitebar.friends,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addFriends: () => {
      dispatch(addFriendsActionCreator());
    },
  };
};

const SitebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sitebar);

export default SitebarContainer;
