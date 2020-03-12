import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData } from './../../redux/auth-reducer';
import { usersAPI } from '../../api/api';

class HeaderContainer extends React.Component {
  componentDidMount() {
    usersAPI.getMyAuth().then(responce => {
      if (responce.resultCode === 0) {
        let { id, email, login } = responce.data;
        this.props.setAuthUserData(id, email, login);
      }
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
