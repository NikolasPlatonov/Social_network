import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { getUserProfile } from '../../api/api';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = 6338; //my id
    }

    getUserProfile(userId).then(responce => {
      this.props.setUserProfile(responce);
    });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = state => ({
  profile: state.profilePage.profile,
});

let withUrlDataContainerComponent = withRouter(ProfileContainer); //withRouter === HOC

export default connect(mapStateToProps, { setUserProfile })(
  withUrlDataContainerComponent
);
